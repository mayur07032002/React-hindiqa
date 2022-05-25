import './App.css'
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [context,setpara] = useState(""); 
  const [question,setques] = useState("");
  const [answer,setans] = useState("");

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
      console.log(response.data);
      console.log(response.data["answer"]);
      setans("Predicted answer : " + response.data["answer"]);
    })
    .catch((error) => {
      console.log(error)
    });
  }
  
  return (
    <div className="App mb-3">
        
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Multilingual</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    
    <div className='container mb-6'>
        <div className="bg-image"  style={{backgroundimage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')", height: "100vh"}}>
      <h1>Question - Answering</h1>
        <form onSubmit={handleSubmit}>
        <div className="container mb-3">
        <label className="form-label">Enter paragraph</label>
        <textarea className="form-control" name="para" value={context} onChange={(e)=>{setpara(e.target.value)}} id="exampleFormControlTextarea1" rows="3" placeholder="Paragraph"></textarea>
        </div>
        <div className="container mb-3">
        <label  className="form-label">Email Question</label>
        <input type="text" className="form-control" name="ques" value={question} onChange={(e)=>{setques(e.target.value)}} id="exampleFormControlInput1" placeholder="Question"/>
        </div>
        <input type="submit" className="btn btn-primary" value = "Predict"/>
        </form>
      <p >{answer}</p>
    </div>
    </div>
    </div>
  )
}

export default App;
