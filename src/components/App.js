import React, { useState } from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import CrtEffect from './CrtEffect';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const App = () => {
  const [crtEnabled, setCrtEnabled] = useState(true);
  const toggleCrt = () => setCrtEnabled((enabled) => !enabled);

  return (
    <DataContext.Provider value={dataService}>
      <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />

        <Desktop />
        <Taskbar crtEnabled={crtEnabled} toggleCrt={toggleCrt} />
        <CrtEffect enabled={crtEnabled} />
      </ThemeProvider>
    </DataContext.Provider>
  );
};

export default App;
