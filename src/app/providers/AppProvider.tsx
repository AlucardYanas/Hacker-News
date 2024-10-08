import { Provider } from 'react-redux';
import { store } from '../store/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface AppProviderProps {
  children: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',  
    },
    text: {
      primary: '#ffffff',  
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
  </Provider>
);

export default AppProvider;
