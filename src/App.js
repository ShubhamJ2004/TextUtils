import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
function App() {
  const[mode, setmode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1b0540'
      showAlert("Dark mode has been enabled", 'success');
      // document.title = 'TextUtils - Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", 'success');
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
  <>
  {/* <Router> */}
    {/* <Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}  /> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
      <Route path='/about'>
        <About mode={mode}/>
      </Route>
      <Route path='/'>
  */}  <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Copy to Clipbord!" mode={mode}/>
      {/* </Route> */}
    {/* </Switch> */}
    </div> 
  {/* </Router> */}
  </>

  );
}

export default App;
