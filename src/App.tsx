import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { applyTheme, loadTheme, nextTheme } from './lib/theme';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import TrackPage from './pages/TrackPage';
import Practice from './pages/Practice';
import ProgressPage from './pages/ProgressPage';
import Search from './pages/Search';
import About from './pages/About';
import Glossary from './pages/Glossary';
import MixedQuiz from './pages/MixedQuiz';
import NotFound from './pages/NotFound';
import Session from './pages/Session';
import { PassageProvider } from './components/PassagePopup';

export default function App() {
  const [theme, setTheme] = useState(loadTheme);
  return (
    <PassageProvider>
    <div className="app">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <img src="./icon.svg" alt="" width={28} height={28} />
          <span>Apologetics Trainer</span>
        </NavLink>
        <nav>
          <NavLink to="/" end>Tracks</NavLink>
          <NavLink to="/practice">Practice</NavLink>
          <NavLink to="/progress">Progress</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track/:trackId" element={<TrackPage />} />
          <Route path="/topic/:topicId/*" element={<TopicPage />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/quiz" element={<MixedQuiz />} />
          <Route path="/today" element={<Session />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        “Always be prepared to give a defense to everyone who asks you the reason for the hope that is in you. But
        respond with gentleness and respect.” — 1 Peter 3:15
        <div className="footer-links"><NavLink to="/about">About and sources</NavLink> · <NavLink to="/glossary">Glossary</NavLink>
          <button
            className="theme-toggle"
            onClick={() => {
              const t = nextTheme(theme);
              applyTheme(t);
              setTheme(t);
            }}
          >
            Theme: {theme}
          </button>
        </div>
      </footer>
    </div>
    </PassageProvider>
  );
}
