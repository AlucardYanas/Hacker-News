import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface AppProviderProps {
  children: React.ReactNode;
}

// Создание темной темы
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',  // Чёрный фон
    },
    text: {
      primary: '#ffffff',  // Белый текст
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      {/* Оборачиваем приложение в ThemeProvider */}
      <ThemeProvider theme={darkTheme}>
        {/* CssBaseline сбрасывает стили и добавляет стандартные для темной темы */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default AppProvider;
