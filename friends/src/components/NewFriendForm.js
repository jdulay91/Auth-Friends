import React, { Component } from "react";
import {axiosWithAuth} from '../utils/axiosAuth'


class NewFriendForm extends Component {
  state={
    friend:{
      name:'',
      age:'',
      email:''
    }
  }

  onChange = (e) => {
    this.setState({
      friend:{
        ...this.state.friend,
        [e.target.name]:e.target.value
      }
    })
  }


 onSubmit = (e) => {
   e.preventDefault()
   axiosWithAuth()
   .post('/friends',this.state.friend)
   .catch(err=>{
     console.log(err)
   })
   this.setState({
     friend:{
       name:'',
       age:'',
       email:''
     }
   })  
 }



  render(){
    return (
    <React.Fragment>
      <form onSubmit={this.onSubmit}>
        <label>
          name
          <input
          type='text'
          name='name'
          value={this.state.friend.name}
          onChange={this.onChange}
           />
        </label>
        <label>
          age
          <input
          type='text'
          name='age'
          value={this.state.friend.age}
          onChange={this.onChange}
           />
        </label>
        <label>
          email
          <input
          type='email'
          name='email'
          value={this.state.friend.email}
          onChange={this.onChange} />
        </label>
        <button>Add Friend</button>
      </form>
    </React.Fragment>
  );}
}
export default NewFriendForm;
