import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

interface HeaderProps {
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'career', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: '소개' },
    { id: 'career', label: '이력 요약' },
    { id: 'projects', label: '프로젝트' },
    { id: 'skills', label: '보유 역량' },
    { id: 'contact', label: '연락처' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-left group focus:outline-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm shadow-emerald-200">
              SD
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                서달미
              </span>
              <span className="text-xs font-medium text-slate-500 border-l border-slate-200 ml-2 pl-2 hidden sm:inline-block">
                서비스 기획자
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-xl transition-all shadow-2xs hover:shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-600" />
            이력서 다운로드 (PDF)
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 bg-slate-100 rounded-xl border border-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/60 font-bold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 rounded-xl shadow-sm"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              이력서 보기 / PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
