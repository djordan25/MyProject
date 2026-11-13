import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import Practice from './pages/Practice';
import ProgressPage from './pages/ProgressPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <img src="./icon.svg" alt="" width={28} height={28} />
          <span>Apologetics Trainer</span>
        </NavLink>
        <nav>
          <NavLink to="/" end>Topics</NavLink>
          <NavLink to="/practice">Practice</NavLink>
          <NavLink to="/progress">Progress</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId/*" element={<TopicPage />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        “Always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do
        it with gentleness and respect.” — 1 Peter 3:15
      </footer>
    </div>
  );
}
