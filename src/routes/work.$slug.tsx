import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, FileCheck2, LayoutDashboard, LockKeyhole, Mail, PanelLeft, Pencil, ShieldCheck, UserRound, UsersRound, X, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BookButton, EmailButton } from '@/components/portfolio/primitives';
import { BrowserFrame } from '@/components/portfolio/browser-frame';
import { publishedCaseStudies } from '@/data/caseStudies';
import { copy } from '@/data/portfolio';

const featureIcons = [Mail, UsersRound, FileCheck2, ShieldCheck, LayoutDashboard, Clock3, PanelLeft, UserRound, Pencil];

export const Route = createFileRoute('/work/$slug')({
  component: CaseStudyPage,
  head: ({ params }) => {
    const study = publishedCaseStudies.find((item) => item.slug === params.slug);
    const title = study ? `${study.title} — Dayo Olagunju` : `Case study unavailable — Dayo Olagunju`;
    const description = study?.summary ?? 'Explore selected Softr and Airtable work by Dayo Olagunju.';
    return { meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ] };
  },
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const study = publishedCaseStudies.find((item) => item.slug === slug);
  const reduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const journeyRefs = useRef<Array<HTMLDivElement | null>>([]);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!study) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = journeyRefs.current.findIndex((element) => element === visible.target);
      if (index >= 0) setActiveStep(index);
    }, { rootMargin: '-35% 0px -42% 0px', threshold: [0.1, 0.35, 0.65] });
    journeyRefs.current.forEach((element) => { if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [study]);

  useEffect(() => {
    if (lightboxIndex === null || !study) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setLightboxIndex((index) => index === null ? null : (index + 1) % study.screenshots.length);
      if (event.key === 'ArrowLeft') setLightboxIndex((index) => index === null ? null : (index - 1 + study.screenshots.length) % study.screenshots.length);
      if (event.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, study]);

  if (!study) return <main className="case-study-missing"><p>That case study isn’t available.</p><Link to="/">Return to Dayo’s portfolio <ArrowUpRight size={17}/></Link></main>;

  const selectedScreenshot = lightboxIndex === null ? null : study.screenshots[lightboxIndex];
  const previousScreenshot = () => { setZoomed(false); setLightboxIndex((index) => index === null ? null : (index - 1 + study.screenshots.length) % study.screenshots.length); };
  const nextScreenshot = () => { setZoomed(false); setLightboxIndex((index) => index === null ? null : (index + 1) % study.screenshots.length); };

  return <main className="case-study-page">
    <div className="case-study-nav container">
      <Link to="/" className="case-back"><ArrowLeft size={17}/> <span>{copy.name}</span></Link>
      <BookButton>{'Book a call'}</BookButton>
    </div>

    <section className="case-study-hero container">
      <span className="eyebrow">Featured case study</span>
      <h1>{study.title}</h1>
      <div className="case-study-meta"><span>{study.role}</span><div className="tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <p className="case-study-summary">{study.summary}</p>
      <button className="case-image-open case-hero-image" type="button" onClick={() => setLightboxIndex(4)} aria-label="Open worker dashboard screenshot">
        <BrowserFrame screenshot={study.screenshots[4]!} loading="eager"/>
      </button>
    </section>

    <section className="case-content-section container">
      <span className="eyebrow">Overview</span>
      <p className="case-overview-copy">{study.overview}</p>
      <div className="case-contrast-grid">
        <article className="glass case-info-card"><span className="case-card-index">01</span><h2>The challenge</h2><p>{study.challenge}</p></article>
        <article className="glass case-info-card"><span className="case-card-index">02</span><h2>The solution</h2><p>{study.solution}</p></article>
      </div>
    </section>

    <section className="case-content-section container">
      <div className="section-heading"><span className="eyebrow">The build</span><h2>What I built</h2></div>
      <div className="case-feature-grid">{study.features.map((feature, index) => {
        const Icon = featureIcons[index] ?? Check;
        return <motion.article className="glass case-feature" key={feature} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}>
          <span className="case-feature-icon"><Icon size={19}/></span><p>{feature}</p>
        </motion.article>;
      })}</div>
    </section>

    <section className="case-content-section case-journey-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">From first visit to profile</span><h2>The user journey</h2></div>
        <div className="case-journey">
          <motion.div className="case-journey-progress" aria-hidden="true" animate={{ scaleY: (activeStep + 1) / study.screenshots.length }} transition={{ duration: reduced ? 0 : 0.35 }}/>
          {study.screenshots.map((screenshot, index) => <div className={`case-journey-step ${activeStep === index ? 'is-active' : ''}`} key={screenshot.caption} ref={(element) => { journeyRefs.current[index] = element; }} aria-current={activeStep === index ? 'step' : undefined}>
            <div className="case-journey-point"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="case-journey-copy"><span className="eyebrow">{screenshot.caption}</span><p>{screenshot.alt}</p></div>
            <button className="case-image-open case-journey-image" type="button" onClick={() => setLightboxIndex(index)} aria-label={`Open screenshot: ${screenshot.caption}`}>
              <BrowserFrame screenshot={screenshot}/>
            </button>
          </div>)}
        </div>
        <div className="case-journey-dots" aria-label="Choose user journey step">{study.screenshots.map((screenshot, index) => <Button key={screenshot.caption} variant="ghost" size="icon" className={activeStep === index ? 'is-active' : ''} aria-label={`Show ${screenshot.caption}`} aria-pressed={activeStep === index} onClick={() => {setActiveStep(index);journeyRefs.current[index]?.scrollIntoView({behavior: reduced ? 'instant' : 'smooth', block: 'nearest', inline: 'center'});}}><span/></Button>)}</div>
      </div>
    </section>

    <section className="case-content-section container">
      <div className="glass case-built-with"><div><span className="eyebrow">Built with</span><h2>Softr</h2><p>A branded member portal with distinct journeys for workers and companies.</p></div><span className="case-built-mark" aria-hidden="true">S</span></div>
    </section>

    <section className="case-cta-section">
      <div className="container case-cta-inner"><span className="eyebrow">Have a similar project?</span><h2>Need a portal like this?</h2><p>Tell me what your team and users need. We’ll work out the right next step.</p><div className="cta-pair"><BookButton/><EmailButton/></div></div>
    </section>

    {publishedCaseStudies.length > 1 && <nav className="container case-next-project" aria-label="Next project"><span className="eyebrow">Next project</span><Link to="/work/$slug" params={{ slug: publishedCaseStudies.find((item) => item.slug !== study.slug)?.slug ?? study.slug }}>{publishedCaseStudies.find((item) => item.slug !== study.slug)?.title}<ArrowUpRight size={18}/></Link></nav>}

    <Dialog open={selectedScreenshot !== null} onOpenChange={(open) => {if (!open) {setLightboxIndex(null);setZoomed(false);}}}>
      <DialogContent className="case-lightbox" aria-describedby={undefined}>
        {selectedScreenshot && lightboxIndex !== null && <>
          <DialogTitle className="case-lightbox-title">{selectedScreenshot.caption}</DialogTitle>
          <Button className="case-lightbox-close" variant="outline" size="icon" aria-label="Close screenshot" onClick={() => {setLightboxIndex(null);setZoomed(false);}}><X size={19}/></Button>
          <div className={`case-lightbox-viewport ${zoomed ? 'is-zoomed' : ''}`} onTouchStart={(event) => {touchStartX.current = event.touches[0]?.clientX ?? null;}} onTouchEnd={(event) => {const start = touchStartX.current;const end = event.changedTouches[0]?.clientX;if(start !== null && end !== undefined && Math.abs(start-end) > 55) (start > end ? nextScreenshot : previousScreenshot)();touchStartX.current = null;}}>
            <BrowserFrame screenshot={selectedScreenshot} className={zoomed ? 'case-lightbox-zoomed' : ''}/>
          </div>
          <div className="case-lightbox-controls">
            <Button variant="outline" size="icon" aria-label="Previous screenshot" onClick={previousScreenshot}><ArrowLeft size={18}/></Button>
            <span>{lightboxIndex + 1} / {study.screenshots.length}</span>
            <Button variant="outline" size="icon" aria-label={zoomed ? 'Zoom out' : 'Zoom in'} aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? <ZoomOut size={18}/> : <ZoomIn size={18}/>}</Button>
            <Button variant="outline" size="icon" aria-label="Next screenshot" onClick={nextScreenshot}><ArrowRight size={18}/></Button>
          </div>
        </>}
      </DialogContent>
    </Dialog>
  </main>;
}