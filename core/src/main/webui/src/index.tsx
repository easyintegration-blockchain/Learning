import React from 'react';
import {render} from "react-dom";
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App page="designer"/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);