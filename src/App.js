import React, {Fragment} from 'react';
import Home from './components/Home';
import NotificationPush from './components/NotificationPush';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectOpenNotification } from './features/notificationSlice';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="notification/*" element={<NotificationPush />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
