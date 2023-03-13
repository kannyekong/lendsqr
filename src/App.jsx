import { Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import UserDetails from "./Pages/user_details";
import NotFound from "./Pages/notFound";
import "./App.css";

function App() {
  return (
    <Switch>
      {/* PAth to login page */}
      <Route path="/" exact>
        <Login />
      </Route>

      {/* Path to dashboard */}
      <Route path="/dashboard/users" exact>
        <Dashboard />
      </Route>

      {/* path to user details */}
      <Route path="/dashboard/users/user_details" exact>
        <UserDetails />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
