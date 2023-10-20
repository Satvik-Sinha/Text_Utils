import React,{useState} from 'react'



export default function TextForm(props) {
    // if(props.mode==='light')
    // {
    //     document.getElementById('myBox').style.backgroundColor='white';
    //     document.getElementById('myBox').style.color='black';
    // }
    // else{
    //     document.getElementById('myBox').style.backgroundColor='black';
    //     document.getElementById('myBox').style.color='white';
    // }
    const handleCopy = ()=>{
        // console.log('Copy was Clicked');
        let copiedText=document.getElementById('myBox').value;
        navigator.clipboard.writeText(copiedText);
        props.showAlert("Copied Text","danger");
    }
    const handleClear = ()=>{
        // console.log('Copy was Clicked');
        setText("");
        props.showAlert("Cleared Text","danger");
    }
    const handleUpClick=()=>{
        // console.log('Upper Case was Clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper-Case","danger");
    }
    const handleLoClick=()=>{
        // console.log('Upper Case was Clicked');
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower-Case","danger");
    }
    const handleOnChange = (e) => {
        // console.log('On Change');
        setText(e.target.value);
    }

    const [text, setText] = useState('Enter text here');
  return (
    <>    
        <div className="container">
        <form>
        <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={
           {backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}
        }/>
        </div>
        </form>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-1 " onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 " onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container">
        <h3 className='my-3'>Preview</h3>
        <p>{text}</p>
        <p>Length is {text.length} and No. of words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        </div>
    </>
  )
}
