import { Link } from 'react-router-dom';
import { EdButton, EdEmptyState, EdIcon } from 'editorial-ui';

export default function NotFound() {
  return (
    <section className="card">
      <EdEmptyState
        icon={<EdIcon name="Compass" size="xl" />}
        title="Page not found"
        body="That page doesn’t exist, or the link is out of date."
        actions={<EdButton asChild variant="primary"><Link to="/">Back to tracks</Link></EdButton>}
      />
    </section>
  );
}
