import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './App.css';

class App extends Component {

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    return (
      <div className="App">
        <GoogleLogin
          clientId="799799953276-e3g5t7gp4g1hr08lp03deabqu0js43th.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

        <FacebookLogin
          appId="289982788274488"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook} />
      </div>

    );
  }
}

export default App;
