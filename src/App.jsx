import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home/Home';
import Cities from './views/Cities/Cities';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import PageNotFound from './views/PogeNotFound/PageNotFound';
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cities', element: <Cities /> },
  { path: '/404', element: <PageNotFound /> },
])
export default function App() {
 return (
 <RouterProvider router={router}/>

 ) }