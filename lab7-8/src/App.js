import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Main from './main';
import Catalog from './catalog';
import CreateCar from './createcar';
import EditCar from './editcar';
import UpdateCar from './updatecar';
import { CarContext } from './carcontext';
import { CarProvider } from './carcontext';

function App() {
  return (
    <CarProvider>
      <Router>
        <div id="root">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/create" element={<CreateCar />} />
              <Route path="/edit" element={<EditCar />} />
              <Route path="/edit/:id" element={<UpdateCar />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CarProvider>
  );
}

export default App;
