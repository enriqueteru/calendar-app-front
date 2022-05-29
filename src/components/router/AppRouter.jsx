import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Login from '../auth/LoginScreen';
import CalendarScreen from '../calendar/CalendarScreen';
import NotFound from '../ui/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
