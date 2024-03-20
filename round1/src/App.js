
import './App.css';
import Axios from 'axios'
import {useState} from 'react';
function App() {
  const[print,SetPrint] = useState([]);



  const getEven = async ()=>{
    try{
      const res = await Axios.get('http://20.244.56.144/numbers/even');
      SetPrint([...res.data.numbers]);
    }catch(err){
      console.log(err);
    }
  }

  const getPrime = async ()=>{
    try{
      const res = await Axios.get('http://20.244.56.144/numbers/primes');
      SetPrint([...res.data.numbers]);
    }catch(err){
      console.log(err);
    }
  }

  const getFibo = async ()=>{
    try{
      const res = await Axios.get('http://20.244.56.144/numbers/fibo');
      SetPrint([...res.data.numbers]);
    }catch(err){
      console.log(err);
    }
  }

  const getRandom = async ()=>{
    try{
      const res = await Axios.get('http://20.244.56.144/numbers/rand');
      SetPrint([...res.data.numbers]);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="App">
     <div className="Outer-Container">
      <div className="App-Header">
        <h1>Calculator</h1>
      </div>
      <div className="App-Content">
        <button onClick={getEven}>E</button>
        <button onClick={getPrime}>P</button>
        <button onClick={getFibo}>F</button>
        <button onClick={getRandom}>R</button>
      </div>
      <div className="display ">
        {
          print.map(result=>{
            return(
             <div style={{
              width:"100%",
              
              
              fontSize:"20px"
             }}>{result}</div>
            )
          })
        }
      </div>

     </div>
    </div>
  );
}

export default App;
