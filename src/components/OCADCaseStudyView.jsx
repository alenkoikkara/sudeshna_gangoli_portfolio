import React from 'react'
import { caseStudiesData } from '../data/caseStudiesData'
import asap1 from '../assets/asap/Container-1.png'
import asap2 from '../assets/asap/Container-2.png'
import asap3 from '../assets/asap/Container-3.png'
import asap4 from '../assets/asap/Container-4.png'

export default function OCADCaseStudyView() {
  const data = caseStudiesData.OCAD;
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
            About Project
          </span>
          <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
            ASAP — AI-Powered Executive Function Scaffolding
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

        {/* Problem Quote */}
        <div className="my-10 p-8 bg-black/2 border-l-4 border-brand rounded-r-4xl max-w-3xl">
          <p className="italic text-xl text-heading leading-relaxed font-medium">
            "{data.problemQuote}"
          </p>
          <span className="block mt-4 text-xs font-bold uppercase tracking-wider text-muted not-italic">
            — {data.problemQuoteAuthor}
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {data?.metrics?.map((m, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-4xl p-6 text-center">
              <span className="block text-4xl font-black text-brand mb-2">{m.value}</span>
              <p className="text-xs text-muted font-medium leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Collaboration */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-brand/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand w-fit">
          Human + AI Co-Design
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
          {data.aiHeading}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {data.aiPhases.map((p, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-4xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">{p.phase}</span>
                <div className="flex gap-2 mt-2 mb-6">
                  {p.tools.map((t, idx) => (
                    <span key={idx} className="bg-black/5 text-[9px] font-bold px-2 py-0.5 rounded-full text-body">{t}</span>
                  ))}
                </div>
                <p className="text-sm text-body leading-relaxed mb-6 font-medium">
                  {p.desc}
                </p>
              </div>
              <div className="border-t border-black/5 pt-4">
                <span className="text-[9px] uppercase tracking-wider font-bold text-brand block mb-1">Human Addition</span>
                <p className="text-xs text-muted leading-relaxed font-semibold">
                  {p.insight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-green-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-green-600 w-fit">
          Solutions
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          {data.solutionsHeading}
        </h3>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <ul className="flex flex-col gap-6">
              {data.solutionsList.map((s, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-lg text-heading font-semibold leading-snug">{s}</p>
                </li>
              ))}
            </ul>
            <p className="mt-12 text-sm uppercase tracking-wider font-bold text-brand border-l-2 border-brand pl-4 py-1">
              {data.solutionsQuote}
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <div className="bg-black/2 border border-black/5 rounded-4xl p-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm aspect-16/10 flex items-center justify-center">
                <img src={asap1} alt="Solution Mockup 1" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-black/2 border border-black/5 rounded-4xl p-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm aspect-16/10 flex items-center justify-center">
                <img src={asap2} alt="Solution Mockup 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Synthetic vs Human testing */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-purple-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-purple-600 w-fit">
          Testing Gaps
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-6 tracking-[-0.02em] leading-tight">
          {data.insightHeading}
        </h3>
        <p className="text-lg text-body leading-relaxed font-normal mb-12 max-w-3xl">
          {data.insightText}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.insightGrid.map((p, i) => (
            <div key={i} className="bg-black/1 border border-black/5 rounded-[2rem] p-8 flex flex-col justify-between min-h-[180px]">
              <div>
                <h5 className="text-base font-bold text-heading">{p.name}</h5>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted block mb-4">{p.tag}</span>
              </div>
              <p className="text-sm text-body leading-relaxed font-semibold">
                "{p.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Empathetic Pivot */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-orange-500/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-orange-600 w-fit">
          Design Pivot
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-2 tracking-[-0.02em] leading-tight">
          {data.pivotHeading}
        </h3>
        <p className="text-xl font-bold text-brand mb-12 leading-tight">
          {data.pivotSubheading}
        </p>

        {/* Before / After Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Before */}
          <div className="border border-red-500/20 bg-red-500/[0.01] rounded-[2rem] p-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 block mb-2">{data.pivotBefore.label}</span>
            <h4 className="text-2xl font-black text-heading mb-4 line-through decoration-red-500/40">{data.pivotBefore.title}</h4>
            <p className="text-sm text-muted leading-relaxed font-semibold">{data.pivotBefore.desc}</p>
          </div>

          {/* After */}
          <div className="border border-green-500/20 bg-green-500/[0.01] rounded-[2rem] p-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-600 block mb-2">{data.pivotAfter.label}</span>
            <h4 className="text-2xl font-black text-heading mb-4 text-green-600">{data.pivotAfter.title}</h4>
            <p className="text-sm text-body leading-relaxed font-semibold">{data.pivotAfter.desc}</p>
          </div>
        </div>

        <p className="text-sm text-muted italic font-medium max-w-3xl leading-relaxed border-l-2 border-black/10 pl-4 mb-12">
          "{data.pivotCaption}"
        </p>

        {/* Pivot Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/[0.02] border border-black/5 rounded-[2.5rem] p-3">
            <div className="bg-white rounded-[calc(2.5rem-0.75rem)] overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center">
              <img src={asap3} alt="Before pivot mockup" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-black/[0.02] border border-black/5 rounded-[2.5rem] p-3">
            <div className="bg-white rounded-[calc(2.5rem-0.75rem)] overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center">
              <img src={asap4} alt="After pivot mockup" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-black/5 text-[10px] uppercase tracking-[0.2em] font-semibold text-body w-fit">
          Executive Takeaways
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          Lessons from the Machine
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.lessons.map((l, i) => (
            <div key={i} className="bg-black/[0.01] border border-black/5 rounded-[2rem] p-8">
              <h5 className="text-lg font-bold text-heading mb-3">{l.title}</h5>
              <p className="text-sm text-body leading-relaxed font-semibold">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reflections */}
      <div className="border-t border-black/5 pt-16">
        <span className="rounded-full px-3 py-1 bg-brand/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand w-fit">
          Design Retrospective
        </span>
        <h3 className="text-3xl font-black text-heading mt-6 mb-12 tracking-[-0.02em] leading-tight">
          Reflection
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.reflections.map((r, i) => (
            <div key={i} className="bg-black/[0.01] border border-black/5 rounded-[2rem] p-8">
              <h5 className="text-base font-bold text-heading mb-4 border-b border-black/5 pb-2">{r.title}</h5>
              <p className="text-xs text-muted leading-relaxed font-semibold">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Conclusion Quote */}
        <div className="mt-20 text-center border-t border-black/5 pt-16">
          <h4 className="text-2xl md:text-3xl font-black text-heading leading-tight italic tracking-tight max-w-4xl mx-auto">
            "{data.conclusion}"
          </h4>
        </div>
      </div>
    </div>
  )
}
