import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Home';
import Bookdetail from './componants/Bookdetail/bookdetail';
import Favoritebook from './componants/Favoritebook/Favoritebook';
import './App.css'

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/Bookdetail/:bookSingle",
    element:<Bookdetail/>,
  },
  {
    path:"/Favoritebook",
    element:<Favoritebook/>,
  },

]);
return (
  <div>
        <RouterProvider router={router} />
  </div>
)

}

export default App
