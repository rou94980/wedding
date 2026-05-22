import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import HomePage from '../pages/HomePage';
import SeatSearchPage from '../pages/SeatSearchPage';

export default function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seat-search" element={<SeatSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

