import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

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
          clientId="160139527198-prg182e9vstjvi5q0527h4si2jb081u8.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>

    );
  }
}

export default App;
