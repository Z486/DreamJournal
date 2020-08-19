import React from 'react'
// import Signup from './signup.js'



class login extends React.Component{

    render(){
        return(
            <React.Fragment>
            <div className="title">my dream journal</div>
            <p>USERNAME</p>
            <input type="text" name="text"/>
            <p>PASSWORD</p>
            <input type="pasword" name="password"/>
            <button>Login</button>
            <button>Sign Up</button>
            </React.Fragment>
        )
    }

}

// class pressButton extends React.Component{
//     render(){
//         return(
//     

//         }    
//         )
//     }
// }
export default login