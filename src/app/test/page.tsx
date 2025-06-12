import TestCard from "@/components/TestCard";

export default function TestPage() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className="min-h-screen w-[375px] h-[667px]
     flex items-center justify-center p-4 seung-hoon-font"
      >
        <TestCard />
      </div>
    </div>
  );
}
