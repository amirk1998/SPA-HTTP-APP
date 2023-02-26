import FullComment from './Pages/FullComment/FullComment';
import HomePage from './Pages/HomePage';
import NewComment from './Pages/NewComment/NewComment';
import NotFound from './Pages/NotFound';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/new-comment', element: <NewComment /> },
  { path: '/comment/:id', element: <FullComment /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
