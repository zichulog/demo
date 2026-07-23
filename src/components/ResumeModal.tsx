import React, { useEffect } from 'react';
import { personalInfo, careerList, projectsList, skillCategories, toolsList } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Download, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-6 bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:rounded-none">
        
        {/* Modal Top Bar (Hidden on print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span>서달미 이력서 미리보기 (PDF 규격)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
            >
              <Printer className="w-4 h-4" />
              인쇄 / PDF 저장
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume View */}
        <div className="p-8 sm:p-10 space-y-6 overflow-y-auto font-sans text-slate-800 print:p-0 print:overflow-visible">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Service Planner & PM Portfolio Resume
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
                서 달 미 <span className="text-base font-normal text-slate-500">({personalInfo.age}세)</span>
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                &quot;{personalInfo.positioning}&quot;
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 text-left sm:text-right">
              <div><strong className="text-slate-800">희망직무:</strong> {personalInfo.targetRoles.join(', ')}</div>
              <div><strong className="text-slate-800">이메일:</strong> {personalInfo.email}</div>
              <div><strong className="text-slate-800">거주지:</strong> 서울특별시</div>
            </div>
          </div>

          {/* 1. Academic & Qualifications */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">
              1. 학력 및 자격사항
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-bold text-slate-800">{personalInfo.education.school} {personalInfo.education.major}</div>
                <div className="text-slate-500">{personalInfo.education.period} | 학점 {personalInfo.education.gpa}</div>
              </div>
              <div>
                <div className="font-bold text-slate-800">자격 / 교육</div>
                <div className="text-slate-600">
                  • {personalInfo.certificates.join(' / ')}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Key Projects */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">
              2. 핵심 프로젝트 (3건)
            </h2>
            <div className="space-y-4 text-xs">
              {projectsList.map((proj, i) => (
                <div key={i} className="space-y-1 bg-slate-50 p-3 rounded border border-slate-200">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{i + 1}. {proj.title} <span className="text-emerald-700">[{proj.metrics.badge}]</span></span>
                    <span className="text-slate-500 font-normal">{proj.period} ({proj.role}, {proj.teamSize})</span>
                  </div>
                  <div className="text-slate-700 font-medium">
                    • <strong>문제정의:</strong> {proj.problem}
                  </div>
                  <div className="text-slate-600">
                    • <strong>프로세스:</strong> {proj.process.research} → {proj.process.action} → {proj.process.decision}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Career Experience */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">
              3. 경력 사항
            </h2>
            <div className="space-y-3 text-xs">
              {careerList.map((car, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{car.company} - {car.role} ({car.type})</span>
                    <span className="text-slate-500 font-normal">{car.period}</span>
                  </div>
                  <ul className="list-disc pl-4 text-slate-600 space-y-0.5">
                    {car.description.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Capabilities & Tools */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">
              4. 보유 역량 및 활용 도구
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-800">핵심 역량:</strong>
                <p className="text-slate-600">서비스 기획(기능정의, 화면설계), 사용자 조사(설문, 인터뷰), 프로젝트 관리, 마케팅</p>
              </div>
              <div>
                <strong className="text-slate-800">사용 도구:</strong>
                <p className="text-slate-600">{toolsList.map(t => t.name).join(', ')}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
