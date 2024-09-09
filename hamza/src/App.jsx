import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import Products from "./components/Products";
import Showcase from "./components/Showcase";



const App = () => {
    return (
       <div>
           <Navigation />
           <Showcase />
           <Products/>
           <About/>
           <Footer/>
    
       </div>
    );
}; 

export default App;
