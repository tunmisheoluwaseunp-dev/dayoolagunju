import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useInView, useReducedMotion, animate } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { copy, links } from '@/data/portfolio';
import { cn } from '@/lib/utils';

declare global { interface Window { Calendly?: {initPopupWidget: (options: {url: string}) => void} } }
export function BookButton({children = copy.primary, className = ''}: {children?: ReactNode; className?: string}) {
  const reduced = useReducedMotion();
  const move = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.transform = `translate(${(e.clientX-rect.left-rect.width/2)*.07}px, ${(e.clientY-rect.top-rect.height/2)*.1}px)`;
  };
  return <Button className={cn('book-button group', className)} onMouseMove={move} onMouseLeave={e => {e.currentTarget.style.transform='';}} onClick={() => {
    if (window.Calendly) {try {window.Calendly.initPopupWidget({url: links.calendly}); return;} catch { /* use link fallback */ }}
    window.open(links.calendly, '_blank', 'noopener,noreferrer');
  }}>{children}<ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Button>;
}
export function EmailButton() {return <Button variant="outline" asChild className="email-button"><a href={links.email}><Mail/>{copy.email}</a></Button>;}
export function Reveal({children, className, delay=0}: {children: ReactNode; className?: string; delay?: number}) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : {opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.55,delay}}>{children}</motion.div>;
}
export function Glass({children, className=''}: {children: ReactNode; className?: string}) {
  return <div className={cn('glass spotlight',className)} onMouseMove={e => { const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--spot-x',`${e.clientX-r.left}px`); e.currentTarget.style.setProperty('--spot-y',`${e.clientY-r.top}px`); }}>{children}</div>;
}
export function SectionHeading({label,title,sub}: {label:string;title:string;sub?:string}) {return <div className="section-heading"><span className="eyebrow">{label}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</div>;}
export function Count({value, suffix='', currency}: {value:number;suffix?:string;currency?:string}) {
  const ref=useRef<HTMLSpanElement>(null); const inView=useInView(ref,{once:true}); const reduced=useReducedMotion(); const [shown,setShown]=useState(value);
  useEffect(() => {if(!inView)return; if(reduced){setShown(value);return;} const controls=animate(0,value,{duration:1.1,onUpdate:n=>setShown(Math.round(n))});return()=>controls.stop();},[value,inView,reduced]);
  return <span ref={ref}>{currency ? new Intl.NumberFormat('en-US',{style:'currency',currency,maximumFractionDigits:0}).format(shown) : shown}{suffix}</span>;
}