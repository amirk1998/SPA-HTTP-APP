import FullCommentPage from './Pages/FullCommentPAge';
import HomePage from './Pages/HomePage';
import NewCommentPage from './Pages/NewComment';
import NotFound from './Pages/NotFound';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/new-comment', element: <NewCommentPage /> },
  { path: '/comment/:id', element: <FullCommentPage /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
