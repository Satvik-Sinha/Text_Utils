import './App.css';
import Navbar from './Components/Navbar';
import TextForm from "./Components/TextForm";
function App() {
  
  return (
    <>
      <Navbar title1="Text-Utils" title2="Home" title3="About" />

      <div className="container">
        <TextForm heading="Enter the text"/>
      </div>
      
    </>
  );
}

export default App;
