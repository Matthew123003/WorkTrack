// /context/LoginContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Define the context value type
interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

// Create the context
const LoginContext = createContext<LoginContextType | undefined>(undefined);

// Create a provider component
export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: not logged in

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook to use the LoginContext
export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};
