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
import DashBoard from "./WebPages/DashBoardPage/DashBoard";
import MyOrders from "./WebPages/MyOrdersPage/MyOrders";
import Blog from "./WebPages/BlogPage/Blog";
import Booking from "./WebPages/BookingPage/Booking";

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
          
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

          <PrivateRoute path="/viewDetails/:serviceId">
            <Booking></Booking>
          </PrivateRoute>

          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/registration">
            <Registration></Registration>
          </Route>

          <Route path="/login">
            <Login></Login>
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
