import Name from "@/components/Name";
import ResultButtons from "@/components/ResultButtons";
import { MBTI_RESULTS, MbtiResult } from "@/data/mbti-results";
import Image from "next/image";

interface Props {
  searchParams: Promise<{ type?: string }>;
}

export default async function ResultPage({ searchParams }: Props) {
  const { type } = await searchParams;

  if (!type) {
    return <div>MBTI 결과를 찾을 수 없습니다.</div>;
  }

  const result: MbtiResult = MBTI_RESULTS[type];

  return (
    <div className="flex justify-center items-center h-full ">
      <div
        className="min-h-screen seung-hoon-font 
    flex items-center justify-center p-4"
      >
        <div className="h-[800px] p-2 w-full">
          <div id="result-card" className="relative">
            <div className="text-center space-y-3 mb-8 h-[256px]">
              <Image
                src={`/images/decoImg/name.jpg`}
                alt="name"
                width={120}
                height={100}
                className="absolute top-6 -left-2 -rotate-12"
              />
              <Name />

              <Image
                src={`/images/decoImg/bubbleImg.jpeg`}
                alt={result.label}
                width={120}
                height={100}
                className="absolute top-6 right-2
          "
              />

              <div
                className="absolute 
                 text-center top-12 right-4 text-sm w-[100px] 
        font-semibold"
              >
                <h1>{result.label.split(",")[0]}</h1>
                <h1> {result.label.split(",")[1]}</h1>
              </div>

              <h1 className="text-4xl font-bold text-black drop-shadow-lg">
                {result.type}
              </h1>

              {/* 캐릭터 이미지 */}
              <Image
                src={`/images/characters/${result.type}.png`}
                alt={result.label}
                width={160}
                height={160}
                className="w-[140px] h-[168px] object-cover mx-20 mb-5 z-10"
                crossOrigin="anonymous"
              />

              {/* 재치있는 한마디 문장 */}
              <p
                className="
          
              -mt-5
           bg-white rounded-[40px] 
           py-2 px-2  mx-2
           text-sm
           text-[#5f554a] font-bold"
              >
                {result.description}
              </p>
            </div>

            <div className="-mt-8">
              <div className="flex align-center">
                <div className="flex flex-col">
                  <div
                    className="relative
           bg-[#fef8e4] rounded-[40px] 
           py-2 px-5 pt-4
           w-[190px] h-[120px]
           text-[#5f554a] font-bold text-base
           mt-5 mx-2"
                  >
                    <h1
                      className=" bg-white
              text-gray-600
              px-2
           rounded-full
               font-bold
            text-[13px]
            absolute -top-2 left-5"
                    >
                      특징
                    </h1>
                    <ul>
                      {result.특징.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="relative
           bg-white rounded-[40px] 
           border-2 border-gray-200
               w-[190px]
           py-2 px-4 pt-4
           text-[#5f554a] font-bold text-base my-5 mx-2"
                  >
                    <h1
                      style={{
                        backgroundColor: "#bfdbfe", // blue-200
                        color: "#2563eb", // blue-600
                      }}
                      className="
              px-2
           rounded-full
             font-bold
                     text-[13px]
            absolute -top-2.5 left-5"
                    >
                      극혐
                    </h1>
                    <ul>
                      {result.극혐.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <Image
                      src={`/images/decoImg/leaf3.jpg`}
                      alt="leaf3"
                      width={22}
                      height={100}
                      className="absolute -top-5 -left-3
          "
                    />
                  </div>
                </div>

                <div
                  className="relative
           bg-[#fef8e4] rounded-[40px] 
           py-10 px-4
           text-[#5f554a] font-bold text-base
               w-[130px]
               h-[140px]
               mt-10 mr-2"
                >
                  <h1
                    style={{
                      backgroundColor: "#ffe4e6", // rose-100
                      color: "#fb7185", // rose-400
                    }}
                    className="
    
              px-2 
           rounded-full
               font-bold
                    text-[13px]
            absolute -top-2.5 left-5"
                  >
                    좋아하는것
                  </h1>
                  <ul className="-mt-5">
                    {result.좋아하는것.map((item, i) => (
                      <li
                        key={i}
                        className="whitespace-nowrap mb-1
                    -ml-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Image
                    src={`/images/decoImg/leaf2.jpg`}
                    alt="Name"
                    width={22}
                    height={100}
                    className="absolute -top-8 left-0
                    lg:right-[47%]
          lg:bottom-[63.5%]
          
          "
                  />
                </div>
              </div>

              <div
                className="relative 
           bg-white rounded-[40px] 
           py-2 px-4  mx-2 pt-4
                      border-2 border-gray-200
           text-[#5f554a] font-bold text-base"
              >
                <h1
                  style={{
                    backgroundColor: "#bbf7d0", // green-200
                    color: "#16a34a", // green-600
                  }}
                  className="
              px-2 
           rounded-full
              font-bold
                    text-[13px]
            absolute -top-2.5 left-5"
                >
                  속마음
                </h1>
                <ul>
                  {result.속마음.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <Image
                  src={`/images/decoImg/cat2.png`}
                  alt="Name"
                  width={67}
                  height={100}
                  className="absolute bottom-16 right-0            "
                />

                <Image
                  src={`/images/decoImg/leaf.jpg`}
                  alt="Name"
                  width={28}
                  height={100}
                  className="absolute bottom-28 right-[87px]"
                />
              </div>
            </div>
          </div>

          <ResultButtons
            type={type}
            resultType={result.type}
            resultLabel={result.label}
          />
        </div>
      </div>
    </div>
  );
}
