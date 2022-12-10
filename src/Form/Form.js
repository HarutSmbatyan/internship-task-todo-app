import { useRef, useState } from "react";
import "./Form.css";

function Form({onAdd}){
    const [text, setText] = useState("");
    const maxLength =  useRef();

    return (
        <form onSubmit={(evt) =>{
            evt.preventDefault();
            if(text.length <= 55){
                onAdd(text);
            }
            setText("");
        }}>
            <span>Task</span>
            <input type="text" maxLength={55} ref={maxLength} placeholder="Write here" required value={text} onChange={(e) =>{
                setText(e.target.value, e.target.value.length >= 55 ? e.target.style.border = "1px solid red": e.target.style.border = "1px solid #FFCD04");
            }}
            />
            <button id="add">ADD</button>
        </form>    
    );
}
export default Form;