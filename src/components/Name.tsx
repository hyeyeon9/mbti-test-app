"use client";
import { useMbtiStore } from "@/stores/mbti-store";

export default function Name() {
  const { name } = useMbtiStore();

  return (
    <div className="absolute  w-[120px] text-center
    top-[25px] -left-2 text-[21px] -rotate-12 z-10">{name}님은</div>
  );
}
