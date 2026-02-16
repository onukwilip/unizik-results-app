import type { User, QuickAccessItem, Course, BottomNavItem } from './types';

export const user: User = {
  name: 'Onukwili',
  id: '2024934065',
  faculty: 'PHYSICAL SCIENCES',
  department: 'SOFTWARE ENGINEERING',
  level: '300 Level',
  type: 'REGULAR',
  session: '2025/2026',
  semester: 'first',
};

export const walletBalance = 'NGN 0.00';

export const quickAccessItems: QuickAccessItem[] = [
  { id: 'sug', label: 'SUG Election', icon: 'vote' },
  { id: 'result', label: 'Check Result', icon: 'result' },
  { id: 'register', label: 'Register Courses', icon: 'register' },
];

export const courses: Course[] = [
  { id: '1', name: 'ENGINEERING MOBILE', code: 'APPLICATIONS(NAU-SEN 309)' },
  { id: '2', name: 'DATA STRUCTURES AND', code: 'ALGORITHMS(NAU-SEN 301)' },
  { id: '3', name: 'OPERATING SYSTEMS', code: 'DESIGN(NAU-SEN 305)' },
  { id: '4', name: 'SOFTWARE PROJECT', code: 'MANAGEMENT(NAU-SEN 311)' },
  { id: '5', name: 'COMPUTER NETWORKS', code: 'FUNDAMENTALS(NAU-SEN 307)' },
  { id: '6', name: 'DATABASE SYSTEMS', code: 'ADVANCED(NAU-SEN 303)' },
];

export const bottomNavItems: BottomNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'fees', label: 'Fees', icon: 'fees' },
  { id: 'sgs', label: 'SGS', icon: 'sgs' },
  { id: 'result', label: 'Result', icon: 'result' },
  { id: 'course', label: 'Course', icon: 'course' },
];
