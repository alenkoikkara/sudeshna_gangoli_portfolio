import { caseStudiesData } from '../data/caseStudiesData'
import asap5 from '../assets/asap/Container-5.png'
import asap6 from '../assets/asap/Container-6.png'

export default function ReturnLoopCaseStudyView() {
  const data = caseStudiesData.ReturnLoop;

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
            ReturnLoop — frictionless online returns
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
        <p className="text-lg text-body leading-relaxed font-normal mb-8 max-w-3xl">
          {data.problemText}
        </p>

        <div className="my-10 p-8 bg-red-500/2 border-l-4 border-red-500 rounded-r-4xl max-w-3xl">
          <p className="italic text-xl text-heading leading-relaxed font-semibold">
            "The gap is between intent and execution."
          </p>
        </div>
      </div>

      {/* Research & Interviews */}
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

        {/* Findings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {data.researchFindings.map((finding, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-3xl p-8 flex flex-col gap-4">
              <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </span>
              <div>
                <h4 className="text-lg font-bold text-heading mb-2">{finding.title}</h4>
                <p className="text-sm text-muted font-medium leading-relaxed">{finding.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Margaret Spotlight */}
        <div className="bg-amber-500/2 border border-amber-500/20 rounded-[2.5rem] p-8 md:p-12 max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700 block mb-6">User Spotlight</span>
          <p className="italic text-xl text-heading font-medium leading-relaxed mb-6">
            "{data.researchSpotlight.quote}"
          </p>
          <span className="block text-xs font-bold uppercase tracking-wider text-muted not-italic">
            — {data.researchSpotlight.author}
          </span>
        </div>
      </div>

      {/* Competitive Edge */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-brand/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand w-fit">
          Competitive Edge
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-2 tracking-[-0.02em] leading-tight">
          {data.competitiveHeading}
        </h3>
        <p className="text-lg text-body leading-relaxed font-normal mb-12 max-w-3xl">
          {data.competitiveSubheading}
        </p>

        {/* Comparison Table */}
        <div className="border border-black/5 rounded-3xl overflow-hidden bg-black/1 max-w-3xl">
          <div className="grid grid-cols-4 bg-black/3 p-6 border-b border-black/5 text-xs font-black uppercase tracking-wider text-heading text-center">
            <div className="text-left">Feature</div>
            <div>Uber</div>
            <div>DoorDash</div>
            <div className="text-brand">ReturnLoop</div>
          </div>

          <div className="divide-y divide-black/5 text-center">
            {data.competitiveTable.map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-6 items-center hover:bg-black/2 transition-colors duration-200 text-sm font-semibold">
                <div className="text-left text-heading font-bold">{row.feature}</div>
                <div className="text-muted">{row.uber}</div>
                <div className="text-muted">{row.doordash}</div>
                <div className="text-brand font-bold bg-brand/5 py-2 rounded-xl">{row.returnloop}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-muted font-bold tracking-wider italic uppercase">
          {data.competitiveSummary}
        </p>
      </div>

      {/* Insights & Design Change */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-indigo-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-indigo-600 w-fit">
          Insights & Pivots
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          {data.insightsHeading}
        </h3>

        {/* Insights Table */}
        <div className="border border-black/5 rounded-3xl overflow-hidden bg-black/1 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-black/3 p-6 border-b border-black/5 text-xs font-black uppercase tracking-wider text-heading">
            <div>Research Insight</div>
            <div className="md:pl-8 md:border-l md:border-black/5">Design Decision</div>
          </div>

          <div className="divide-y divide-black/5">
            {data.insightsTable.map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 items-start hover:bg-black/2 transition-colors duration-200">
                <div className="text-sm text-heading font-semibold leading-relaxed flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
                  {row.research}
                </div>
                <div className="md:pl-8 text-sm text-brand font-bold leading-relaxed md:border-l md:border-black/5">
                  → {row.design}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Pivot Callout */}
        <div className="p-8 md:p-12 bg-neutral-900 text-white rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand/10 rounded-full blur-3xl"></div>
          <h4 className="text-2xl font-black text-white mb-4">{data.pivotHeading}</h4>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-semibold max-w-3xl">
            {data.pivotText}
          </p>
        </div>
      </div>

      {/* User Personas */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-purple-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-purple-600 w-fit">
          Personas
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          Built personas straight from the interviews
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.personas.map((pers, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-55">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-purple-600 block mb-2">{pers.type}</span>
                <h4 className="text-xl font-black text-heading mb-4">{pers.name}</h4>
              </div>
              <p className="italic text-base text-muted font-semibold border-l-2 border-black/10 pl-4 py-1">
                {pers.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Map */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-green-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-green-600 w-fit">
          Journey Map
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          Current Experience vs ReturnLoop
        </h3>

        {/* Journey Map Grid */}
        <div className="border border-black/5 rounded-3xl overflow-hidden bg-black/1">
          <div className="grid grid-cols-3 bg-black/3 p-6 border-b border-black/5 text-xs font-black uppercase tracking-wider text-heading text-center">
            <div className="text-left">Stage</div>
            <div>Today (Friction Flow)</div>
            <div className="text-green-700 bg-green-500/10 py-1 rounded-lg">ReturnLoop Flow</div>
          </div>

          <div className="divide-y divide-black/5 text-center">
            {data.journeyMap.map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 md:p-8 items-center hover:bg-black/2 transition-colors duration-200 text-sm font-semibold">
                <div className="text-left text-heading font-black">{row.stage}</div>
                <div className="text-red-500/80 pr-4">✕ {row.today}</div>
                <div className="text-green-700 font-bold pl-4">✓ {row.returnloop}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Flow Map & Mockups */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-orange-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-orange-600 w-fit">
          User Flow Map
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          {data.flowHeading}
        </h3>

        {/* Flow Steps Indicators */}
        <div className="flex flex-wrap items-center gap-3 mb-12 bg-black/1 border border-black/5 rounded-3xl p-6">
          {data.flowSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="bg-white text-body border border-black/5 text-xs font-bold px-4 py-2.5 rounded-full shadow-sm">
                {step}
              </span>
              {i < data.flowSteps.length - 1 && <span className="text-muted text-lg">→</span>}
            </div>
          ))}
        </div>

        {/* Solution Mockups */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-1/2">
            <p className="text-lg text-body leading-relaxed font-semibold">
              {data.flowSummary}
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <div className="bg-black/2 border border-black/5 rounded-4xl p-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm aspect-16/10 flex items-center justify-center">
                <img src={asap5} alt="ReturnLoop Mockup 1" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="bg-black/2 border border-black/5 rounded-4xl p-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm aspect-16/10 flex items-center justify-center">
                <img src={asap6} alt="ReturnLoop Mockup 2" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology & Reflection */}
      <div className="border-t border-black/5 pt-16 pb-8">
        <span className="rounded-full px-3 py-1 bg-black/5 text-[10px] uppercase tracking-[0.2em] font-semibold text-body w-fit">
          Reflections
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-8 tracking-[-0.02em] leading-tight">
          {data.methodologyHeading}
        </h3>
        
        <div className="max-w-4xl p-8 md:p-12 bg-neutral-50 border border-black/5 rounded-[2.5rem]">
          <p className="text-lg md:text-xl text-heading font-semibold leading-relaxed">
            {data.methodologyText}
          </p>
        </div>
      </div>
    </div>
  )
}
