import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsListPage from '../pages/NewsListPage/NewsListPage';
import NewsDetailPage from '../pages/NewsDetailPage/NewsDetailPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsListPage />,
  },
  {
    path: "/news/:id",
    element: <NewsDetailPage />,
  },
  {
    path: "*", 
    element: <NotFoundPage />,
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
