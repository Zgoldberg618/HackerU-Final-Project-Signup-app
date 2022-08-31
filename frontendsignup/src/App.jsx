import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

//creating a class based component
class App extends Component {
    constructor(){
        super()
        // state will hold all of the fields on the signup form 
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        // binding the methods
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //"setState" is a react function that changes the value of "state". 
    //so if a user inputs their info this event listener will change the original state to what they inputed 
    //(look below at "render()" and notice the onChange event handler)
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        //so it doesn't refresh the whole page after user signs up
        event.preventDefault()

        //once the user clicks "submit", the "onSubmit handler" will be triggered and will collect all of the values and save it in "registered"
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        //now from the frontend, send it to the backend using axios and the backend will send it to mongodb
        axios.post('http://localhost:4000/app/signup', registered)
            .then(res => console.log(res.data))

        // if there is a home page in the application we would apply
        // window.location = '/home'
        // but there isn't so instead  
        // we reset our "state" to what it originally was like this:     
        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })
    }

    render() { 
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;