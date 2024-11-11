import "../src/Components/LandingPage/Pages/Home.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/LandingPage/Navbar/Navbar"
import Footer from "./Components/LandingPage/Navbar/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
