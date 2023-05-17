"use client";
import { useState } from "react";
import CourseCard from "./courseCard";
export default function Courses() {
  const courseDatas = [
    {
      id: 1,
      countryImg: "germany.png",
      courseName: "Germany Language",
      masteredWord: 100,
      wordToReview: 200,
      courseProgres3: 100,
      coursePercentage: 50,
    },
    {
      id: 2,
      countryImg: "germany.png",
      courseName: "English Language",
      masteredWord: 200,
      wordToReview: 100,
      courseProgres3: 400,
      coursePercentage: 60,
    },
    {
      id: 3,
      countryImg: "spain.png",
      courseName: "Japanese Language",
      masteredWord: 400,
      wordToReview: 100,
      courseProgres3: 100,
      coursePercentage: 20,
    },
    {
      id: 4,
      countryImg: "korean.png",
      courseName: "Korean Language",
      masteredWord: 600,
      wordToReview: 100,
      courseProgres3: 100,
      coursePercentage: 60,
    },
    {
      id: 5,
      countryImg: "default.png",
      courseName: "Balinese Language",
      masteredWord: 700,
      wordToReview: 200,
      courseProgres3: 500,
      coursePercentage: 90,
    },
    {
      id: 6,
      countryImg: "default.png",
      courseName: "Thailand Language",
      masteredWord: 100,
      wordToReview: 600,
      courseProgres3: 400,
      coursePercentage: 50,
    },
    {
      id: 7,
      countryImg: "italy.png",
      courseName: "Chinese Language",
      masteredWord: 100,
      wordToReview: 600,
      courseProgres3: 400,
      coursePercentage: 40,
    },
    {
      id: 8,
      countryImg: "default.png",
      courseName: "Brazil Language",
      masteredWord: 100,
      wordToReview: 600,
      courseProgres3: 400,
      coursePercentage: 10,
    },
  ];
  const [expand, setExpand] = useState(false);
  const [courseIndex, setCourseIndex] = useState(4);
  const SliceCourseDatas = courseDatas.slice(0, courseIndex);
  const handleExpand = () => {
    setExpand(!expand);
    setCourseIndex(courseDatas.length);
  };
  const handleLess = () => {
    setExpand(!expand);
    setCourseIndex(4);
  };
  return (
    <>
      {SliceCourseDatas.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          countryImg={course.countryImg}
          courseName={course.courseName}
          masteredWord={course.masteredWord}
          wordToReview={course.wordToReview}
          coursePercentage={course.coursePercentage}
        />
      ))}
      {expand ? (
        <button
          onClick={handleLess}
          className="block bg-[#57BFE1] mx-auto mb-3 px-9 py-2 rounded-full font-bold text-white mb-11"
          style={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25), 0px 6px 0px #0C8499",
          }}
        >
          Show Less
        </button>
      ) : (
        <button
          onClick={handleExpand}
          className="block bg-[#57BFE1] mx-auto mb-3 px-9 py-2 rounded-full font-bold text-white mb-11"
          style={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25), 0px 6px 0px #0C8499",
          }}
        >
          Show All
        </button>
      )}
    </>
  );
}
