import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
// import { Header } from './Header';
// import { About } from './About';

// import { Redirect } from './Redirect';
// import { UserDetail } from './UserDetail';
// import { NotFound } from './404';
import App from '../App';
import { Home } from './Home';
import { About } from './About';
import { NotFound } from './404';
import { User } from './User';
import { Error } from './Error';
import { Redirect } from './Redirect';
import { UserDetail } from './UserDetail';
import { Comment } from './Comment';

//ver1
// export const Router = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/redirect" element={<Redirect />} />
//           <Route path="/user/:id" element={<UserDetail />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

//ver2
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      { path: '', element: <Home />, errorElement: <Error /> },
      {
        path: 'about',
        element: <About />,
      },
      { path: 'redirect', element: <Redirect></Redirect> },
    ],
  },
  {
    path: '/user',
    element: <App />,
    children: [
      {
        path: '',
        element: <User />,
      },
      {
        path: ':id',
        element: <UserDetail />,
        children: [
          {
            path: 'comment',
            element: <Comment></Comment>,
          },
        ],
      },
    ],
  },
]);
export default Router;
