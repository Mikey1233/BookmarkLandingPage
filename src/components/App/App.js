import "./App.css";
// import Header from "./Header";
import Header from './HeaderComp/Header'
import Features from "./Features/Features";
import Downloads from "./DownloadsComp/Downloads";
import Faq from "./Faq/Faq";
import Footer from "./FooterComp/Footer";
function App() {
  return(
    <div className="wrapper">
      <Header/>
      <Features/>
      <Downloads/>
       <Faq/>
       <Footer/>
    </div>
  ) 
}
export default App;
