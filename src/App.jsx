import { Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import DashboardDetails from "./Pages/dashboard_details";
import "./App.css";

function App() {
  return (
    <Switch>
      {/* PAth to login page */}
      <Route path="/" exact>
        <Login />
      </Route>

      {/* Path to dashboard */}
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>

      {/* path to user details */}
      <Route path="/user_details" exact>
        <DashboardDetails />
      </Route>
    </Switch>
  );
}

export default App;
