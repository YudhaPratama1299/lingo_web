export default function TabButton({children,onTabClick,active}:any){
    let activeStyle;
    if (active) {
        activeStyle = {backgroundColor : '#0C8499',color : '#ffff'}
    }
    return<button onClick={onTabClick} className="h-full font-medium text-gray-500 px-9 rounded-lg" style={activeStyle}>{children}</button>
}