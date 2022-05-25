import React from "react";
import axios from "axios";

export default class system extends React.Component {
  
  state={
    context:'',
    question:''
  };

  handleChange = event =>{
      this.setState({
          context:event.target.value,
          question:event.target.value,
    });
  };

  handleSubmit = event =>{
    event.preventDefault();
    const user = {
        context:this.state.context,
        question:this.state.question
    }

    axios.post('https://hindi-qa.herokuapp.com/',{user})
    .then(res=>{
        console.log(res);
        console.log(res.data);
    });

    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="para" value="context"  placeholder='paragraph'></input> <br/> <br/>
                <input type="text" name="ques" value="question"  placeholder='question'></input> <br/> <br/>
                <button type="submit">Predict</button>
            </form>
        )    
    }

  }
