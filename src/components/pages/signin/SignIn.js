import { TextField } from "@material-ui/core";
import React from "react";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      history.push("/home");
      onSignIn();
    } catch (error) {
      console.log("sign In Error");
    }
  };
  return (
    <div className="signin">
      <TextField
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button id="signInButton" color="primary" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
