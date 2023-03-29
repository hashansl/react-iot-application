import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import "./App.css";
import Status from "./components/pages/status/Status";
import Devices from "./components/pages/devices/Devices";

Amplify.configure(awsconfig);

function App() {
  //   const [loggedIn, setLoggedIn] = useState(false);

  //   useEffect(() => {
  //     AssessLoggedInState();
  //   }, []);

  //   const AssessLoggedInState = () => {
  //     Auth.currentAuthenticatedUser()
  //       .then(() => {
  //         setLoggedIn(true);
  //       })
  //       .catch(() => {
  //         setLoggedIn(false);
  //       });
  //   };

  //   const signOut = async () => {
  //     try {
  //       await Auth.signOut();
  //       setLoggedIn(false);
  //     } catch (error) {
  //       console.log("Error sigining out");
  //       console.log(error);
  //     }
  //   };
  //   const onSignIn = () => {
  //     setLoggedIn(true);
  //   };

  return (
    <Router>
      <Navbar />

      {/* {loggedIn ? (
        <Button variant="contained" color="primary" onClick={signOut}>
          SignOut
        </Button>
      ) : (
        <Link to="/signin">
          <Button variant="contained" color="primary" onClick={signOut}>
            Sign In
          </Button>
        </Link>
      )} */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/devices" component={Devices} />
        {/* <Route path="/signin">
          <SignIn onSignIn={onSignIn}></SignIn>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
