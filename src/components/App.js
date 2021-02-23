import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import NotesPg from "../pages/NotesPg";
import DrinksPg from "../pages/DrinksPg"
import VegPg from "../pages/VegPg"
import IndPg from "../pages/IndPg"

function App() {
  return (
    <div className="contain d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ width: "100%" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/recipe-notes" component={NotesPg} />
              <PrivateRoute path="/drinks" component={DrinksPg} />
              <PrivateRoute path="/veg" component={VegPg} />
              <PrivateRoute path="/ind" component={IndPg} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  )
}

export default App