import React from "react";

const Hero = () => {
  return (
    <main className="text-center gap-7 flex flex-col items-center justify-center">
      <h1 className="leading-10 text-3xl sm:leading-[3.5rem] sm:text-5xl md:text-[3.5rem] font-bold md:leading-[1.35em]">
        Your Time, Your Schedule
        <br />
        Get a Personalized{" "}
        <span className="underline underline-offset-4 decoration-[#5335D9] decoration-[6px]">
          Reading Plan Today!
        </span>
      </h1>
      <p className="opacity-40 font-medium text-xs sm:text-base">
        Reading Timetable is an app that uses AI to generate the perfect <br />{" "}
        reading timetable for you
      </p>
      <button className="w-fit text-sm px-5 py-4 mt-5 md:text-base md:px-7 md:py-5 md:mt-7 text-white rounded-full font-medium bg-secBg">
        Plan your reading schedule for free
      </button>
    </main>
  );
};

export default Hero;
