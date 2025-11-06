
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, pass: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in a real app, this would be in a database
const MOCK_USERS: User[] = [
    { id: '1', name: 'Test User', email: 'user@test.com' }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('optimistics_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('optimistics_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('optimistics_user');
    }
  }, [user]);

  const login = async (email: string, pass: string): Promise<boolean> => {
    // This is a mock login. In a real app, you would make an API call.
    if (email === 'user@test.com' && pass === 'password') {
        const loggedInUser = MOCK_USERS[0];
        setUser(loggedInUser);
        return true;
    }
    const existingUser = MOCK_USERS.find(u => u.email === email);
    if(existingUser) { // for registered users
        setUser(existingUser);
        return true;
    }
    return false;
  };

  const register = async (name: string, email: string, pass: string): Promise<boolean> => {
    // Mock registration. In a real app, you'd check if the user exists and then create them.
    if (MOCK_USERS.find(u => u.email === email)) {
        return false; // User already exists
    }
    const newUser: User = { id: String(Date.now()), name, email };
    MOCK_USERS.push(newUser); // Add to our mock DB
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
