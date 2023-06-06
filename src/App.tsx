import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import MainMenu from './MainMenu';

const api=axios.create({
  baseURL:'http://localhost:8000'
})

function App() {
  useEffect(()=>{
    fetch()
  },[])
  const fetch=async()=>{
    await api.get('/students/1/')
  }

  return (
    <>
    <MainMenu/>
    </>
  )
}

export default App
