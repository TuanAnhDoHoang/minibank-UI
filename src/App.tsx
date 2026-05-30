import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css"
import Register from "./components/Register/Register";
//component
const App = () => {
  return (
    <div className="app">
      <Header/>
      {/* <Login/> */}
      <Register/>
      <Footer/>
    </div>
  )
}
export default App;