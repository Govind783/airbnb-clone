import './App.css';
import Home from './components/Home';
import TabsComp from "./Tabs";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SinglePage from './components/SinglePage';
import Checkout from './components/Checkout';



function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<>  <Home /> <TabsComp /> </>} />
            <Route path="/:id" element={<SinglePage />} />
            <Route path="/checkout/:id/:days" exact element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </main>



    </div>
  );
}

export default App;







