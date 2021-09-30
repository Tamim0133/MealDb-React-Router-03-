import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../src/Contact_Us/Contact";
import "./App.css";
import About from "./Components/About-us/About";
import Carousel from "./Components/Carousel/Carousel";
import Header from "./Components/Header/Header";
import Navlink from "./Components/Links/Navlink";
import MealDetails from "./Components/MealDetails/MealDetails";
import NotFound from "./Components/Not_Found/NotFound";

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Navlink />
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path="/home">
            <Carousel></Carousel>
          </Route>
          <Route exact path="/">
            <Carousel></Carousel>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/mealDetails/:idMeal">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
