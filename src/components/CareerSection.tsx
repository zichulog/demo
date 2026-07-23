import React from 'react';
import { personalInfo, careerList } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';

export const CareerSection: React.FC = () => {
  return (
    <section id="career" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Section 02
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">이력 요약</h2>
          <p className="text-slate-500 text-sm mt-1">
            경영학 전공 지식과 인턴 및 고객 접점 실무 경험을 갖추었습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Education & Qualifications */}
          <div className="space-y-6">
            
            {/* Education Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">학력 정보</h3>
                  <span className="text-xs text-slate-500">{personalInfo.education.period}</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">{personalInfo.education.school}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    학점 {personalInfo.education.gpa}
                  </span>
                </div>
                <div className="text-sm font-medium text-slate-600">
                  {personalInfo.education.major} (주전공)
                </div>
              </div>
            </div>

            {/* Certifications & Education Badges */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">자격 및 교육</h3>
                  <span className="text-xs text-slate-500">기획 역량 강화 수료증</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 border-t border-slate-100 pt-4">
                {personalInfo.certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-emerald-800 text-xs font-bold"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Work Experience */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">실무 경험</h3>
                <span className="text-xs text-slate-500">인턴 및 CS 데이터 관리 (2건)</span>
              </div>
            </div>

            <div className="space-y-6 border-t border-slate-100 pt-4">
              {careerList.map((item, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-emerald-200 space-y-2">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-bold text-slate-900 text-base">
                      {item.company} <span className="text-xs text-slate-500 font-medium">({item.role})</span>
                    </h4>
                    <span className="text-xs text-emerald-600 font-bold">{item.period}</span>
                  </div>

                  <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-slate-600">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
