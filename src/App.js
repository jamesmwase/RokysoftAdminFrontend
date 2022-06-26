import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import UsersPage from './pages/admin/users';
import './assets/css/globals.css';
import './assets/css/overlay.css';
import './assets/css/dropdown.css';
import './assets/css/table.css';
import './assets/css/ant/modal.css';
import './assets/css/ant/header.css';
import './assets/css/ant/button.css';
import './assets/css/ant/input.css';
import { ManageUserPage } from './pages/admin/users/manage';
import 'antd/dist/antd.min.css';
import SigninPage from './pages/auth/signin';
import SignupPage from './pages/auth/signup';
import PortfolioPage from './pages/portfolio';

const About = lazy(() => import('./pages'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route axact path="/admin/users" element={<UsersPage />} />
        <Route axact path="/pages/users/manage" element={<ManageUserPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;