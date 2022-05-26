import '../App.css'
import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

function System() {

  const [context, setpara] = useState("");
  const [question, setques] = useState("");
  const [answer, setans] = useState("");
  const [attr, setattr] = useState("");
  const [isloading, setloading] = useState(false);

  const handleSubmit = async (event) => {
    setloading(true);
    const formData = new FormData();
    formData.append('context', context);
    formData.append('question', question);
    console.log(context, question);
    event.preventDefault();

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    axios({
      method: 'post',
      // url: 'http://127.0.0.1:8000/',
      url: 'https://hindi-qa.herokuapp.com/',
      data: formData,
      config: config
    })
      .then((response) => {
        console.log(response);
        let resp = response;
        setloading(false);
        if (resp.data["error"] === false) {
          setans("Predicted answer : " + response.data["answer"]);
          setattr("success p-3");
        } else {
          setans(response.data["answer"] + ". Try reloading the page.");
          setattr("error p-3");
        }


      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="main mb-3">


      <div className='container mb-6'>
        <div className="bg-image" style={{ backgroundimage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')", height: "100vh" }}>
          <h1 className='my-3'>Multilingual Question Answering System</h1>
          <form onSubmit={handleSubmit}>
            <div className="container mb-3 my-5">
              <h5 className='text-start'>Enter paragraph</h5>
              <textarea className="form-control" name="para" value={context} onChange={(e) => { setpara(e.target.value) }} id="exampleFormControlTextarea1" rows="3" placeholder="Paragraph" required></textarea>
            </div>
            <div className="container mb-3">
              <h5 className='text-start'>Enter Question</h5>
              <input type="text" className="form-control" name="ques" value={question} onChange={(e) => { setques(e.target.value) }} id="exampleFormControlInput1" placeholder="Question" required/>
            </div>

            <div className="container mb-3">
              <input type="submit" className="btn btn-primary" value="Predict" disabled = {isloading} />
            </div>
            
          </form>
          {isloading ? <Spinner/> : 
          <div className="container my-3 answer rounded-3">
            <h5 className={`text-start answer ${attr}`}>{answer}</h5>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default System;
