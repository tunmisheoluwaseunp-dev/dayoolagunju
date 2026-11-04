import type { CaseStudyScreenshot } from '@/data/caseStudies';

export function BrowserFrame({ screenshot, className = '', loading = 'lazy' }: {
  screenshot: CaseStudyScreenshot;
  className?: string;
  loading?: 'eager' | 'lazy';
}) {
  return <figure className={`browser-frame ${className}`}>
    <div className="browser-frame-bar" aria-hidden="true"><i/><i/><i/><span/></div>
    <img
      src={screenshot.src}
      srcSet={screenshot.srcSet}
      sizes="(max-width: 767px) 92vw, (max-width: 1200px) 86vw, 1120px"
      width={screenshot.width}
      height={screenshot.height}
      alt={screenshot.alt}
      loading={loading}
      decoding="async"
    />
  </figure>;
}