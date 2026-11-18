import { EdCircularProgress } from 'editorial-ui';

/** Topic readiness as EditorialUI's circular progress, with the percentage inside. */
export default function ReadinessRing({ value, label, size = 'lg' }: { value: number; label: string; size?: 'md' | 'lg' }) {
  return <EdCircularProgress percent={Math.round(value * 100)} size={size} tone="brand" showValue label={`${label} readiness`} />;
}
