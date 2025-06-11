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
    text: "팀플 조원이, 아무것도 안 했을 때",
    options: [
      { text: "ㅇㅋ 내가 해줄게… 그냥 말섞기 싫어", value: "PI" },
      { text: "다들 역할 나눠서 다시 정리해요", value: "JT" },
    ],
  },
  {
    id: 3,
    text: "카톡 안 읽씹 5시간째",
    options: [
      { text: "아 됐다 관심 꺼졌음 (쿨한 척)", value: "FI" },
      { text: "답장 없는 이유 1~5 써봄 (추리 시작)", value: "TN" },
    ],
  },
  {
    id: 4,
    text: "친구가 30분 늦는다고 함",
    options: [
      { text: "ㅇㅋ 나도 안 나가고 있었음~", value: "PI" },
      { text: "그럼 왜 3시에 보자고 한 건데?", value: "JT" },
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
      { text: "편하다는 게 호감이랑 다르지…?", value: "TN" },
      { text: "나도 그래! 😊 (일단 설렘에 취함)", value: "FS" },
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
      { text: "‘지금쯤 미안해할 때다’ 생각하고 기다림 ", value: "JT" },
      { text: "먼저 사과 보냄 ", value: "FP" },
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
    text: "지하철에서 아는 사람 봤는데 약간 애매함..",
    options: [
      { text: "그냥 못 본 척하고 내릴 때까지 감", value: "I" },
      { text: "인사 안 하면 찝찝함. 일부러 시선 맞춤", value: "E" },
    ],
  },
  {
    id: 11,
    text: "누가 내 물건 몰래 썼을 때",
    options: [
      { text: "말도 없이 왜 써?", value: "TJ" },
      { text: "그냥 속으로만 씹고, 피함", value: "FI" },
    ],
  },
  {
    id: 12,
    text: "같이 여행온 친구가,‘나 오늘 그냥 숙소에 있을래’,라고 함",
    options: [
      { text: "헉 그럼 나도 오늘 쉴까? ㅠ", value: "FP" },
      { text: "ㅇㅋ 그럼 나 혼자 다녀올게~", value: "TJ" },
    ],
  },
];
