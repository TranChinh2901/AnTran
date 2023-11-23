import './App.css';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartItems from './components/Items/CartTwo';
import MenuContact from './components/list/menuList';
import Content from './components/Content/Content';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Background/>
      <Contact/>
      <Menu/>
      <div className='ContentH1'>
        <h1 className='AppH1'> Coffee Menu</h1>
      </div>
      <div className='cartWrap'>
      <Cart/>
      </div>
      <div className='Crossbar'></div>
      <div className='ContentH1'>
        <h1 className='AppH1'> MilkTea Menu</h1>
      </div>
      <div className='CartWrap'>
        <CartItems/>
      </div>
      <div className='Crossbar'></div>
      <div className='ContentH1'>
        <h1 className='AppH1'>Soft Drink</h1>
      </div>
      <div className='menulist'>
        <MenuContact/>
      </div>
      <div className='Crossbar'></div>
      <Content/>
      <Form/>
      <Footer/>


      
      
    </div>
  );
}

export default App;
