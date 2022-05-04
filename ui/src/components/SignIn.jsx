import React, { Component } from 'react'

export default class SignIn extends Component {
  constructor() {
      super();
      this.state = {
          user: {
              signedIn: false,
              name: ""
          }
      }
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);
  }

  signIn() {
      this.setState({ user: { signedIn: true, name: 'User1' }})
  }

  signOut() {
      this.setState({ user: { signedIn: false, name: '' } })
  }
  
    render() {
        const isUserSignedIn = this.state.user.signedIn;
    return (
      <div>
          { !isUserSignedIn ? (
              <button onClick={this.signIn}>sign in</button>
          ) : (
              <button onClick={this.signOut}>sign out</button>
          )}
      </div>
    )
  }
}
