import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Registration/Login/Login";
import Register from "./Pages/Registration/Registar/Register";
import Appointment from "./Appointment/Appoiontment/Appointment";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Registration/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/appointment'>
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashBoard />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='*'>
              <h1>Nothing page available..</h1>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
