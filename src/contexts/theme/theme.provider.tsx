import { useState, type ReactNode } from 'react';
import { darkThemeColor, lighThemeColor, type ThemeState } from './theme.state';
import { ThemeContext } from './theme.context';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	// bu state diğer componentler için ortak kullanılan bir state
	const [state, setState] = useState<ThemeState>({
		isDark: false,
		color: lighThemeColor,
	});

	const onRefresh = () => {
		const jsonString = localStorage.getItem('themeState');

		if (jsonString) {
			const themeState = JSON.parse(jsonString);
			setState({ ...themeState });
		}
	};

	// setState
	const toggle = () => {
		state.isDark = !state.isDark;
		state.color = state.isDark ? darkThemeColor : lighThemeColor;
		setState({ ...state });
		// persist ettik.
		localStorage.setItem('themeState', JSON.stringify(state));
	};

	const values = {
		state, // güncel state
		toggle, // setState
		onRefresh,
	};

	// values ile children arasında ThemeContext.Provider üzerinden verinin taşınması için ThemeContext.Provider value tanımlası yaptık

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};
