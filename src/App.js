import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    
    
    const fetchdata = () => {
        
        axios.get("https://www.boredapi.com/api/activity")
        .then((res)=>{
            console.log(res);
        })
        
    }
    const user = {
        context:"my name is mayur",
        question:"what is my name"
    }

    const createpost = ()=>{
       
        axios.post('https://hindi-qa.herokuapp.com/',user)
            .then((res)=>{
                console.log(res.data)
            })
    }
    return(
        <>
        <div className='container my-3'>
        <form>
            <div className="mb-3">
                <label className="form-label">context</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">.</div>
            </div>
            <div className="mb-2">
                <label  className="form-label">question</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={createpost}>Submit</button><br/><br/>
            <button type="submit" className="btn btn-primary" onClick={fetchdata}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default App;
