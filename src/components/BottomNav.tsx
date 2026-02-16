import React from 'react';
import { DashboardIcon, FeesIcon, SgsIcon, NavResultIcon, CourseIcon } from './icons';
import type { BottomNavItem } from '../types';
import styles from './BottomNav.module.css';

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  dashboard: DashboardIcon,
  fees: FeesIcon,
  sgs: SgsIcon,
  result: NavResultIcon,
  course: CourseIcon,
};

interface Props {
  items: BottomNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

const BottomNav: React.FC<Props> = ({ items, activeId, onSelect }) => (
  <nav className={styles.nav} aria-label="Main navigation">
    {items.map((item) => {
      const Icon = iconMap[item.icon] || DashboardIcon;
      const isActive = item.id === activeId;
      return (
        <button
          key={item.id}
          className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
          onClick={() => onSelect(item.id)}
          aria-label={item.label}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon />
          <span className={styles.navLabel}>{item.label}</span>
        </button>
      );
    })}
  </nav>
);

export default BottomNav;
