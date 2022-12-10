import "./item.css";

function Item({elem, onChange, onDelete}){

    return (
        <div className="item">
            <label style={elem.isCompleted === true ? {color : "grey"} : {color: "black"}}>
                <input type="checkbox" checked={elem.isCompleted} onChange={(e)=>{
                   onChange({
                        ...elem,
                        isCompleted: e.target.checked 
                   });
                }}
                />
                {elem.text}
                <button onClick={()=>{
                    onDelete(elem);
                }}>X</button>
            </label>
        </div>
    );
}
export default Item;
