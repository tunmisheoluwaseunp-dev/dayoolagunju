import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { talentaCaseStudy } from '@/data/caseStudies';
import { BrowserFrame } from '@/components/portfolio/browser-frame';

const screenshots = talentaCaseStudy.screenshots;
const dashboard = screenshots[4]!;
const roleChoice = screenshots[1]!;
const consent = screenshots[3]!;

export function FeaturedCaseStudyCard() {
  return <Link className="featured-case-link" to="/work/$slug" params={{ slug: talentaCaseStudy.slug }} aria-label={`View featured case study: ${talentaCaseStudy.title}`}>
    <div className="featured-case-cover" aria-hidden="true">
      <div className="featured-case-float featured-case-float-role"><BrowserFrame screenshot={{ ...roleChoice, alt: '' }}/></div>
      <div className="featured-case-float featured-case-float-consent"><BrowserFrame screenshot={{ ...consent, alt: '' }}/></div>
      <div className="featured-case-main"><BrowserFrame screenshot={{ ...dashboard, alt: '' }}/></div>
    </div>
    <div className="featured-case-copy">
      <div className="featured-case-heading"><span className="featured-badge">Featured</span><span className="featured-case-arrow"><ArrowUpRight size={20}/></span></div>
      <h3>{talentaCaseStudy.title}</h3>
      <p>{talentaCaseStudy.summary}</p>
      <div className="tags">{talentaCaseStudy.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <span className="featured-case-action">View case study <ArrowUpRight size={17}/></span>
    </div>
  </Link>;
}