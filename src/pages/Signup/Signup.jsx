import { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image } from "react-bootstrap";

const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="container">
      <Card className="signUpCard">
        <div className="header">
          <div className="logo"></div>
          <h1>Sign Up</h1>
        </div>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
        <div>
          
        </div>
      </Card>
    </main>
  );
};

export default Signup;
