"use client";

import { questions } from "@/data/questions";
import { calculateMbti } from "@/lib/calculateMbti";
import { useMbtiStore } from "@/stores/mbti-store";
import { useRouter } from "next/navigation";

export default function TestCard() {
  const { answers, current, addAnswer, setCurrent } = useMbtiStore();

  const currentQuestion = questions[current]; // 현재 질문

  const router = useRouter();

  const handleAnswer = (value: string) => {
    const firstValue = value.charAt(0) as string;
    const secondValue = value.charAt(1) as string;

    if (current < questions.length - 1) {
      // 다음 질문으로
    } else {
      const mbti = calculateMbti([
        ...answers,
        firstValue,
        ...(secondValue ? [secondValue] : []),
      ]);
      router.push(`/result?type=${mbti}`);
      return;
    }

    addAnswer(firstValue);
    if (secondValue) {
      addAnswer(secondValue);
    }

    setCurrent(current + 1);
  };
  return (
    <div className="w-full h-[500px] p-2 ">
      <div className="text-center mb-3 -mt-10">
        Question {current + 1} of {questions.length}
      </div>
      <div
        className="bg-amber-200 h-2 rounded-full mb-2 w-full"
        style={{
          width: `${((current + 1) / questions.length) * 100}%`,
        }}
      ></div>
      <div className=" w-full h-[150px] text-center text-[23px] font-bold p-9 mb-10 line-clamp-2">
        <h1> {currentQuestion.text.split(",")[0]}</h1>
         <h1> {currentQuestion.text.split(",")[1]}</h1>
      </div>
      <div className="flex flex-col gap-5 px-5 w-full ">
        {currentQuestion.options.map((option, index) => (
          <div key={index} className="relative">
            <button
              className="text-base h-[80px] w-full pt-5 px-5 text-left bg-white border border-black rounded-none flex items-start leading-tight"
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </button>
            {/* ▼ 삼각형 말꼬리 */}
            <div
              className="absolute  right-4 bottom-[10px] w-0 h-0 
        border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
