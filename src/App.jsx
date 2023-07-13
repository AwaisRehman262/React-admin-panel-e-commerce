// import './App.css'
import './index-admin-panel.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LeftBar } from './components/AdminPanel/LeftBar/LeftBar.jsx'
import { UsersPanel } from './components/AdminPanel/UsersPanel/UsersPanel'
import { ProductsPanel } from './components/AdminPanel/ProductsPanel/ProductsPanel'
import { ECommerce } from './components/ECommerce/ECommerce'
import { Cart } from './components/ECommerce/Body/Cart/Cart'

function App() {

  return (
    <BrowserRouter>
        
      <Routes>
        <Route path='/' element={<UsersPanel />} />
        <Route path="/ECommerce" element={[<ECommerce/>,<Cart />]} />
        <Route path="/UsersPanel" element={[<LeftBar />, <UsersPanel />]} />
        <Route path="/ProductsPanel" element={[<LeftBar />,<ProductsPanel />]} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
