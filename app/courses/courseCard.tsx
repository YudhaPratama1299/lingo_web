import CountryImage from "./countryImage";
import ProgressBar from "./progressBar";
import MasteredWord from "./masteredWord";
import WordToReview from "./wordToReview";
import Link from "next/link";

export default function CourseCard(props: any) {
  return (
    <>
      <div
        className="flex gap-5 bg-white text-black w-3/6 p-7 rounded-lg mx-auto my-11"
        style={{
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25), 0px 6px 0px #0C8499",
        }}
      >
        <div className="w-40 rounded-lg overflow-hidden">
          <CountryImage src={props.countryImg} />
        </div>
        <div className="w-full flex flex-col justify-evenly">
          <div className="flex items-center">
            <Link href={`/courses/${props.course.id}`}><h1 className="grow font-bold text-lg">{props.courseName}</h1></Link>
            <button className="block ml-auto">btn</button>
          </div>
          <div className="flex gap-4 mt-7 mb-5">
            <MasteredWord masteredWord={props.masteredWord} />
            <WordToReview wordToReview={props.wordToReview} />
            <WordToReview wordToReview={props.wordToReview} />
          </div>
          <ProgressBar coursePercentage={props.coursePercentage} />
        </div>
      </div>
    </>
  );
}
