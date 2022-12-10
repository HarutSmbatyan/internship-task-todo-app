import Item from "./Item";
import "./list.css";

function List ({list,onDelete,onChange}){

    return (
        <div className={list.length < 8 ? "list" : "list1"} >
            {
                list.map((elem) => {
                    return (
                        <Item 
                            key={elem.id} 
                            elem={elem}
                            onChange={onChange}
                            onDelete={onDelete}    
                        />
                    )
                })
            }
        </div>    
    );
}

export default List;