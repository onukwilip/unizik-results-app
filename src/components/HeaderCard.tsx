import React from 'react';
import { MenuDotsIcon } from './icons';
import type { User } from '../types';
import styles from './HeaderCard.module.css';

interface Props {
  user: User;
}

const HeaderCard: React.FC<Props> = ({ user }) => (
  <header className={styles.header}>
    <div className={styles.topRow}>
      <div className={styles.userInfo}>
        <div className={styles.avatar} />
        <div>
          <div className={styles.greeting}>Hi, {user.name}</div>
          <div className={styles.studentId}>{user.id}</div>
        </div>
      </div>
      <button className={styles.menuBtn} aria-label="Menu">
        <MenuDotsIcon />
      </button>
    </div>
    <div className={styles.divider} />
    <p className={styles.infoLine}>
      <span className={styles.infoLabel}>Faculty: </span>{user.faculty}
    </p>
    <p className={styles.infoLine}>
      <span className={styles.infoLabel}>Department: </span>{user.department}
    </p>
    <div className={styles.chips}>
      <span className={styles.chip}>{user.level}</span>
      <span className={styles.chip}>{user.type}</span>
      <span className={styles.chip}>Session: {user.session}</span>
      <span className={styles.chip}>Semester: {user.semester}</span>
    </div>
  </header>
);

export default HeaderCard;
