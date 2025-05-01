import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Microfrontend Demo
          </h1>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="text-gray-300 mb-4">
              Welcome to our Microfrontend demonstration. This project showcases
              the power and flexibility of microfrontend architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-green-400">
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Independent Deployment</li>
                  <li>Technology Agnostic</li>
                  <li>Scalable Architecture</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Benefits
                </h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Improved Development Speed</li>
                  <li>Better Team Autonomy</li>
                  <li>Enhanced Maintainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
