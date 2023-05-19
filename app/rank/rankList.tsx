import SquenceNumber from "./squenceNumber"

export default function RankList(props:any){
    return <div className="flex items-center my-5">
    <SquenceNumber squence={props.squence}/>
    <div className="flex items-center grow ml-3">
      <img
        src={"/" + props.userImg}
        alt="not found"
        className="w-9 rounded-full mr-5"
      />
      <h4>{props.name}</h4>
    </div>
    <h4 className="font-bold">{props.poin}</h4>
  </div>
}