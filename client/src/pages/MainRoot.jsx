import Footer from "../components/Footer"
import Header from "../components/Header"
import {Outlet} from "react-router-dom"

const MainRoot = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainRoot