import React from 'react';
import history from './history';
import {isLoggedIn} from '../actions';
import {connect} from 'react-redux';


class Login extends React.Component{

    state={
        username:'',
        password:''
    }
    valueChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
  
    };
    onSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state.username);
         //console.log(this.state.password);
        if(this.state.username==="admin" && this.state.password==='infeedo'){
            this.props.isLoggedIn(true);
            history.push('/HomePage')
        }else{
            //console.log('false')
            alert('Please enter correct username and password')
            this.setState({username:'',password:''})
            this.props.isLoggedIn(false);
        
        }
    }

    render() {
        return(
        <div>
        <form className="ui form"style={{width:'80vw',padding:'1rem'}} onSubmit={this.onSubmit}>
            
        <label><h3>Username:</h3></label><br/>
        <input type="text" name="username" value = {this.state.username} onChange={this.valueChange}autoComplete="off"/><br/><br/>
        <label><h3>Password:</h3></label><br/>
        <input type="text" name="password" value = {this.state.password} onChange={this.valueChange}autoComplete="off"/><br /><br/>
        
        <input className="ui button primary" type="submit" value="Submit"/><br/><br/>
        </form>
        </div>  
        )
    }
}
export default  connect(null,{isLoggedIn})(Login);
