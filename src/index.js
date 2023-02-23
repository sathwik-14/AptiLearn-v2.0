import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './admin/index';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import TestStart  from './test';
import LeaderBoard from './leaderboard';
import Session from './session';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<App/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/test" element={<TestStart/>}/>
<Route path="/lb" element={<LeaderBoard/>}/>
<Route path="/test/session" element={<Session/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
