import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import InternationalWIP from "./pages/InternationalWIP.jsx";
import WorkInProgressGate from './components/WorkInProgressGate.jsx';


const hostname = window.location.hostname;

const isIT =
  hostname === "nutritionspiral.it" ||
  hostname === "www.nutritionspiral.it";

const isCOM =
  hostname === "nutritionspiral.com" ||
  hostname === "www.nutritionspiral.com";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isCOM ? (
      <InternationalWIP />
    ) : isIT ? (
      <WorkInProgressGate>
        <App />
      </WorkInProgressGate>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
