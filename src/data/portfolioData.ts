import { PersonalInfo, Project, CareerItem, SkillCategory, ToolItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: '서달미',
  age: 27,
  location: '서울',
  positioning: '사용자 조사로 기획하는 서비스 기획자, 서달미',
  subtitle: '인터뷰·설문 데이터를 근거로 기능을 정의하고 검증합니다',
  targetRoles: ['서비스 기획자', 'PM', '사업기획'],
  education: {
    school: '한국대학교',
    major: '경영학과',
    period: '2018.03 ~ 2023.02',
    gpa: '3.6 / 4.5',
  },
  email: 'dalmi.seo@example.com',
  certificates: [
    '서비스 기획 입문 과정 수료',
    '컴퓨터활용능력 2급',
  ],
};

export const careerList: CareerItem[] = [
  {
    company: '스타트업 운영보조',
    role: '운영보조 인턴',
    period: '2023.04 ~ 2023.12',
    type: '인턴',
    description: [
      '서비스 운영 데이터 정리 및 주간 VOC 리포트 작성',
      '고객 문의 유형별 분류 및 FAQ 가이드라인 업데이트',
      'SNS 취업 정보 콘텐츠 기획 및 운영 관리',
    ],
  },
  {
    company: '고객센터',
    role: '상담원',
    period: '2021.04 ~ 2022.03',
    type: '계약직',
    description: [
      '전화 및 이메일 고객 문의 응대 (월 평균 400+ 건)',
      '자주 들어오는 사용자 불만사항(Pain Point) 수집 및 전달',
    ],
  },
];

export const projectsList: Project[] = [
  {
    id: 'ai-plant',
    title: 'AI 반려식물 관리 서비스 기획',
    period: '2024.01 ~ 2024.04',
    role: '팀장',
    teamSize: '4인',
    problem: '반려식물 초보자는 물주기·이상신호 등 관리 판단이 어렵다',
    process: {
      research: '사용자 심층 인터뷰 8명 실시 (식물 폐사 경험자 및 초보자)',
      action: '기획 초기 아이디어 14개 중 불필요 기능 탈락 → 핵심 8개로 압축',
      decision: '단순 정기알림 대신 센서/기상 데이터를 결합한 환경기반 맞춤 알림으로 전환',
    },
    metrics: {
      badge: '경진대회 최종 3위 (장려상)',
      details: ['청년 스타트업 아이디어 경진대회 12팀 중 최종 3위(장려상) 수상'],
    },
    details: {
      background: '반려식물 인구 증가와 함께 식물 폐사율이 높아지는 원인을 분석하고, 초보자의 지속적인 식물 케어를 돕는 가이드형 서비스를 기획했습니다.',
      keyFindings: [
        '초보자의 87.5%가 "정해진 날짜에 물을 주어도 잎이 시든다"고 응답 (환경 변수 고려 미흡)',
        '잎 상태 변형 시 원인을 파악하지 못해 대처 타이밍을 놓침',
        '복잡한 식물 커뮤니티보다 내 식물 상태에 집중된 직관적 UI 선호',
      ],
      beforeAfter: {
        before: ['초기 기능 14개 (커뮤니티, 거래, 식물 다이어리, 정기 알림 등)', '단순 날짜 기반 물주기 푸시 알림'],
        after: ['핵심 기능 8개로 우선순위 재조정', '온습도·기상 데이터 연동 실시간 환경 기반 맞춤 알림'],
      },
      userQuote: '"매주 화요일마다 물을 줬는데 왜 시드는지 몰랐어요. 우리 집 베란다 햇빛 상태에 맞춰 알려주면 좋겠어요."',
      screenConcept: {
        title: '핵심 진단 & 환경 알림 대시보드',
        features: [
          '식물 사진 업로드 시 즉시 상태 진단 (AI 기반)',
          '오늘의 환경(습도·햇빛) 맞춤 케어 가이드 카드',
          '3단계 신호등 케어 상태표시 (양호/주의/위험)',
        ],
      },
    },
  },
  {
    id: 'local-store',
    title: '동네 소상공인 주문예약 서비스 기획',
    period: '2022.09 ~ 2022.12',
    role: '기획 담당',
    teamSize: '4인 (대학 팀프로젝트)',
    problem: '소상공인 주문·예약 과정의 비효율 개선',
    process: {
      research: '소상공인 점주 심층 인터뷰 5명 + 고객 설문조사 32명 시행',
      action: '점주 요구사항 복잡도 완화: 초기 기능 12개를 7개로 축소',
      decision: '바쁜 영업 시간 고려, 점주 처리 화면 입력 단계를 3단계로 대폭 단순화',
    },
    metrics: {
      badge: '발표 2위 & A학점',
      details: ['8개 팀 중 최종 프로젝트 발표 2위', '교과목 최종 평가 A학점 취득'],
    },
    details: {
      background: '골목상권 소상공인들이 전화·카카오톡 주문 처리로 본업에 집중하기 어려운 문제를 해결하고자, 점주와 고객 모두에게 간편한 주문예약 플로우를 설계했습니다.',
      keyFindings: [
        '점주 인터뷰 결과: 피크타임 시 주문 앱의 복잡한 승인 절차 때문에 60% 이상 취소/전화 유발',
        '고객 설문 32명: "예약 확정까지 대기시간이 길면 다른 매장으로 이탈(78%)"',
        '점주 연령대를 고려한 큰 폰트 및 최소 터치 횟수 필수',
      ],
      beforeAfter: {
        before: ['메뉴 관리, 옵션 세팅 등 12개 기능 과다 탑재', '예약 접수부터 확정까지 5단계 복잡한 클릭 플로우'],
        after: ['필수 예약·주문 관리 중심 7개 기능으로 정리', '원터치 승인/거절 중심의 3단계 모바일 UX'],
      },
      userQuote: '"장사 중에 스마트폰 계속 들여다보고 버튼 여러 번 누를 시간이 없어요. 딱 확인 버튼 하나로 끝나야 써요."',
      screenConcept: {
        title: '점주 전용 원터치 예약 관리 화면',
        features: [
          '실시간 접수 목록 상단 노출',
          '승인/시간변경 원터치 팝업버튼',
          '일일 예약 건수 및 예상 매출 요약 카드',
        ],
      },
    },
  },
  {
    id: 'youth-job',
    title: '청년 대상 취업정보 콘텐츠 운영',
    period: '2023.06 ~ 2023.09',
    role: '콘텐츠 기획 및 운영',
    teamSize: '5인 (인턴 업무)',
    problem: '청년 대상 콘텐츠의 낮은 참여도 개선',
    process: {
      research: '기존 운영 게시물 60건의 반응도(조회·저장·공유) 데이터 분석',
      action: '도움이 되는 실질 취업정보 콘텐츠 비중을 15%에서 40%로 확대',
      decision: '텍스트 위주 카드뉴스에서 [체크리스트/템플릿] 중심 저장형 콘텐츠로 개편',
    },
    metrics: {
      badge: '조회수 +34% / 저장수 +68%',
      details: [
        '평균 조회수 1,250회 → 1,680회 (+34%)',
        '저장수 34회 → 57회 (+68%)',
        '공유수 12회 → 21회 (+75%)',
      ],
    },
    details: {
      background: '인턴 근무 중 청년 지원 채널의 콘텐츠 참여율 정체를 해결하기 위해, 정량적 과거 데이터 분석에 기반한 콘텐츠 체질 개선 프로젝트를 전개했습니다.',
      keyFindings: [
        '기존 게시물 60건 데이터 분석: 단순 행사 홍보글은 저장률 1.2% 수준',
        '자소서 작성법, 면접 체크리스트 등 [실용 서식] 게시물은 저장 및 공유 비율이 4배 이상 높음',
        '썸네일에 "한 줄 요약 수치"가 포함될 때 클릭률 +28% 상승',
      ],
      beforeAfter: {
        before: ['취업 실질 정보 비중 15%', '행사 포스터 재가공 중심'],
        after: ['취업 실질 정보 비중 40% 확대', '저장 욕구를 자극하는 템플릿/가이드 카드뉴스'],
      },
      userQuote: '"단순 이벤트 안내보다 당장 자소서 쓸 때 펼쳐볼 수 있는 가이드라인 콘텐츠가 훨씬 유용해요."',
      screenConcept: {
        title: '데이터 기반 콘텐츠 기획 프레임워크',
        features: [
          '저장 유발형 카드뉴스 템플릿 표준화',
          '게시물 발행 후 48시간 성과 데이터 트래킹 표',
          '주간 반응도 피드백 루프 적용',
        ],
      },
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: '서비스 기획',
    icon: 'Layout',
    skills: ['기능정의', '화면설계', '정책수립'],
    description: '사용자 플로우를 다듬고 비즈니스 규칙과 요구사항을 명확한 기능 정의서와 와이어프레임으로 도출합니다.',
  },
  {
    title: '사용자 조사',
    icon: 'Search',
    skills: ['설문설계', '인터뷰', '경쟁사 분석'],
    description: '가설을 입증하기 위한 설문 문항 및 인터뷰 질문을 설계하고, 정량/정성 데이터를 통해 핵심 문제점을 발굴합니다.',
  },
  {
    title: '프로젝트 관리',
    icon: 'Kanban',
    skills: ['일정관리', '협업', '발표자료 작성'],
    description: '개발자·디자이너와의 원활한 소통을 도모하며 Milestone 관리 및 설득력 있는 스토리라인의 보고서를 작성합니다.',
  },
  {
    title: '마케팅',
    icon: 'TrendingUp',
    skills: ['콘텐츠 기획', '캠페인 결과 분석'],
    description: '타겟 고객층이 원하는 가치를 타격하는 콘텐츠를 기획하고 발행 후 정량 지표를 트래킹하여 피드백을 반영합니다.',
  },
];

export const toolsList: ToolItem[] = [
  { name: 'PowerPoint', category: '문서·데이터', iconName: 'FileText' },
  { name: 'Excel', category: '문서·데이터', iconName: 'Table' },
  { name: 'Figma', category: '기획·도면', iconName: 'Figma' },
  { name: 'Notion', category: '협업·일정', iconName: 'FileCode' },
  { name: 'Slack', category: '협업·일정', iconName: 'MessageSquare' },
  { name: 'Trello', category: '협업·일정', iconName: 'Trello' },
  { name: 'Google Workspace', category: '문서·데이터', iconName: 'Globe' },
  { name: 'ChatGPT', category: 'AI·생산성', iconName: 'Sparkles' },
  { name: 'Gemini', category: 'AI·생산성', iconName: 'Cpu' },
];
