import React,{useState} from 'react';
import props from 'prop-types';
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
    props.showAlert("text has been successfully removed","success");
}
const HandleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText);
props.showAlert("text has been  capitalized","success");
};
const HandleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("text has been successfully converted to lower case","success");
}
const HandleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text has been successfully copied to clipboard","success");

}
const HandleExtraSpaces=()=>{
let newText= text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert("Extra spaces removed","success");

}
// end-------------------------------------------------------------------------------------------------------------------------------
    return (
<>
<div className='container'>
<h2>{props.heading}</h2>
<div className="mb-3">
    <textarea className="form-control" value={text}  onChange={HandleOnChange} id="myBox" rows=""></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={HandleDownClick}>Convert to lower case</button>
<button className="btn btn-primary mx-2" onClick={HandleNoText}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={HandleCopy}>Copy text</button>
<button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
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
