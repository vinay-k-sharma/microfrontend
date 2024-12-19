import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
  <div className="mt-10 text-3xl  h-screen">
    <Header/>
    <h1>Microfrontend Demo</h1>
    <Footer/>
  </div>
);
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
