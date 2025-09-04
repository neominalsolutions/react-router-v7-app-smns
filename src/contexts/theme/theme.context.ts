import { createContext } from 'react';
import type { ThemeContextType } from './theme.state';

export const ThemeContext = createContext<ThemeContextType | null>(null);
