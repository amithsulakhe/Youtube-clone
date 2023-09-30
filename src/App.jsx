
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import appstore from './utils/appStore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watchlist from './components/Watchlist'
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
   {
    path:"/",
    element:<MainContainer/>
   },
   {
    path:"watch",
    element:<Watchlist/>
   }
    ]
  },
])
function App() {

  return (
    <>
      <div>
        <Provider store={appstore}>

        <Header/>
        <RouterProvider router={appRouter}>

        </RouterProvider>
        </Provider>

      </div>
      
    </>
  )
}

export default App
