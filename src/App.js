import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProvideAuth from "./Context/ProvideAuth";
import Header from "./Components/Header/Header";
import Home from "./WebPages/HomePage/Home";
import Login from "./WebPages/LoginPage/Login";
import Registration from "./WebPages/RegistrationPage/Registration";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PageNotFound404 from "./WebPages/PageNotFound404/PageNotFound404";
import Footer from "./Components/Footer/Footer";
import About from "./WebPages/AboutUsPage/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/my-orders"></PrivateRoute>
          <PrivateRoute path="/manage-all-orders"></PrivateRoute>
          <Route path="/blog"></Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <PageNotFound404></PageNotFound404>
          </Route>
        </Switch>
        <Footer></Footer>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
