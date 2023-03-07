import { Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import DashboardDetails from "./Pages/dashboard_details";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>

      {/* GETTING STARTED ONE Routes */}
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>

      {/* GETTING STARTED TWO Routes */}
      <Route path="/user_details" exact>
        <DashboardDetails />
      </Route>
    </Switch>
  );
}

export default App;
