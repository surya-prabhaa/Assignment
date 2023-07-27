import { useState } from 'react';
import './App.css';

function App() {

//     const [result,setresult]=useState("0");

//     const clearAll=(e)=>{
//       setresult(" ")
//     }

//     const clearOne=()=>{
//       setresult(result.slice(0,-1))
//     }

//     const handleClick=(e)=>
//     {
//       setresult(result.concat(e.target.name))
//     }

//     const show=(e)=>{
//       setresult(result(e.target.name))
//      }
    
//    const calculate=()=>{
//     setresult(eval(result))
//    }

//   return (

//     <div className="calci">
      
//     <div className="container">
    
    // <input type="text" value={show} />

//      <input type="text" value={result} />

// <div className='keypad'>
        
//         <button className="co1" name=""  onClick={clearOne} >C</button>
//         <button  className="co1" name="+/-" onClick={handleClick} >+/-</button>
//         <button  className="co1" name="%" onClick={handleClick} >%</button>
//         <button  className="co2" name="/" onClick={handleClick} >÷</button>

//         <button className="co3" name="7" onClick={handleClick} >7</button>
//         <button className="co3" name="8" onClick={handleClick}  >8</button>
//         <button className="co3" name="9" onClick={handleClick}  >9</button>
//         <button className="co2" name="*" onClick={handleClick}  >x</button>

//         <button className="co3" name="4" onClick={handleClick}  >4</button>
//         <button className="co3" name="5" onClick={handleClick}  >5</button>
//         <button className="co3" name="6" onClick={handleClick} >6</button>
//         <button className="co2" name="-" onClick={handleClick}  >-</button>
        
//         <button className="co3" name="1" onClick={handleClick}  >1</button>
//         <button className="co3" name="2" onClick={handleClick}  >2</button>
//         <button className="co3" name="3" onClick={handleClick}  >3</button>
//         <button className="co2" name="+" onClick={handleClick}  >+</button>

//         <button className="co3" id="clearAll" onClick={clearAll} >CE</button>
//         <button className="co3" name="0" onClick={handleClick}  >0</button>
//         <button className="co3" name="." onClick={handleClick}  >.</button>
//         <button id="result" name="=" onClick={calculate}  >=</button>
        
//         </div>    
//         </div>
//         </div>
//   )
// }

const [result,setresult]=useState("");
const [calc,setCalc]=useState("")

const ops=['/', '+',  '-', '*','.'];

const updateCalc=value=>
{
  if(ops.includes(value) && calc===' '||ops.includes(value)&&ops.includes(calc.slice(-1)) )
  {
    return;
  }
    setCalc(calc+value);

    if(!ops.includes(value))
    {
      setresult(eval(calc+value).toString());
    }
}

const clearAll=()=>{
  setCalc("")
}

const clearOne=()=>{

  if(calc==' ')
  {
    return;
  }
  else
  {
     const value=calc.slice(0,-1);
     setCalc(value);
  }
  
}

const calculate=()=>{
setCalc(eval(calc).toString());
}


return (

<div className="calci">
  
<div className="container">

  <div className="display">
    {result ? <div>{result}</div>:' '}&nbsp;
    {calc || "0"}
   </div>


<div className='keypad'>
    
    <button className="co1" name=""  onClick={clearOne} >C</button>
    <button  className="co1" name="+/-" onClick={()=>updateCalc('+/-')} >+/-</button>
    <button  className="co1" name="%" onClick={()=>updateCalc('%')} >%</button>
    <button  className="co2" name="/" onClick={()=>updateCalc('/')} >÷</button>

    <button className="co3" name="7" onClick={()=>updateCalc('7'.toString())} >7</button>
    <button className="co3" name="8" onClick={()=>updateCalc('8'.toString())}  >8</button>
    <button className="co3" name="9" onClick={()=>updateCalc('9'.toString())}  >9</button>
    <button className="co2" name="" onClick={()=>updateCalc('')}  >x</button>

    <button className="co3" name="4" onClick={()=>updateCalc('4'.toString())}  >4</button>
    <button className="co3" name="5" onClick={()=>updateCalc('5'.toString())}  >5</button>
    <button className="co3" name="6" onClick={()=>updateCalc('6'.toString())} >6</button>
    <button className="co2" name="-" onClick={()=>updateCalc('-')}  >-</button>
    
    <button className="co3" name="1" onClick={()=>updateCalc('1'.toString())}  >1</button>
    <button className="co3" name="2" onClick={()=>updateCalc('2'.toString())}  >2</button>
    <button className="co3" name="3" onClick={()=>updateCalc('3'.toString())}  >3</button>
    <button className="co2" name="+" onClick={()=>updateCalc('+')}  >+</button>


    <button className="co3" id="clearAll" onClick={clearAll} >CE</button>
    <button className="co3" name="0" onClick={()=>updateCalc('0'.toString())}  >0</button>
    <button className="co3" name="." onClick={()=>updateCalc('.')}  >.</button>
    <button id="result" name="=" onClick={calculate}  >=</button>
    
    </div>    
    </div>
    </div>
)
}








export default App;
