import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log('Upper Case was Clicked');
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log('Upper Case was Clicked');
        let newText=text.toLowerCase();
        setText(newText);
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
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"/>
        </div>
        </form>
        <button className="btn btn-primary" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lower Case</button>
        </div>

        <div className="container">
        <h3 className='my-3'>Preview</h3>
        <p>{text}</p>
        <p>Length is {text.length} and No. of words are {(text!=""?text.split(" ").length:0)}</p>
        </div>
    </>
  )
}
