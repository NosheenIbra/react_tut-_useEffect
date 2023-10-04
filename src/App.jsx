import { useState, useEffect} from "react";
import Header from "./Header";
import { TextField, Stack, Button  } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
// import Fields from './Fields'
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
//  in useeffect hook 1st body content is used after tha jsx and at the last usEFFeect is called 
// useEffect has 3 conditions to use 1. with some condition mean dependencies 2, without condition , 
const [state, setState] =useState(0);
const [state2, setState2] =useState(0);
useEffect(()=>{
  // that will give alert in window
   window.alert('useEffect is called')
//  dependies can be right in this square bracket and we can use props, state any thing but at that time m using state
}, [state ,state2])



  return (
    <>
      <div className="App">
        <Header /> 
        {/*  event function is also called call in function or arrow function */}
        <button onClick ={(e) => setState(state + 1)} > Click me {state}</button>
        <button onClick ={(e) => setState2(state2 + 1)} > Click me {state2}</button>
        </div>
    </>
  );
}

export default App;
