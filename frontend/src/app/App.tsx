import React, { Fragment, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/login'));
const RegisterPage = lazy(() => import('../pages/register'));
const HeroesPage = lazy(() => import('../pages/heroes'));

const App = () => {
  return (
    <BrowserRouter>

      <AppRoutes />

    </BrowserRouter>
  )
}
const See = () => {
  return(
    <h1>sdsdfsdf</h1>
  )
}

const AppRoutes = () => {
  return (
    <Fragment>
      <div className="app_page">
        <Suspense fallback={<Fragment />}>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="see" element={<See/>} />
            <Route path="/" element={<HeroesPage/>} />
            <Route path="*" element={<LoginPage/>} />

          </Routes>
        </Suspense>
      </div>
    </Fragment>
  );
}

export default App;
