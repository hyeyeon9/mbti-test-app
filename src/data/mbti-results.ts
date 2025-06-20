export type MbtiResult = {
  type: string; // "INFP"
  label: string; // "몽글몽글 이상주의자"
  description: string;
  특징: string[];
  극혐: string[];
  좋아하는것: string[];
  속마음: string[];
};

export const MBTI_RESULTS: Record<string, MbtiResult> = {
  INFP: {
    type: "INFP",
    label: "감성 필터 장착, '내 세상만 사는 자'",
    description: "혼자만의 상상 세계에 빠져 있는 몽글몽글한 이상주의자.",
    특징: [
      "혼자 걷기 좋아함",
      "가끔 눈물이 많음",
      "우울한 나에게 심취",
      "입 안벌리고 노래 부름",
    ],
    극혐: ["내 상상 깨부수는 팩폭러", "나만의 루틴 간섭하기", "내 인사 씹음"],
    좋아하는것: [
      "조용한 카페",
      "현실 도피",
      "공감해주는 사람",
      "영화, 책, 다이어리",
    ],
    속마음: ["나 혼자 괜찮은 사람인가?", "근데 나만의 세상이 좋아"],
  },
  INTJ: {
    type: "INTJ",
    label: "뇌지컬 만렙,'인생은 빅픽쳐'",
    description: "겉바속따, 겉은 차가운데 속은 디테일 장인.",
    특징: [
      "혼자 있는 시간 필수",
      "의외로 개그코드 있음",
      "납득이 돼야 일을 하죠",
      "사이코패스 아닙니다",
    ],
    극혐: ["비효율, 감정소비", "내 완벽한 계획에 딴지 검", "줄 끼어들기"],
    좋아하는것: ["전략 세우기", "만약에~", "그것이 알고싶다", "혼자 일하는 거"],
    속마음: [
      "내 방식대로 하면 훨씬 잘될 텐데",
      "근데 그걸 굳이 설명하긴 귀찮아",
    ],
  },
  INTP: {
    type: "INTP",
    label: "방구석 노벨상 후보, '궁금한 건 못 참지'",
    description: "말 없다고 무관심한 거 아님. 너한텐 관심없는 거 맞음",
    특징: [
      "혼자 방구석에서 유튜브",
      "알고리즘 탐험 중",
      "고양이+후드티+노트북 ",
      "돌직구 머신",
    ],
    극혐: ["감정으로 몰아붙이기", "계획 없이 갑자기 부르기", "멍청한 사람"],
    좋아하는것: ["추리소설", "공상하기", "지식에 대한 욕망", "신기한 돌"],
    속마음: [
      "그냥 좀 가만히 내버려둬... 안 궁금해",
      "이거 논리적으로 틀렸는데 말을 말자",
    ],
  },
  ENTP: {
    type: "ENTP",
    label: "말발 1등, 자존감 로켓단",
    description: "세상 부조리한 거 보면 입이 근질거림. 논쟁? 드루와.",
    특징: [
      "기승전 '내가 맞잖아?'",
      "말싸움 콘텐츠에 진심임",
      "적으로 두면 큰일남",
      "벼락치기 공부 선호함",
    ],
    극혐: ["무논리 + 감정적 공격", "멍청한데 멍청한 줄", "모르는 사람"],
    좋아하는것: [
      "새로운 의견, 비판",
      "그리고 박수",
      "즉흥 드라이브",
      "놀리기 좋은 사람",
    ],
    속마음: [
      "솔직히 나 너무 재밌고 똑똑한 거 같아",
      "이겨도 미안한 척은 할게 (응 안해)",
    ],
  },

  ISTJ: {
    type: "ISTJ",
    label: "FM 그 자체, '오직 정석만'",
    description: "매뉴얼은 나의 바이블. 계획 없이는 못 살아.",
    특징: [
      "기억력 미쳤음",
      "정리정돈은 본능",
      "재미없기로 유명함",
      "'세상은 혼자'라는 마인드",
    ],
    극혐: [
      "갑작스런 변수",
      "지각하고 웃는 사람",
      "일안하고 입만 터는 사람",
    ],
    좋아하는것: ["체크리스트", "일기장에 줄 긋기", "혼자 일하기"],
    속마음: [
      "이렇게 해야 안 틀리는데 왜 안 해?",
      "나만의 방식이 제일 깔끔하고 확실함.",
    ],
  },
  ISFJ: {
    type: "ISFJ",
    label: "뒷모습 케어 장인, '숨은 보살'",
    description: "말은 잘 안 해도 다 챙겨듦. 티 안 나는 배려가 기본 탑재.",
    특징: [
      "감정 눈치 빠름",
      "남 챙기는 거 잘함",
      "꼰대기질 은근 심함",
      "니편 내편 하는 성향있음",
    ],
    극혐: ["배려 1도 없는", "이기적인 빡대가리", "무단횡단"],
    좋아하는것: [
      "따뜻한 말 한 마디",
      "조용한 안정감",
      "다수보다 소수",
      "손편지, 선물 포장",
    ],
    속마음: ["다 챙겨줬는데 왜 몰라줘…?", "기억해뒀다가 언젠간 갚아줄 예정"],
  },
  INFJ: {
    type: "INFJ",
    label: "공감봇, '속은 마라탕'",
    description: "겉은 잔잔, 속은 폭풍. 남 일에 감정 몰빵했다가 번아웃 잦음.",
    특징: [
      "공감능력 만렙",
      "분위기 리딩 자동",
      "사람 자꾸 은근슬쩍 떠봄",
      "겉으로 웃고 속으로 욕함",
    ],
    극혐: ["표면적인 대화", "타인의 무례", "민폐끼치기"],
    좋아하는것: ["진심 어린 대화", "깊이 있는 사람", "혼자 생각할 시간"],
    속마음: [
      "내 마음속 기준선을 넘지 마",
      "다 말하면 너도 상처받을까 봐 참는 중",
    ],
  },
  ISTP: {
    type: "ISTP",
    label: "쿨한 척 하다, 진짜 쿨한 사람",
    description: "말 안 해도 다 알아서 함. 근데 물어보진 마. 귀찮으니까.",
    특징: [
      "DIY 장인",
      "한 번 빠지면 끝까지 팜",
      "디폴트 무표정",
      "필요시 사교적으로 변함",
    ],
    극혐: ["쓸데없는 참견", "시끄러운 오지라퍼"],
    좋아하는것: [
      "퍼즐 맞추기",
      "그럴 수도 있지",
      "1분 전 도착한 나",
      "귀여운 거",
    ],
    속마음: ["굳이 말 안 해도 알잖아?", "내가 알아서 할게"],
  },
  ISFP: {
    type: "ISFP",
    label: "게으른 완벽주의자, '오로지 나'",
    description: "말보단 느낌. 느낌 아니까 움직이는 자유로운 영혼.",
    특징: [
      "남 눈치 ㄹㅇ 많이 봄",
      "한번 나갈때 모든일 처리",
      "소심한 관종",
      "인생 좌우명 : 뭐든 적당히",
    ],
    극혐: [
      "터치 너무 많은 사람",
      "말 계속 시키는 분위기",
      "예의 없는거 진짜 극혐",
    ],
    좋아하는것: [
      "내 방 + 에어팟",
      "감성 터지는 노래",
      "추억팔이",
      "조용히 다정한 사람",
    ],
    속마음: [
      "말 걸지 마… 근데 안걸면 서운해..",
      "착한 줄 아는데… 한 번 틀어지면 무서움",
    ],
  },
  ENFP: {
    type: "ENFP",
    label: "리액션 부자,'인싸력 만렙'",
    description: "대화 = 연결. 연결 = 행복♡",
    특징: [
      "분위기 메이커 역할",
      "별것 아닌거로",
      "어두운면 있다고 생각함",
      "감정기복 장난 아님",
    ],
    극혐: ["무시당하는 느낌", "벽 치는 사람"],
    좋아하는것: [
      "열정, 공감, 리액션",
      "다정함 ♥︎",
      "외출, 노래방",
      "말 고운 사람",
    ],
    속마음: [
      "난 INFP인가… 집에만 있고 싶어",
      "근데 혼자 있으면 3시간 안에 외로움 폭발함",
    ],
  },
  ENTJ: {
    type: "ENTJ",
    label: "CEO DNA,'계획대로 돼가?'",
    description: "비효율에 민감한 추진력 갑. 근데 의외로 팀원 챙김.",
    특징: [
      "리더 맡으면 불타오름",
      "시스템 만들기 좋아함",
      "'내 사람' 보호본능",
      "발표하는 거 사랑함",
    ],
    극혐: ["시간 낭비", "비효율 끝판왕에 징징이", "꼰대들 (자기도 꼰대임)"],
    좋아하는것: [
      "역할 분담 확실",
      "일머리 있는 대화",
      "같은 ENTJ",
      "능력 인정받는 순간",
    ],
    속마음: [
      "감정 표현 서툴러도 마음은 진심임",
      "내가 맡은 사람은 끝까지 책임지고 싶음",
    ],
  },
  ESTJ: {
    type: "ESTJ",
    label: "투머치 실용주의,'팩폭 장인'",
    description: "일머리 뚝딱. 말은 쎄도 효율 지향 진심.",
    특징: [
      "계획충 + 실천력 있음",
      "리더로써 무서운데 잘함",
      "일중독 맞음",
      "자기관리 철저함",
    ],
    극혐: ["멍 때리는 분위기", "핑계 많은 사람", "무계획 + 즉흥러"],
    좋아하는것: ["업무 분담 깔끔하게", "현실적인 피드백", "일 잘하는 사람♥︎"],
    속마음: [
      "왜 못하냐고 묻지 말고, 그냥 잘 해",
      "시간 뺏지 마라. 그게 제일 싫다",
    ],
  },
  ESFJ: {
    type: "ESFJ",
    label: "인간 비타민,'모두의 엄빠'",
    description: "모두가 편한 분위기 조성, 대신 속은 바쁨.",
    특징: [
      "인기 많은 인싸 중 인싸",
      "단톡방 정리 담당",
      "외로움을 심하게탐",
      "감정기복이 적은편",
    ],
    극혐: ["오해 받는거 극도로 싫음", "싸늘한 분위기", "예의 없는 사람"],
    좋아하는것: ["칭찬 한 마디", "다 같이 웃는 순간", "타인의 인정"],
    속마음: ["나 없으면 좀 휑하지 않아?", "말 안 해도 챙기고 있어 ^^"],
  },
  ESTP: {
    type: "ESTP",
    label: "일단 GO,'불도저 직진러'",
    description: "오늘 할 일? 오늘 정하지. 컴플레인할 때 나 데려가.",
    특징: [
      "위기에서 대처력 있음",
      "싸가지 없는 내가 좋음",
      "뒤끝 없음",
      "그래서 반성도 없음",
    ],
    극혐: ["느릿한 진행", "혼자만 말 많은 사람", "우물쭈물 결론 없는거 극혐"],
    좋아하는것: ["즉석 이벤트", "간단하고 확실한", "해결책", "말발 좋은 사람"],
    속마음: ["아 몰라 일단 가자", "그거 나중에 생각하면 되잖아"],
  },
  ESFP: {
    type: "ESFP",
    label: "분위기 요정, 나 너무 귀여워 ! !",
    description: "재밌는 게 최고! 같이 노는 게 삶의 목표.",
    특징: [
      "눈치 빠름 + 단순함",
      "고집 은근 쎔",
      "청소나 빨래 몰아서 함",
      "애는 착해 (진짜 착함)",
    ],
    극혐: ["공감 안 되는 사람", "파티 파괴자", "말꼬리 잡는 사람"],
    좋아하는것: ["사람 많은 곳", "웃겨주는 사람", "트월킹", "잘생긴 사람"],
    속마음: ["나 심심하면 위험해. 다 나와", "거봐~ 나 없으면 재미없지?"],
  },
  ENFJ: {
    type: "ENFJ",
    label: "오지랖 선구자, '감동 제조기'",
    description: "다 잘 챙겨. 근데 정작 나를 잘 못 챙김.",
    특징: [
      "주변인 기분 먼저 파악",
      "대화 리드 잘함",
      "싫은 소리 못함",
      "TMI 감성 장착",
    ],
    극혐: ["배려 안 해주는 말", "단체 속 냉랭한 분위기"],
    좋아하는것: [
      "사람 좋아함",
      "훈훈한 대화",
      "갈등은 싫어",
      "돌아오는 따뜻함",
    ],
    속마음: ["나 괜찮은 척 하는 거야", "다 잘되게 하고 싶은데 왜 어렵냐"],
  },
};
