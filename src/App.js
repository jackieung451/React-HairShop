import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Homes from "./pages/Homes";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
// import ImageSlider from "./components/ImageSlider";
// import { SliderData } from "./data/SliderData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      {/* <ImageSlider slides={SliderData} /> */}
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about-us" exact component={About} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
