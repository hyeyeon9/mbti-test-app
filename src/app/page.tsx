import NameInput from "@/components/NameInput";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 seung-hoon-font">
      <div
        className=" 
      h-[500px]
       max-w-2xl  w-full text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-gray-80 mb-5">MBTI 테스트</h1>
        <p className="text-sm text-gray-500 mt-2">
          팩폭과 귀여움의 경계선 테스트
        </p>
        <NameInput />
      </div>
    </div>
  );
}
