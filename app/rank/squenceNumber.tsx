export default function SquenceNumber(props:any){
    let template;
    if (props.squence === 1) {
        template = <img src="/rankMedal1.png" alt="" />
    } else if (props.squence === 2) {
        template = <img src="/rankMedal2.png" alt="" />
    } else if (props.squence === 3) {
        template = <img src="/rankMedal3.png" alt="" />
    } else {
        template = <h1 className="px-3">{props.squence}</h1>
    }
    return<>{template}</>
}