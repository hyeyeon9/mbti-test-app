export function calculateMbti(answers: string[]): string {
  const counts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 정답 나온거 cnt 하나씩 증가
  answers.forEach((answer) => {
    counts[answer as keyof typeof counts]++;
  });

  // 타입 정하기
  const type = [
    counts.E > counts.I ? "E" : "I",
    counts.S > counts.N ? "S" : "N",
    counts.T > counts.F ? "T" : "F",
    counts.J > counts.P ? "J" : "P",
  ].join(""); // 한 문자열로 합치기

  return type;
}
