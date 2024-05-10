import React from "react";
import { MdRefresh, MdFullscreen, MdAdd } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="ml-5 md:ml-28 mt-10">
        <div className=" text-2xl font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">
          Relations and Functions ( Mathematics )
        </div>
        <div className="mt-8 flex align-middle items-center justify-center">
          <div>
            <div className="sm:hidden">
              <label htmlFor="Tab" className="sr-only">
                Tab
              </label>

              <select id="Tab" className="w-full rounded-md border-gray-200">
                <option select>Study</option>
                <option>Quiz</option>
                <option>Test</option>
                <option>Game</option>
                <option>Others</option>
              </select>
            </div>

            <div className="hidden sm:block">
              <div className="">
                <nav className="-mb-px flex gap-6" aria-label="Tabs">
                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center gap-2 border-b-2 border-[#06286E] px-1 text-sm font-bold text-[#06286E]"
                    aria-current="page"
                  >
                    Study
                  </a>

                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Quiz
                  </a>

                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Test
                  </a>

                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Game
                  </a>

                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Others
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src="Comp.png" className=" h-44 md:h-60 m-auto mt-5" />
          <div className="flex gap-5 items-center justify-center mt-5">
            <div className="text-[#06286E] text-3xl">
              <MdRefresh />
            </div>
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] ml-10 md:ml-14 py-2 pl-[7px] pr-[9px] text-2xl text-white rounded-full">
              <FaChevronLeft />
            </div>
            <div className="text-xl font-bold"> 1/10 </div>
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] py-2 pl-[7px] pr-[9px] text-2xl text-white rounded-full">
              <FaChevronRight />
            </div>
            <div className="text-[#06286E] ml-10 md:ml-14 text-3xl">
              <MdFullscreen />
            </div>
          </div>
          <div className="flex mt-10">
            <img src="Frame 41.png" className="h-20 md:h-24" />
            <div className="flex mt-4 md:mt-6 ml-auto mr-2 md:mr-20">
              <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] h-10 w-10 text-3xl font-bold flex justify-center items-center text-white rounded-full">
                <MdAdd />
              </div>
              <div className="mt-2 font-bold text-[#06286E] ml-2">Create Flashcard</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
