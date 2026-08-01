import { caseStudiesData } from '../data/caseStudiesData'
import asap7 from '../assets/asap/Container-7.png'
import asap8 from '../assets/asap/Container-8.png'

export default function PetClearCaseStudyView() {
  const data = caseStudiesData.PetClear;
  
  if (!data) return null;

  return (
    <div className="flex flex-col gap-24 text-left">
      {/* Overview & Metadata */}
      <div>
        {/* Metadata Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-black/5 pb-12 mb-16">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Client</h4>
            <p className="text-sm font-bold text-body">{data.client}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Role</h4>
            <p className="text-sm font-bold text-body">{data.role}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Timeline</h4>
            <p className="text-sm font-bold text-body">{data.timeline}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Services</h4>
            <p className="text-sm font-bold text-body">{data.services}</p>
          </div>
        </div>

        {/* About Project */}
        <div className="max-w-3xl">
          <span className="rounded-full px-3 py-1 bg-black/5 text-[10px] uppercase tracking-[0.2em] font-semibold text-body w-fit">
            {data.aboutTitle}
          </span>
          <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
            PetClear — Streamlining Pet Travel Regulations
          </h3>
          <p className="text-xl text-body leading-relaxed font-normal">
            {data.aboutText}
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-red-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-red-600 w-fit">
          Problem Statement
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
          {data.problemHeading}
        </h3>
        <p className="text-lg text-body leading-relaxed font-normal mb-12 max-w-3xl">
          {data.problemText}
        </p>

        {/* Gaps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.gaps.map((gap, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-3xl p-8 flex flex-col gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </span>
              <div>
                <h4 className="text-lg font-bold text-heading mb-2">{gap.title}</h4>
                <p className="text-sm text-muted font-medium leading-relaxed">{gap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-amber-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-700 w-fit">
          Research
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-2 tracking-[-0.02em] leading-tight">
          {data.researchHeading}
        </h3>
        <p className="text-lg text-body leading-relaxed font-normal mb-12 max-w-3xl">
          {data.researchSubheading}
        </p>

        {/* Audit Table Card */}
        <div className="border border-black/5 rounded-3xl overflow-hidden bg-black/1">
          <div className="p-8 border-b border-black/5 bg-black/2 text-left">
            <h4 className="text-base font-bold text-heading uppercase tracking-wider mb-2">
              {data.researchTableTitle}
            </h4>
            <p className="text-xs text-muted font-medium leading-relaxed">
              {data.researchTableSubtitle}
            </p>
          </div>
          
          <div className="divide-y divide-black/5">
            {data.researchTable.map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 items-start hover:bg-black/2 transition-colors duration-200">
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-bold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded mt-0.5">Rule Gap</span>
                  <p className="text-sm text-heading font-semibold leading-snug">{row.rule}</p>
                </div>
                <div className="flex gap-4 items-start md:border-l md:border-black/5 md:pl-8">
                  <span className="text-xs font-bold text-red-600 bg-red-500/10 px-2 py-0.5 rounded mt-0.5">Impact</span>
                  <p className="text-sm text-muted font-medium leading-snug">{row.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Summary Quote/Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {data.researchSummary.map((summaryText, i) => (
            <div key={i} className="border-l-4 border-amber-500 pl-6 py-2">
              <p className="text-base text-heading font-bold leading-relaxed">{summaryText}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Persona */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-indigo-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-indigo-600 w-fit">
          User Persona
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
          Five real participants. Different failure points.
        </h3>

        {/* Persona Bento Card */}
        <div className="bg-black/1 border border-black/5 rounded-[2.5rem] p-8 md:p-12">
          <div className="border-b border-black/5 pb-8 mb-8">
            <h4 className="text-2xl font-black text-heading mb-2">{data.persona.name}</h4>
            <p className="text-xs font-bold text-muted uppercase tracking-wider">{data.persona.tag}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Wants */}
            <div>
              <h5 className="text-sm font-bold text-heading uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Wants
              </h5>
              <ul className="flex flex-col gap-4">
                {data.persona.wants.map((want, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <p className="text-sm text-body font-semibold">{want}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Barriers */}
            <div>
              <h5 className="text-sm font-bold text-heading uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Barriers
              </h5>
              <ul className="flex flex-col gap-4">
                {data.persona.barriers.map((barrier, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-red-500 font-bold text-sm">✕</span>
                    <p className="text-sm text-body font-semibold">{barrier}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dark Scenario Box */}
          <div className="mt-12 bg-neutral-900 text-white rounded-4xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
            
            <p className="italic text-xl md:text-2xl text-neutral-100 font-medium leading-relaxed mb-8">
              "{data.persona.quote}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-8 text-left">
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">Scenario</span>
                <p className="text-sm text-neutral-200 font-semibold">{data.persona.scenario}</p>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-8">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">Failure Point</span>
                <p className="text-sm text-red-200 font-bold leading-relaxed">{data.persona.mistakes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-green-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-green-600 w-fit">
          Solution
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
          {data.solutionHeading}
        </h3>
        <p className="text-lg text-body leading-relaxed font-normal mb-8 max-w-3xl">
          {data.solutionText}
        </p>

        {/* Designed Specifically callout */}
        <div className="p-8 bg-black/2 border-l-4 border-green-600 rounded-r-4xl max-w-3xl mb-12">
          <p className="text-base text-heading leading-relaxed font-semibold">
            {data.solutionCallout}
          </p>
        </div>

        {/* Interactive mockup section */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-1/2">
            {/* Styled feature tabs mimicking app categories */}
            <div className="flex flex-wrap gap-3 mb-8">
              {data.solutionTabs.map((tab, i) => (
                <span key={i} className="bg-black/5 hover:bg-black/8 border border-black/5 text-body text-[11px] font-bold px-4 py-2 rounded-full cursor-pointer transition-all duration-300">
                  {tab}
                </span>
              ))}
            </div>

            <ul className="flex flex-col gap-6">
              {data.solutionFeatures.map((feat, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h5 className="text-base font-bold text-heading leading-snug">{feat.title}</h5>
                    <p className="text-sm text-muted font-medium leading-relaxed mt-1">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <div className="bg-black/2 border border-black/5 rounded-4xl p-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm aspect-16/10 flex items-center justify-center">
                <img src={asap7} alt="PetClear Mockup 1" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="bg-black/2 border border-black/5 rounded-4xl p-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm aspect-16/10 flex items-center justify-center">
                <img src={asap8} alt="PetClear Mockup 2" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-indigo-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-indigo-600 w-fit">
          Before vs With PetClear
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          How PetClear Redefines the Journey
        </h3>

        {/* Before / After Table */}
        <div className="border border-black/5 rounded-3xl overflow-hidden bg-black/1">
          <div className="grid grid-cols-2 bg-black/3 p-6 border-b border-black/5 text-xs font-black uppercase tracking-wider text-heading">
            <div>Before</div>
            <div className="pl-6 md:pl-8 border-l border-black/5">With PetClear</div>
          </div>

          <div className="divide-y divide-black/5">
            {data.beforeAfterTable.map((row, i) => (
              <div key={i} className="grid grid-cols-2 p-6 md:p-8 items-stretch hover:bg-black/2 transition-colors duration-200">
                <div className="pr-6 md:pr-8 text-sm font-semibold text-red-600/80 leading-relaxed flex items-center">
                  ✕ {row.before}
                </div>
                <div className="pl-6 md:pl-8 text-sm font-bold text-green-700 leading-relaxed flex items-center border-l border-black/5">
                  ✓ {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-brand/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand w-fit">
          Impact
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          Quantifiable Peace of Mind
        </h3>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.impactPoints.map((point, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-4xl p-6 text-center hover:shadow-md transition-all duration-300">
              <span className="block text-xl font-black text-brand mb-2">{point.title}</span>
              <p className="text-xs text-muted font-bold leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="border-t border-black/5 pt-16 pb-8">
        <span className="rounded-full px-3 py-1 bg-black/5 text-[10px] uppercase tracking-[0.2em] font-semibold text-body w-fit">
          Conclusion
        </span>
        <div className="mt-8 max-w-4xl p-8 md:p-12 bg-neutral-50 border border-black/5 rounded-[2.5rem] relative">
          <div className="text-3xl md:text-4xl font-extrabold text-heading tracking-[-0.02em] leading-[1.3] text-left">
            "The problem was never the rules. It was that <span className="text-brand">nobody made them visible.</span> PetClear makes what already exists visible, organized, and timely for the person who needs it most."
          </div>
        </div>
      </div>
    </div>
  )
}
