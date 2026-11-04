import { useState } from 'react';
import { Calculator, ArrowDownRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { copy, labels } from '@/data/portfolio';
import { BookButton, Count, Glass } from './primitives';

export function CostCalculator() {
  const [hours,setHours]=useState(10);const [people,setPeople]=useState(3);const [rate,setRate]=useState(25);const [currency,setCurrency]=useState('USD');
  const yearly=hours*people*rate*52;
  return <Glass className="calculator"><div className="calculator-inputs"><Calculator className="text-accent" size={28}/><h3>{copy.calculatorTitle}</h3>
    {[{label:labels.hours,value:hours,set:setHours,min:0,max:60,step:1},{label:labels.people,value:people,set:setPeople,min:1,max:50,step:1},{label:labels.rate,value:rate,set:setRate,min:0,max:currency==='NGN'?20000:250,step:currency==='NGN'?100:1}].map((input,i)=><div className="slider-field" key={input.label}><div><label id={`slider-label-${i}`}>{input.label}</label><span>{i===2?new Intl.NumberFormat('en-US',{style:'currency',currency,maximumFractionDigits:0}).format(input.value):input.value}</span></div><Slider aria-labelledby={`slider-label-${i}`} value={[input.value]} onValueChange={v=>input.set(v[0]??input.min)} min={input.min} max={input.max} step={input.step}/></div>)}
    <label className="currency-field">{labels.currency}<select value={currency} onChange={e=>{setCurrency(e.target.value);setRate(e.target.value==='NGN'?5000:25);}}>{['USD','EUR','GBP','NGN'].map(c=><option key={c}>{c}</option>)}</select></label>
    </div><div className="calculator-output"><ArrowDownRight size={32} className="text-primary"/><p>{labels.monthly}</p><strong data-testid="monthly-cost"><Count value={yearly/12} currency={currency}/></strong><div className="annual"><span>{labels.yearly}</span><b data-testid="yearly-cost"><Count value={yearly} currency={currency}/></b></div><p className="disclaimer">{copy.disclaimer}</p><BookButton>{copy.calculatorCta}</BookButton></div></Glass>;
}