import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Upper case was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to uppsercase!", 'success');
  }
  const handleLoClick = ()=>{
    console.log("Lower case was clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", 'success');
  }
  const whiteSpace = ()=>{
    setText("");
  }
  const copytext = ()=>{
    const text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied!", 'success');
  }
  const handleOnChange = (event)=>{
    console.log("On Change!");
    setText(event.target.value)
  }

  const [text, setText]  = useState("Enter text here");
  return (
  <>
    <div className="mb-3" style={{color: props.mode === 'dark'?'white':'#183b56'}}>
    <h1 style={{marginBottom:'-0.5rem'}}>{props.heading}</h1>
      <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
      <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} onClick={whiteSpace} style={{backgroundColor: props.mode ==='light'?'white':'white'}} rows="8"></textarea>
      <button disabled={text.length===0} style={{color: props.mode ==='dark'?'white':'dark'}} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={copytext}>📋</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'#183b56'}}>
      <h2>Your Text Summary</h2>
      <p style={{color: props.mode === 'dark'?'white':'#183b56'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p style={{color: props.mode === 'dark'?'white':'#183b56'}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"You'll see preview here..."}</p>
    </div>
  </>
    
) 
} 
