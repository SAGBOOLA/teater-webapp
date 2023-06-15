import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './Components/Theme';
import StaffCalendar from './Components/StaffCalendar';
import MemberProfile from './MemberProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <MemberProfile />
      </ThemeProvider>
  </React.StrictMode>
);

