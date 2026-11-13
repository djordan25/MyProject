import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="card">
      <h1>Page not found</h1>
      <Link to="/">Back to topics</Link>
    </section>
  );
}
