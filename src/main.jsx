import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Services from './Services/Services.jsx'
import User from './User/User.jsx'
import Todo from './TodoApp/Todo.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='contact' element={<Contact />} />
     <Route path='services' element={<Services />} />
     <Route path='todo-app' element={<Todo />} />
     <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Provider store={store} >
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
