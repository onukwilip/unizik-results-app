export interface User {
  name: string;
  id: string;
  faculty: string;
  department: string;
  level: string;
  type: string;
  session: string;
  semester: string;
}

export interface QuickAccessItem {
  id: string;
  label: string;
  icon: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
}

export interface BottomNavItem {
  id: string;
  label: string;
  icon: string;
}
