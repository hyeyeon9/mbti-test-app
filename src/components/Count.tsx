"use client";
import getResultCount from "@/app/actions/getResultCount";
import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    getResultCount().then(setCount);
  }, []);

  useEffect(() => {
    if (count === null) return;

    const fullText =
      count === 0
        ? "첫 번째 테스트의 주인공님 어서오세요!"
        : `지금까지 ${count}명이 테스트를 완료했어요!`;

    setIsTyping(true);
    setDisplayText("");

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // 50ms마다 한 글자씩 추가

    return () => clearInterval(typingInterval);
  }, [count]);

  if (count === null) {
    return <p className="h-[25px] text-gray-500" />;
  }

  return (
    <p className="h-[25px] text-gray-500">
      {count === 0 ? (
        <>
          {displayText}
          {isTyping && <span className="animate-pulse">|</span>}
        </>
      ) : (
        <>
            {count !== null && !isTyping && count !== 0 ? (
              <>
                지금까지{" "}
                <span className="text-blue-500 font-semibold">{count}명</span>이
                테스트를 완료했어요!
              </>
            ) : (
              <>
                {displayText}
                {isTyping && <span className="animate-pulse">|</span>}
              </>
            )}
        </>
      )}
    </p>
  );
}
