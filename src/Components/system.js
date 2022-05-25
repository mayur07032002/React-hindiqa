import '../App.css'
import React, { useState } from 'react';
import axios from 'axios';

function System() {

  const [context, setpara] = useState("");
  const [question, setques] = useState("");
  const [answer, setans] = useState("");
  const [attr, setattr] = useState("");

  const handleSubmit = async (event) => {
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

        let resp = response;
        if (resp.data["error"] === false) {
          setans("Predicted answer : " + response.data["answer"]);
          setattr("success p-3");
        } else {
          setans(response.data["answer"]);
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
              <textarea className="form-control" name="para" value={context} onChange={(e) => { setpara(e.target.value) }} id="exampleFormControlTextarea1" rows="3" placeholder="Paragraph"></textarea>
            </div>
            <div className="container mb-3">
              <h5 className='text-start'>Enter Question</h5>
              <input type="text" className="form-control" name="ques" value={question} onChange={(e) => { setques(e.target.value) }} id="exampleFormControlInput1" placeholder="Question" />
            </div>

            <div className="container mb-3">
              <input type="submit" className="btn btn-primary" value="Predict" />
            </div>

          </form>
          <div className="container my-3 ">
            <h5 className={`text-start ${attr}`}>{answer}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default System;
