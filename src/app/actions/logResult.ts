import { supabase } from "@/lib/supabase";

export async function logResult(nickname: string, mbtiType: string) {
  const { error } = await supabase.from("results").insert({
    nickname,
    mbti_type: mbtiType,
  });

  if (error) {
    console.error("❌ 저장 실패:", error);
  } else {
    console.log("✅ 결과 저장 완료!");
  }
}
