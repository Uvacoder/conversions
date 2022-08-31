import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const Footer = () => {
  return (
    <footer className="mt-auto bg-white px-4 py-2 shadow-lg">
      <div className="container flex flex-col gap-2 items-start mx-auto max-w-[900px] ">
        <div className="text-stone-700">Илья Судаков - @ilyasudakov</div>
        <div className="flex gap-4 text-blue-700 underline text-center">
          <a href="https://github.com/ilyasudakov">Github↗️</a>
          <a href="https://ilyasudakov.vercel.app">Портфолио↗️</a>
        </div>
      </div>
    </footer>
  );
};
