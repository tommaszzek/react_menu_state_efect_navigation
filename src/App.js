import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route,NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Home=()=>{return(<h1>HOME</h1>)}
const About=()=>{
  const navigate = useNavigate();

  const navigateToHome=()=>{
    navigate('/');
  }
  
  return(
    <>
  <h1>About</h1>
  <button onClick={navigateToHome}>Home</button>
  </>

  )}
const Dane_1=()=>{

 const [dataurl,setUrl]=useState('');
 const navigate = useNavigate();

  const pressValue=event=>setUrl(event.target.value);

const clikcFormME=()=>{
  navigate(`/dane_2/${dataurl}`);
}

  return(
  <>
  <input
  type='text'
  onChange={pressValue}
   />
  <h1>Dane_1</h1>
  <p>sciezka: {dataurl} </p>
  <button onClick={clikcFormME}>
    Redirect
  </button>
  </>
  )


}
const Dane_2=()=>{

  const { cos } = useParams();
  
  return(
    <>
  <h1>Dane_2 z geta</h1>
  <p>{cos}</p>
  </>
  )

}


function State_H() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Kliknięto ${count} razy`;
  });

const clikcFormME=() => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clikcFormME}>
        Click me
      </button>
    </div>
  );



}

function Nav(){
return(
<ul>
 <li><NavLink to='/'>Home</NavLink></li> 
<li><NavLink to='/about'>About</NavLink></li>
<li><NavLink to='/dane_1'>Dane1</NavLink></li> 

</ul>
)
}
function App() {
  return (
    <>
    <State_H />
    <Nav/>
   <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route  exact path="/about" element={<About />} />
        <Route exact path="/dane_1" element={<Dane_1 />} /> 
        <Route  exact path="/dane_2/:cos" element={<Dane_2 />} />
    </Routes>
  </>
  );
}

export default App;
