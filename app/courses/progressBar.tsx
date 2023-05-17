export default function ProgressBar(props:any) {
    return (
      <div className="flex gap-3 items-center font-semibold">
        <div className="w-full h-4 bg-[#C6D2D9] rounded-t-lg rounded-bl-lg rounded-br-3xl shadow-[inset_0px_3px_0px_#969696;]">
          <div
            className="h-4 rounded-md bg-[#57BFE1] shadow-[0px_3px_0px_#0C8499;] relative bottom-0.5"
            style={{ width: props.coursePercentage + "%" }}
          ></div>
        </div>
        <h5>{props.coursePercentage}%</h5>
      </div>
    );
  }
  