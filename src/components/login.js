import React, { Component } from 'react';
import {Link} from 'react-router'


var Login=React.createClass( {
   getInitialState:function(){
       return{
           userName:'',
           password:''
    }
   },
    updateUserName:function(e){        
        this.setState({userName:e.target.value})
    },
    updatePassword:function(e){        
        this.setState({password:e.target.value})
    },
    verifyUser:function(e){
        if(this.state.userName!=='rohit@gmail.com' || this.state.password!=='rohit')        
            {e.preventDefault();
            alert("Please enter appropriate email and password \n Hint : mentioned above the login button");
        }
    },
  render() {
    return (
      <div>
        
        
            <div className="col-md-offset-3 col-md-4">
                <h2>Login to your account</h2><hr />
                <div style={{marginTop:'20%'}} >
                    <div className="form-group row">
                        <label>Email address:</label>
                        <input type="text" className="form-control" placeholder="email address" onChange={this.updateUserName} value={this.state.userName}/>
                    </div><br/>
                    <div className="form-group row">
                        <label >Password:</label>
                        <input type="password" className="form-control" placeholder="password" onChange={this.updatePassword} value={this.state.password}/>
                    </div>
                    <br />
                    <br/>
                    <h5>Email : rohit@gmail.com</h5>
                    <h5>Password : rohit</h5>
                    <Link to="/Home" className="row">
                        <button className="btn btn-primary" onClick={this.verifyUser}>
                            Login
                        </button>
                    </Link>
                </div>
            
                </div>
                
      </div>
    );
  }
});

export default Login;
