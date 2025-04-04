import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white border-2 border-black flex items-start p-10 m-10 h-[850px] w-[550px]">
        <div className="">
          <p className="font-sans font-bold text-2xl ">INSERT NAME HERE</p>
          <p>[Email ID]</p>
          <p>[Address]</p>
          <p>[Phone Number] </p>
          <p>[Website]</p>
          <p className="font-sans font-bold text-xl text-gray-500 pt-5">
            OBJECTIVES
          </p>
          <p>[Mention your objectives here]</p>
          <p className="Font-sans font-bold text-xl text-gray-500 pt-5">
            EDUCATIONS
          </p>
          <p className="Font-sans font-bold text-xl text-gray-500 pt-5">
            NAME OF SCHOOL
          </p>
          <p className="text-red-500 font-sans font-semibold pt-1 ">
            Completion date and name of degree
          </p>
          <p className="pt-5">[Type 1st of accomplishment]</p>
          <p className="font-sans font-bold text-xl text-gray-500 pt-5">
            EXPERIENCE
          </p>
          <p className="font-sans font-bold text-xl text-gray-500 pt-5">
            COMPANY NAME
          </p>
          <p className="font-sans font-semibold pt-1 ">
            <div className="flex space-x-4">
              <p className="text-red-500 font-sans font-semibold pt-1">
                [Type your job title]
              </p>
              <p className="text-gray-950 font-sans font-semibold pt-1">
                  [Type the start date]=[Type the end date]
                </p>
            </div>
            <p className="font-sans font-semibold pt-8">[Type job responsibilities]</p>
            <p className="font-sans font-bold text-xl text-gray-500 pt-5">
            SKILLS
          </p>
          <div className="pl-2">
            <p>* Skill1</p>
            <p>* Skill2</p>
          </div>
          </p>

        </div>
      </div>
      <div className="justify-start items-start">
      <button
        className="border rounded-lg bg-gray-400 p-4 font-bold mb-2 hover:bg-blue-200"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
      </div>
    </div>
  );
}
