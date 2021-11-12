import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Write from "./pages/Write";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/write' component={() => <Write />} />
        <Route path='/' component={Home} />
        <Route component={() => <div>Page Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
