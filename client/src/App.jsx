
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ROUTES } from './routes/ROUTES'

const router=createBrowserRouter(ROUTES)

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
