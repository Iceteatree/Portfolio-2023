'use client';

import { createContext, ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: Props) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
