export type Question = {
  id: number;
  text: string;
  options: { text: string; value: string }[];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "친구가 머리 망했다고 카톡옴",
    options: [
      { text: "ㅋㅋㅋ 거울 셀카 보내봐", value: "T" },
      { text: "헉 우째쓰까", value: "F" },
    ],
  },
  {
    id: 2,
    text: "단톡에 갑자기,'얘들아 싸움 직관함' 올라옴",
    options: [
      { text: "(조용히 캡쳐) 내적 환호만 하고 침묵", value: "I" },
      { text: "카메라 켜!! 빨리 전화해 봐!!", value: "E" },
    ],
  },
  {
    id: 3,
    text: "카톡 안 읽씹 5시간째",
    options: [
      { text: "아 됐다 관심 꺼졌음 (근데 새벽에 생각남)", value: "NF" },
      { text: "헐ㅠ 속상했는데 유튜브 보다가 까먹음", value: "ST" },
    ],
  },
  {
    id: 4,
    text: "친구가 30분 늦는다고 함",
    options: [
      { text: "ㅇㅋ 나도 안 나가고 있었음~", value: "P" },
      { text: "그럼 왜 3시에 보자고 한 건데?", value: "J" },
    ],
  },
  {
    id: 5,
    text: "친구가 새로운 예카 가자고 릴스 보냄",
    options: [
      { text: "어디야? 리뷰는? 가격은 어때?", value: "S" },
      { text: "오 새로운 곳! 분위기 어떨까~", value: "N" },
    ],
  },
  {
    id: 6,
    text: "좋아하는 사람이,'나 요즘 너랑 있으면 편해'",
    options: [
      { text: "편하다는 게 호감이랑 다르지…?", value: "N" },
      { text: "나도 그래! 😊 (일단 설렘에 취함)", value: "S" },
    ],
  },
  {
    id: 7,
    text: "친구가 갑자기, “우리 집에서 자고 갈래?",
    options: [
      { text: "콜. 내 칫솔은 있냐?", value: "EP" },
      { text: "나 집가서 유투브 볼건데..", value: "IJ" },
    ],
  },
  {
    id: 8,
    text: "싸움 후 연락 안 오는 상대",
    options: [
      { text: "‘지금쯤 미안해할 때다’ 생각하고 기다림 ", value: "T" },
      { text: "혹시 내가 상처 줬나? 걱정됨 ", value: "F" },
    ],
  },
  {
    id: 9,
    text: "면접 대기 중, 옆 경쟁자들 스펙 봤을 때",
    options: [
      { text: "다 죽었어. 난 실무형이다", value: "ET" },
      { text: "내가 왜 이걸 하고 있지... 멘탈 바사삭", value: "FI" },
    ],
  },
  {
    id: 10,
    text: "회사 복도에서, 같은 신입이 마이쮸 줌",
    options: [
      { text: "고맙다고 했는데 어색해서 눈 못 마주침", value: "I" },
      { text: "헐 감사합니다~ 다음엔 제가 드릴게요!", value: "E" },
    ],
  },
  {
    id: 11,
    text: "누가 내 물건 몰래 썼을 때",
    options: [
      { text: "말도 없이 왜 써?", value: "TJ" },
      { text: "그냥 속으로만 씹고, 피함", value: "FP" },
    ],
  },
  {
    id: 12,
    text: "같이 여행온 친구가,‘나 오늘 그냥 숙소에 있을래’,라고 함",
    options: [
      { text: "헉 그럼 나도 오늘 쉴까? ㅠ", value: "P" },
      { text: "ㅇㅋ 그럼 나 혼자 다녀올게~", value: "J" },
    ],
  },
];
