import React from 'react';
import { VoteIcon, ResultIcon, RegisterIcon } from './icons';
import type { QuickAccessItem } from '../types';
import styles from './QuickAccess.module.css';

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  vote: VoteIcon,
  result: ResultIcon,
  register: RegisterIcon,
};

interface Props {
  items: QuickAccessItem[];
}

const QuickAccess: React.FC<Props> = ({ items }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>Quick Access</h2>
    <div className={styles.grid}>
      {items.map((item) => {
        const Icon = iconMap[item.icon] || VoteIcon;
        return (
          <button key={item.id} className={styles.tile} aria-label={item.label}>
            <Icon className={styles.tileIcon} />
            <span className={styles.tileLabel}>{item.label}</span>
          </button>
        );
      })}
    </div>
  </section>
);

export default QuickAccess;
