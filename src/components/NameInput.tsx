"use client";

import { useMbtiStore } from "@/stores/mbti-store";
import Link from "next/link";
import { useState } from "react";
import Count from "./Count";

export default function NameInput() {
  const { setName, reset } = useMbtiStore();
  const [inputValue, setInputValue] = useState("");

  const handleStart = () => {
    if (inputValue.trim()) {
      reset();
      setName(inputValue.trim());
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="name" className="mt-5">
            이름을 작성해주세요
          </label>
          <div className="mb-12">
            <input
              id="name"
              type="text"
              value={inputValue}
              maxLength={4}
              onChange={(e) => setInputValue(e.target.value)}
              className="border py-3 rounded-xl  w-[150px] mt-3 px-4 text-center
              text-lg"
            />
          </div>
        </div>
      </div>
      <Link href="/test">
        <button
          onClick={handleStart}
          disabled={!inputValue.trim()}
          className="px-6 py-3 bg-amber-200 text-black rounded hover:bg-amber-300 transition"
        >
          테스트 시작
        </button>
      </Link>
      <Count />
    </>
  );
}
