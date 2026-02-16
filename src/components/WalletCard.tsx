import React from 'react';
import styles from './WalletCard.module.css';

interface Props {
  balance: string;
}

const WalletCard: React.FC<Props> = ({ balance }) => (
  <div className={styles.card}>
    <span className={styles.label}>Wallet Balance</span>
    <span className={styles.amount}>{balance}</span>
  </div>
);

export default WalletCard;
