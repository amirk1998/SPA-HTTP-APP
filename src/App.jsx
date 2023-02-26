import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './Layout/Layout';
import routes from './routes';
// 1.home => /
// 2.AboutUs => '/about-us'

function App() {
  return (
    <div>
      {/* <ToastContainer /> */}
      <Layout>
        <div className='bg-neutral-100 text-slate-900 flex flex-col items-center mx-8 p-8 font-[Montserrat]'>
          <Routes>
            {routes.map((route) => {
              return <Route {...route} key={crypto.randomUUID()} />;
            })}
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
