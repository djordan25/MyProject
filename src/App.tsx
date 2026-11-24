import { useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { EdAppBar, EdAppBarNav, EdAppBarNavItem, EdIcon, type EdIconName } from 'editorial-ui';
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
import Verses from './pages/Verses';
import Journal from './pages/Journal';
import Play from './pages/Play';
import Volley from './pages/Volley';
import SortGame from './pages/SortGame';
import TimelineGame from './pages/TimelineGame';
import BuildGame from './pages/BuildGame';
import TimelinePage from './pages/TimelinePage';
import Boss from './pages/Boss';
import Seal from './components/Seal';
import { PassageProvider } from './components/PassagePopup';
import XpToast from './components/XpToast';

const NAV: { to: string; label: string; icon: EdIconName }[] = [
  { to: '/', label: 'Home', icon: 'House' },
  { to: '/practice', label: 'Practice', icon: 'MessagesSquare' },
  { to: '/play', label: 'Play', icon: 'Gamepad2' },
  { to: '/progress', label: 'Progress', icon: 'ChartNoAxesColumn' },
  { to: '/search', label: 'Search', icon: 'Search' },
];

/** Home stays active while browsing a track or topic. */
const isActive = (to: string, path: string) =>
  to === '/'
    ? path === '/' || path.startsWith('/track') || path.startsWith('/topic') || path.startsWith('/boss')
    : to === '/practice'
      ? ['/practice', '/verses'].some((x) => path.startsWith(x))
      : to === '/play'
        ? ['/play', '/quiz'].some((x) => path.startsWith(x))
      : path.startsWith(to) || (to === '/progress' && path.startsWith('/journal'));

export default function App() {
  const [theme, setTheme] = useState(loadTheme);
  const path = useLocation().pathname;
  // The daily session hides navigation so the learner can focus.
  const focus = path === '/today';
  return (
    <PassageProvider>
      <div className={`app${focus ? ' focus' : ''}`}>
        <div className="appbar">
          <EdAppBar
            brand={
              <Link to="/" className="brand">
                <Seal size={24} />
                Apologetics Trainer
              </Link>
            }
            nav={
              <EdAppBarNav aria-label="Main">
                {NAV.map((n) => (
                  <EdAppBarNavItem key={n.to} asChild active={isActive(n.to, path)}>
                    <Link to={n.to}>{n.label}</Link>
                  </EdAppBarNavItem>
                ))}
              </EdAppBarNav>
            }
          />
        </div>
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
            <Route path="/verses" element={<Verses />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/play" element={<Play />} />
            <Route path="/play/volley" element={<Volley />} />
            <Route path="/play/sound-or-weak" element={<SortGame />} />
            <Route path="/play/timeline" element={<TimelineGame />} />
            <Route path="/play/build" element={<BuildGame />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/boss/:trackId/:section" element={<Boss />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <XpToast />
        <nav className="tabbar" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={isActive(n.to, path) ? 'active' : undefined} aria-current={isActive(n.to, path) ? 'page' : undefined}>
              <EdIcon name={n.icon} size="md" aria-hidden />
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>
        <footer className="footer">
          <p className="footer-verse">
            “Always be prepared to give a defense to everyone who asks you the reason for the hope that is in you. But respond
            with gentleness and respect.” <span className="mono">1 Pet 3:15</span>
          </p>
          <div className="footer-links">
            <NavLink to="/about">About and sources</NavLink>
            <NavLink to="/glossary">Glossary</NavLink>
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
