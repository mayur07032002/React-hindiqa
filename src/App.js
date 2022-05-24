import './App.css'
import React, {useEffect,useState} from 'react';

function App() {
  
  const [context,setpara] = useState(""); 
  const [question,setques] = useState("");

  function predict()
  {
    console.warn({context,question})
    let data={context,question}
    fetch("https://hindi-qa.herokuapp.com/",{
      method:'POST',
      mode: 'no-cors',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
      
    }).then((result)=>{
      console.warn("result",result)
    }
    )
  }
  
  return (
    <div className="App">
      <h1>Question - Answering</h1>
      <input type="text" name="para" value={context} onChange={(e)=>{setpara(e.target.value)}} placeholder='paragraph'></input> <br/> <br/>
      <input type="text" name="ques" value={question} onChange={(e)=>{setques(e.target.value)}} placeholder='question'></input> <br/> <br/>
      <button type="button" onClick={predict}>Predict</button>
      <p>{context}</p>
    </div>
  )
}

export default App;
