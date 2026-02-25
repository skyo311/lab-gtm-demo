import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/';
import Product from './pages/product/';
import Cases from './pages/cases/';
import Security from './pages/security/';
import Trial from './pages/trial/';
import TrialThanks from './pages/contact/thanks';
import Contact from './pages/contact/';
import ContactThanks from './pages/contact/thanks';

export default function App() {
  return (
    <BrowserRouter basename="/lab/gtm-demo/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/" element={<Product />} />
          <Route path="/cases/" element={<Cases />} />
          <Route path="/security/" element={<Security />} />
          <Route path="/trial/" element={<Trial />} />
          <Route path="/trial/thanks/" element={<TrialThanks />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/contact/thanks/" element={<ContactThanks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
