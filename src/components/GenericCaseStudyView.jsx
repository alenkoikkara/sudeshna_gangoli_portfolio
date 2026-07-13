import React from 'react'
import { caseStudiesData } from '../data/caseStudiesData'

export default function GenericCaseStudyView({ selectedProject }) {
  const projectData = caseStudiesData[selectedProject.title];
  return (
    <div className="text-left">
      {/* Metadata Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-black/5 pb-12 mb-16">
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Client</h4>
          <p className="text-sm font-bold text-body">{projectData?.client}</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Role</h4>
          <p className="text-sm font-bold text-body">{projectData?.role}</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Timeline</h4>
          <p className="text-sm font-bold text-body">{projectData?.timeline}</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted mb-2">Services</h4>
          <p className="text-sm font-bold text-body">{projectData?.services}</p>
        </div>
      </div>

      {/* Narrative Content */}
      <div className="flex flex-col md:flex-row gap-16 mb-24">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-heading mb-6 tracking-[-0.01em]">The Brief & Context</h3>
          <p className="text-lg text-body leading-relaxed font-normal">
            {projectData?.description1}
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-heading mb-6 tracking-[-0.01em]">Our Approach</h3>
          <p className="text-lg text-body leading-relaxed font-normal">
            {projectData?.description2}
          </p>
        </div>
      </div>

      {/* Challenge & Solution Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Challenge Card - Double Bezel */}
        <div className="bg-black/[0.02] border border-black/5 rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px]">
          <span className="rounded-full px-3 py-1 bg-black/5 text-[10px] uppercase tracking-[0.2em] font-semibold text-body w-fit">
            The Challenge
          </span>
          <p className="text-xl font-bold text-heading leading-snug tracking-[-0.01em] mt-8">
            "{projectData?.challenge}"
          </p>
        </div>

        {/* Solution Card - Double Bezel */}
        <div className="bg-brand/5 border border-brand/10 rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px]">
          <span className="rounded-full px-3 py-1 bg-brand/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand w-fit">
            The Solution
          </span>
          <p className="text-xl font-bold text-heading leading-snug tracking-[-0.01em] mt-8">
            {projectData?.solution}
          </p>
        </div>
      </div>

      {/* Image Gallery - Double Bezel Cards */}
      <div className="flex flex-col gap-12">
        {projectData?.images?.map((img, i) => (
          <div key={i} className="bg-black/[0.02] border border-black/5 rounded-[2.5rem] p-3 md:p-4">
            <div className="bg-white rounded-[calc(2.5rem-0.75rem)] overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center">
              <img 
                src={img} 
                alt={`Case study gallery ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
