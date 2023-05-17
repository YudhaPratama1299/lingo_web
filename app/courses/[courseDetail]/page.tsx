import CountryImage from "../countryImage";
import MasteredWord from "../masteredWord";
import ProgressBar from "../progressBar";
import WordToReview from "../wordToReview";
import RankSection from "./rank/rankSection";

export default function CourseDetail(props: any) {
  const courseId = props.params.courseDetail;
  console.log("id " + courseId);

  const courseDatas = [
    {
      id: 1,
      countryImg: "germany.png",
      courseName: "Germany Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 100,
      wordToReview: 200,
      courseProgres3: 100,
      coursePercentage: 50,
    },
    {
      id: 2,
      countryImg: "germany.png",
      courseName: "English Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 200,
      wordToReview: 100,
      courseProgres3: 400,
      coursePercentage: 60,
    },
    {
      id: 3,
      countryImg: "spain.png",
      courseName: "Japanese Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 400,
      wordToReview: 100,
      courseProgres3: 100,
      coursePercentage: 20,
    },
    {
      id: 4,
      countryImg: "korean.png",
      courseName: "Korean Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 600,
      wordToReview: 100,
      courseProgres3: 100,
      coursePercentage: 60,
    },
    {
      id: 5,
      countryImg: "default.png",
      courseName: "Balinese Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 700,
      wordToReview: 200,
      courseProgres3: 500,
      coursePercentage: 90,
    },
    {
      id: 6,
      countryImg: "default.png",
      courseName: "Thailand Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 100,
      wordToReview: 600,
      courseProgres3: 400,
      coursePercentage: 50,
    },
    {
      id: 7,
      countryImg: "italy.png",
      courseName: "Chinese Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 100,
      wordToReview: 600,
      courseProgres3: 400,
      coursePercentage: 40,
    },
    {
      id: 8,
      countryImg: "default.png",
      courseName: "Brazil Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      masteredWord: 100,
      wordToReview: 600,
      courseProgres3: 400,
      coursePercentage: 10,
    },
  ];

  let courseDetail: any;
  courseDatas.map((course) => {
    if (course.id == courseId) {
      courseDetail = course;
    }
  });
  console.log("detail " + courseDetail);
  return (
    <>
    <div className="flex gap-5 bg-[#0C8499] w-full px-20 py-12 mb-5">
      <div className="border-2 border-white rounded-lg w-48 h-48 overflow-hidden">
        <CountryImage src={courseDetail.countryImg}/>
      </div>
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex pb-3">
          <div className="grow" style={{ color: "#ffff" }}>
            <h1 className="font-bold text-2xl">
              {courseDetail && courseDetail.courseName}
            </h1>
          </div>
          <button className="block ml-auto">share</button>
        </div>
        <p className="text-2xs text-white mb-3">
          {courseDetail && courseDetail.description}
        </p>
        <div className="bg-white px-2 py-1 rounded-xl my-3">
          <ProgressBar
            coursePercentage={courseDetail && courseDetail.coursePercentage}
          />
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex gap-4">
            <MasteredWord
              masteredWord={courseDetail && courseDetail.masteredWord}
            />
            <WordToReview
              wordToReview={courseDetail && courseDetail.wordToReview}
            />
            <WordToReview
              wordToReview={courseDetail && courseDetail.wordToReview}
            />
          </div>
          <button
            className="flex px-4 rounded-lg text-white font-semibold"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 0px #046778",
            }}
          >
            Review
          </button>
        </div>
      </div>
    </div>
    <div
        className="flex flex justify-between items-center px-20 py-7"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.125)" }}
      >
        <h5>Level</h5>
        <h1>sreachbar</h1>
      </div>
      <div className="flex gap-8 px-20 py-10 w-full">
        <div className="w-full">
          <div className="grid grid grid-cols-2 gap-5">
            {/* <CardLevel />
            <CardLevel /> */}
          </div>
        </div>
        <div className="w-4/6">
          <RankSection/>
        </div>
      </div>
    </>
  );
}
