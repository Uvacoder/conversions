import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import { MainPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
