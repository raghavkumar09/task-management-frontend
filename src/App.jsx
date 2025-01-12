import Header from "./components/Header"
import Layout from "./layout"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import LoginPage from "./pages/Login/Login"
import Signup from "./pages/Signup/page"
import { UserProvider } from "./context/UserContext"
import AppRoutes from "./routes/AppRoutes"


function App() {

  return (
    <>
      <UserProvider>
         <AppRoutes />
      </UserProvider>
    </>
  )


}

export default App
