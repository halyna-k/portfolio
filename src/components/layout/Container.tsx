import type { ElementType, ReactNode } from 'react';

export default function Container({ as: Tag = 'div', className = '', children}: { as?: ElementType; className?: string; children: ReactNode }) {
  return <Tag className={`px-6 md:px-10 lg:px-16 ${className}`}>{children}</Tag>;
}
