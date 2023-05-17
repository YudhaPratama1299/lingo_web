export default function MasteredWord(props: any) {
  return (
    <div className="w-20 h-6 bg-white flex items-center gap-1 rounded-md border border-gray-400 pr-3">
      <img src="/MasteredWord.png" alt="" className="bg-yellow-500 w-8 relative left-[-4px] p-1" style={{transform : "perspective(800px) rotateY(-17deg) scale(0.9) rotateX(15deg)"}}/>
      <h4 className="font-bold">{props.masteredWord}</h4>
    </div>
  );
}
