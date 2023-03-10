import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';
import Footer from './components/Footer';
import Lubricants from './pages/Lubricants';
import CasstekPremium4t from './pages/productDetails/casstekPremium4T';
import CasstekMoto4T from './pages/productDetails/casstekMoto4T';
import CassgoldAdvanced from './pages/productDetails/cassgoldAdvanced';
import CassgoldPassenger from './pages/productDetails/cassgoldPassenger';
import CassgoldPower from './pages/productDetails/cassgoldPower';
import CassgoldSuper from './pages/productDetails/cassgoldSuper';
import CasstransDexD2 from './pages/productDetails/casstransDexD2';
import CasstransDexH3 from './pages/productDetails/casstransDexH3';
import CassturboHdForce from './pages/productDetails/cassturboHdForce';
import CassturboHdPlus from './pages/productDetails/cassturboHdPlus';
import CassturboHdSae from './pages/productDetails/cassturboHdSae';
import CassturboHdUltra from './pages/productDetails/cassturboHdUltra';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Lubricants' element={<Lubricants />} />
            <Route path='/CasstekPremium4T' element={<CasstekPremium4t />} />
            <Route path='/CasstekMoto4T' element={<CasstekMoto4T />} />
            <Route path='/CassgoldAdvanced' element={<CassgoldAdvanced />} />
            <Route path='/CassgoldPassenger' element={<CassgoldPassenger />} />
            <Route path='/CassgoldPower' element={<CassgoldPower />} />
            <Route path='/CassgoldSuper' element={<CassgoldSuper />} />
            <Route path='/CasstransDexD2' element={<CasstransDexD2 />} />
            <Route path='/CasstransDexH3' element={<CasstransDexH3 />} />
            <Route path='/CassturboHdForce' element={<CassturboHdForce />} />
            <Route path='/CassturboHdPlus' element={<CassturboHdPlus />} />
            <Route path='/CassturboHdSae' element={<CassturboHdSae />} />
            <Route path='/CassturboHdUltra' element={<CassturboHdUltra />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
