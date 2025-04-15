import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import User from './Components/User/User.jsx'
import Details from './Components/Details/Details.jsx'
// import Footer from './Components/Footer/Footer.jsx'

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


const router = createBrowserRouter([
  {path:'/', Component:Root,
    children:[
      {index:true, Component: Home},
      {path:'mobile', Component: Mobile},

      // not using suspense api
      // {path:'user' , loader:() => fetch('https://jsonplaceholder.typicode.com/users') ,Component: User}

      // using suspense api
      {path:'user' , element: <Suspense fallback={"Loading....."}>
        <User userPromise={userPromise}>
        </User>
      </Suspense>},

      // Dynamic Segments URL use cas
      {path:'/user/:userId', Component: Details, loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        
      },
    ]
  },





  // {path:'about', element:<div>i am about</div>},
  // {path:'app', Component:App}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
