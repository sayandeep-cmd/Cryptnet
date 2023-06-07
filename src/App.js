
import './App.css'
import Footer from './Common/Footer/Footer';
import OnlyNavbar from './Common/Header/Navbar';
import Home from './Common/Home/Home';
import About from './Component/About/About';
import Counter from './Component/Counter/Counter';
// import Navbar from './Common/Header/Navbar';
import Login from '../src/Component/Authentication/Login/Login'
import Register from '../src/Component/Authentication/Register/Register'
import Routing from './Routing';
import FAQ from './Component/FAQ/FAQ';
import Test from '../src/Test'
import News from './Component/News/News';
import CoinInfo from './Component/Coindetail/Chart';
import Chart from './Component/Coindetail/Chart';
import HistoryChart from './Component/Coindetail/Chart';

function App() {
  return (
    <div className="App">
      {/* <OnlyNavbar/>
      <Home/>
      
      <About/>
      <Counter/>
      <Footer/>
      <Login/> */}
      <Routing/>
      {/* <Test/> */}
      {/* <News/> */}
      {/* <FAQ/> */}
      {/* <Register/> */}
      {/* <CoinInfo/> */}
      {/* <Chart/> */}
      {/* <HistoryChart/> */}
      
    </div>
  )
}

export default App;
