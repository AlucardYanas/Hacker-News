import { Routes, Route } from 'react-router-dom';
import NewsListPage from '../pages/NewsListPage/NewsListPage';
import NewsDetailPage from '../pages/NewsDetailPage/NewsDetailPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsListPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
    </Routes>
  );
};

export default App;
