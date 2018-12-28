import React, { Component } from 'react'
import { auth, googleAuthProvider } from '../database/firebase'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    componentDidMount = () => {
        auth.onAuthStateChanged((currentUser) => {
            console.log('AUTH_CHANGE', currentUser)
            this.setState({
                currentUser
            })
        })
    }


    render() {
        return (
            <div>
                <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                    SignIn
                </button>
            </div>
        )
    }
}
