import React from 'react';
import { ThemeProvider } from '../features/theme';

function AppProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default AppProvider;
