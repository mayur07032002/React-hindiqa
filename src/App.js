import './App.css'
import React, {useEffect,useState} from 'react';
import axios from 'axios';

function App() {
  
  const [context,setpara] = useState(""); 
  const [question,setques] = useState("");
//   const [answer,setans] = useState("");
  // let answer = "";

  const handleSubmit = async (event) => {
    const formData = new FormData();
      formData.append('context', context);
      formData.append('question', question);
    event.preventDefault();

    const config = {     
    headers: { 'content-type': 'multipart/form-data' }
    }

    axios({
      method: 'post',
      // url: 'http://127.0.0.1:8000/',
      url : 'https://hindi-qa.herokuapp.com/',
      data: formData, 
      config : config
    })
    .then((response) => {
      console.log(response.data)
    //   answer = response.data['answer'];
    })
    .catch((error) => {
      //error.data.error.message
      console.log(error)
    });
  }
  
  return (
    <div className="App">
      <h1>Question - Answering</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="para" value={context} onChange={(e)=>{setpara(e.target.value)}} placeholder='paragraph'></input> <br/> <br/>
          <input type="text" name="ques" value={question} onChange={(e)=>{setques(e.target.value)}} placeholder='question'></input> <br/> <br/>
          <input type="submit" />
        </form>
      <p>{context}</p>
      {/* <p onChange={(e)=>{setans(e.target.value)}} value = {answer}></p> */}
    </div>
  )
}

export default App;
