import React from "react";
import ReactDOM from "react-dom/client";
import Header from 'Microfrontend_Demo/Header'
import Footer from 'Microfrontend_Demo/Footer'
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
  <div className="mt-10 text-3xl  h-screen">
      <Header/>
    <h1 className="">Demo@</h1>
    <Footer/>
  </div>
  </ErrorBoundary>
);
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(  
<BrowserRouter>
  <App />
</BrowserRouter>
)