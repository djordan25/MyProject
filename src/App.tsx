import { useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
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

const ICONS = {
  tracks: 'M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13ZM13 4h5.5c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5H13V4Z',
  practice: 'M4 6.5C4 5.1 5.1 4 6.5 4h7C14.9 4 16 5.1 16 6.5v4c0 1.4-1.1 2.5-2.5 2.5H9l-3.5 3v-3H6.5C5.1 13 4 11.9 4 10.5v-4ZM18 9h.5c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5H18v3l-3.5-3H11',
  progress: 'M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 12l7-7',
  search: 'M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM15.5 15.5 20 20',
};

const NAV = [
  { to: '/', label: 'Tracks', icon: ICONS.tracks, end: true },
  { to: '/practice', label: 'Practice', icon: ICONS.practice },
  { to: '/progress', label: 'Progress', icon: ICONS.progress },
  { to: '/search', label: 'Search', icon: ICONS.search },
];

export default function App() {
  const [theme, setTheme] = useState(loadTheme);
  // The daily session hides navigation so the learner can focus.
  const focus = useLocation().pathname === '/today';
  return (
    <PassageProvider>
    <div className={`app${focus ? ' focus' : ''}`}>
      <header className="topbar">
        <NavLink to="/" className="brand">
          <img src="./icon.svg" alt="" width={28} height={28} />
          <span>Apologetics Trainer</span>
        </NavLink>
        <nav className="topnav" aria-label="Main">
          {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>)}
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
      <nav className="tabbar" aria-label="Main">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end}>
            <svg viewBox="0 0 24 24" aria-hidden><path d={n.icon} /></svg>
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
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
