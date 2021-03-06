import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/project' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
