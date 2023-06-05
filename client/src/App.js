import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from "./components/Navbar";
// import NavBar from './Attendance/Navbar';
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/screens/Home";
import Signin from "./components/screens/SignIn";
//import Signin from "./Attendance/screens/Signin"
import Profile from "./components/screens/Profile";
//import Profile from "./Attendance/screens/Profile"
import Signup from "./components/screens/Signup2";
//import SignUp from './Attendance/screens/Signup';
import CreatePost from "./components/screens/CreatePost";
import { ScreenWrapper } from "./components";
//import AttenHome from "./Attendance/Home"
import { reducer, initialState } from "./reducers/userReducer";
import { CheckmarkIcon, Toast, Toaster } from "react-hot-toast";
import EmailVerification from "./components/screens/EmailVerification";
import SendMail from "./components/screens/auth/SendMail";
import VerifyEmail from "./components/screens/auth/VerifyEmail";
import ResetPassword from "./components/screens/auth/ResetPassword";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      {/* <Route path="/home">
        <AttenHome />
      </Route> */}
      <Route path="/result">
        <CreatePost />
      </Route>
      <Route path="/verify/:token">
        <EmailVerification />
      </Route>
      <Route path="/landing">
        <h1>Hello World Welcome to our voting system</h1>
      </Route>
      <Route path="/reset-password-verify/:token">
        <ResetPassword />
      </Route>
      <Route path="/sendmail">
        <SendMail />
      </Route>
      <Route path="/verifyemail">
        <VerifyEmail />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        {/* <Toaster /> */}
        <ScreenWrapper>
          <NavBar />
          <Routing />
        </ScreenWrapper>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
