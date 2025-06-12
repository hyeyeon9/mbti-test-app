"use client";

import { useMbtiStore } from "@/stores/mbti-store";
import Link from "next/link";

interface ResultButtonsProps {
  type: string;
  resultType: string;
  resultLabel: string;
}

export default function ResultButtons({
  type,
  resultType,
  resultLabel,
}: ResultButtonsProps) {
  const { reset } = useMbtiStore();


  // 공유하기 함수
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/result?type=${type}`;
    const shareText = `나의 MBTI 결과: ${resultType} - ${resultLabel}`;

    if (navigator.share) {
      // 모바일에서 네이티브 공유
      try {
        await navigator.share({
          title: "MBTI 테스트 결과",
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log("공유 취소됨", error);
      }
    } else {
      // 데스크톱에서 URL 복사
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("결과 링크가 복사되었습니다!");
      } catch (error) {
        console.error("복사 실패:", error);
        alert("공유 링크 복사에 실패했습니다.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-6">

      <button
        onClick={handleShare}
        className="bg-blue-300 text-white font-bold py-2 rounded-xl shadow-sm hover:bg-blue-400 transition"
      >
        공유하기
      </button>

      <Link
        href="/"
        onClick={reset}
        className="bg-gray-200 text-black font-medium py-2 rounded-xl hover:bg-gray-300 text-center block"
      >
        다시 테스트 하기
      </Link>
    </div>
  );
}
