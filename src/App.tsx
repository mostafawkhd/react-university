import { Suspense, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import MainMenu from './MainMenu';
import { RouterProvider } from 'react-router-dom';
import useRouterProvider from './routes/useRouterProvider';

export const api=axios.create({
  baseURL:'http://localhost:8000'
})

function App() {
  const {routerProvider } = useRouterProvider();  
  return (
    <Suspense fallback={<div>Loading</div>}>
            <RouterProvider router={routerProvider()} />
          </Suspense>
  )
}

export default App
