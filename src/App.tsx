import React, { useState } from 'react';
import HeaderCard from './components/HeaderCard';
import WalletCard from './components/WalletCard';
import QuickAccess from './components/QuickAccess';
import CourseCarousel from './components/CourseCarousel';
import BottomNav from './components/BottomNav';
import { user, walletBalance, quickAccessItems, courses, bottomNavItems } from './data';

const appStyles: React.CSSProperties = {
  maxWidth: 900,
  margin: '0 auto',
  paddingBottom: 80,
};

const bodyStyles: React.CSSProperties = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

const pullText: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 12,
  color: 'var(--muted)',
  padding: '10px 0 2px',
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div style={appStyles}>
      <HeaderCard user={user} />
      <p style={pullText}>Pull to refresh</p>
      <div style={bodyStyles}>
        <WalletCard balance={walletBalance} />
        <QuickAccess items={quickAccessItems} />
        <CourseCarousel courses={courses} />
      </div>
      <BottomNav items={bottomNavItems} activeId={activeTab} onSelect={setActiveTab} />
    </div>
  );
};

export default App;
