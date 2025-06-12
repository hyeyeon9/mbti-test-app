import { supabase } from "@/lib/supabase";

export default async function getResultCount(): Promise<number> {
  const { count } = await supabase
    .from("results")
    .select("*", { count: "exact", head: true });

  return count ?? 0;
}
