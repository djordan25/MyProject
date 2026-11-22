import { forwardRef } from 'react';
import type { EdIconProps } from 'editorial-ui';
import styles from '@ed-icon-styles';
import { ICONS } from './iconRegistry';

// Same API and classes as EditorialUI's EdIcon, but resolving names from the app's icon registry
// instead of `import * as` the whole lucide set. Swapped in by an alias in vite.config.ts.
const SIZE = { xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl, '2xl': styles.size2xl };
const COLOR = {
  inherit: undefined, primary: styles.colorPrimary, muted: styles.colorMuted, faint: styles.colorFaint, brand: styles.colorBrand,
  success: styles.colorSuccess, warning: styles.colorWarning, danger: styles.colorDanger, inverse: styles.colorInverse,
};

export const EdIcon = forwardRef<SVGSVGElement, EdIconProps>(function EdIcon(
  { name, size = 'sm', color = 'inherit', label, className, ...rest },
  ref,
) {
  const Icon = ICONS[name as string];
  if (!Icon) {
    if (import.meta.env.DEV) console.warn(`EdIcon: "${String(name)}" is not in src/lib/iconRegistry.ts`);
    return null;
  }
  return (
    <Icon
      ref={ref}
      className={[styles.icon, SIZE[size], COLOR[color], className].filter(Boolean).join(' ')}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      focusable={false}
      {...(rest as object)}
    />
  );
});
