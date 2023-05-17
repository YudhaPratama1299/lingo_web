export default function WordToReview(props:any){
    return<div className="w-20 h-6 bg-white flex items-center gap-1 rounded-md border border-gray-400 pr-3 ">
    <img src="/WordToReview.png" alt="" className="bg-gray-700 w-8 relative left-[-4px] p-1" style={{transform : "perspective(800px) rotateY(-17deg) scale(0.9) rotateX(15deg)"}} />
    <h4 className="font-bold">{props.wordToReview}</h4>
</div>
}