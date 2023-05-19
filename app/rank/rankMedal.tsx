export default function RankMedal(props: any) {
  let medal;
  if (props.index === 1) {
    medal = (
      <div>
        <div className="w-20 block m-auto rounded-full border-8 border-yellow-500 overflow-hidden">
          <img src={"/" + props.userImg} alt="" />
          <img
            src="/rankMedal1.png"
            alt=""
            className="absolute ml-10 mt-[-26px]"
          />
        </div>
        <div className="bg-slate-100 px-4 py-1 mt-2 rounded-lg text-center">
          <h4 className="font-bold text-slate-800">{props.name}</h4>
          <p className="text-slate-500">{props.poin}</p>
        </div>
      </div>
    );
  } else if (props.index === 2) {
    medal = (
      <div>
        <div className="w-20 block m-auto rounded-full border-8 border-slate-300 overflow-hidden">
          <img src={"/" + props.userImg} alt="" />
          <img
            src="/rankMedal2.png"
            alt=""
            className="absolute ml-10 mt-[-26px]"
          />
        </div>
        <div className="bg-slate-100 px-4 py-1 mt-2 rounded-lg text-center">
          <h4 className="font-bold text-slate-800">{props.name}</h4>
          <p className="text-slate-500">{props.poin}</p>
        </div>
      </div>
    );
  } else if (props.index === 3) {
    medal = (
      <div>
        <div className="w-20 block m-auto rounded-full border-8 border-[#D8975C] overflow-hidden">
          <img src={"/" + props.userImg} alt="" />
          <img
            src="/rankMedal3.png"
            alt=""
            className="absolute ml-10 mt-[-26px]"
          />
        </div>
        <div className="bg-slate-100 px-4 py-1 mt-2 rounded-lg text-center">
          <h4 className="font-bold text-slate-800">{props.name}</h4>
          <p className="text-slate-500">{props.poin}</p>
        </div>
      </div>
    );
  } else {
    null;
  }
  return <div className="flex items-center justify-center">{medal}</div>;
}
