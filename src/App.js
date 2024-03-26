import {Switch,Route} from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Details from "./components/Details"
import Read from "./components/Read"
import ProtectedRoute from "./components/ProtectedRoute"

const App=()=>{
  return(
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/details/:id" component={Details} />
      <ProtectedRoute exact path="/read" component={Read} />
    </Switch>
  )
}

export default App;
