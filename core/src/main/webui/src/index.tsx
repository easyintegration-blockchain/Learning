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
      <Route path="kamelets-page" element={<App page="kamelets"/>} />
      <Route path="components-page" element={<App page="components"/>} />
      <Route path="eip-page" element={<App page="eip"/>} />
      <Route path="builder" element={<App page="builder"/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);