export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  teamSize: string;
  problem: string;
  process: {
    research: string;
    action: string;
    decision: string;
  };
  metrics: {
    badge: string;
    details: string[];
  };
  details: {
    background: string;
    keyFindings: string[];
    beforeAfter: {
      before: string[];
      after: string[];
    };
    userQuote?: string;
    screenConcept?: {
      title: string;
      features: string[];
    };
  };
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  description: string;
}

export interface ToolItem {
  name: string;
  category: '기획·도면' | '문서·데이터' | '협업·일정' | 'AI·생산성';
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  age: number;
  location: string;
  positioning: string;
  subtitle: string;
  targetRoles: string[];
  education: {
    school: string;
    major: string;
    period: string;
    gpa: string;
  };
  email: string;
  certificates: string[];
}
