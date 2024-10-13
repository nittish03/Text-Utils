import React,{useState} from 'react';
import toast from "react-hot-toast"
// things change
export default function TextForm(props) {
    // started---------------------------------------------------------------------------------------------------------------------------
    // 
    const HandleOnChange=(event)=>{
    setText(event.target.value);
    }
    // 
    
const [ text,setText ]= useState('');

const HandleNoText=()=>{
    setText("");
    toast.success("text has been successfully removed");
}
const HandleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText);
toast.success("text has been  capitalized")
};
const HandleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    toast.success("text has been successfully converted to lower case")
}
const HandleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    toast.success("text has been successfully copied");

}
const HandleExtraSpaces=()=>{
let newText= text.split(/[ ]+/);
setText(newText.join(" "));
toast.success("Extra spaces successfully removed")

}
// end-------------------------------------------------------------------------------------------------------------------------------
    return (
<>
<div className='container'>
<h2 style={{marginTop:"6vh"}} >{props.heading}</h2>
<div className="mb-3">
    <textarea className="form-control" value={text}  onChange={HandleOnChange} id="myBox" rows=""></textarea>
</div>
<button className={`btn btn-${props.buttonColor} mx-2 m-3`} onClick={HandleUpClick}>Convert to upper case</button>
<button className={`btn btn-${props.buttonColor} mx-2 m-3`} onClick={HandleDownClick}>Convert to lower case</button>
<button className={`btn btn-${props.buttonColor} mx-2 m-3`} onClick={HandleNoText}>Clear text</button>
<button className={`btn btn-${props.buttonColor} mx-2 m-3`} onClick={HandleCopy}>Copy text</button>
<button className={`btn btn-${props.buttonColor} mx-2 m-3`} onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-2">
<h2>Your text summary</h2>
<p>{(text.split(" ").length)} words and {text.length} characters</p>
<p>This text can be read in {(text.split(" ").length)*0.008} minutes</p>
<h2>Preview</h2>
<p className='p-3' id='bord'>{text.length>0? text:"enter something in the textbox above to preview here"}</p>
</div>
</>
)
}
