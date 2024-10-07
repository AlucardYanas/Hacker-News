import ReactDOM from 'react-dom/client'; 
import AppProvider from './app/providers/AppProvider';
import App from './app/App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AppProvider>
      <App />
    </AppProvider>
  );
}
