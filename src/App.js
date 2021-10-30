import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Manage from "./Components/Manage/Manage";
import MyOrders from "./Components/MyOrders/MyOrders";
import OrderDetails from "./Components/MyOrders/OrderDetails";
import Header from "./Components/Navbar/Header";
import NotFound from "./Components/NotFound/NotFound";
import DetailsView from "./Components/Services/DetailsView";
import AuthProvider from "./Contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>
          <Route path="/orderDetails/:id">
            <OrderDetails />
          </Route>
          <PrivateRoute path="/details/:id">
            <DetailsView />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
