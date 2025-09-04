/* eslint-disable react-refresh/only-export-components */
// Component arası state paylaşımı ContextAPI üzerinden yapıyoruz.

import { createContext, useContext, useState, type ReactNode } from 'react';

// 0. Adım State ve ContextType tanımları
// 1.Adım Context
// 2.Adım provider Tanımı
// 3.Adım Component içerisinde useContext ile bağlanmak

// Senaryo: ThemeContext => dark ve light theme seçenekleri olsun. Bu context kullanan componentlerde tema ayarlarını global olarak yöntemi

{
	/* <A /> <B /> */
}

// { children }: { children: ReactNode } children props

{
	/* <A>
    <B></B>
</A> */
}

// useState,useEffect, useRef, useLayoutEffect, useMemo, useCallback, useReducer, custom (useFetcher)

type ThemeColor = {
	bgColor: string;
	color: string;
};

const darkThemeColor: ThemeColor = {
	bgColor: 'black',
	color: 'white',
};

const lighThemeColor: ThemeColor = {
	bgColor: 'white',
	color: 'black',
};

type ThemeState = {
	isDark: boolean;
	color: ThemeColor;
};

export type ThemeContextType = {
	// tema değiştirmek için kullanılacak context tipi
	state: ThemeState; // temanın güncel stati
	toggle(): void; // light yada dark temaya geçiş
	onRefresh(): void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
// Not: provider içerisine tanımlı olan children componentlere ilgili global state aktarmamızı sağlayan servis yapıları
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

function ComponentOne() {
	console.log('ComponentOne Rendered');
	// publisher
	// setState
	const { toggle } = useContext(ThemeContext) as ThemeContextType;

	return (
		<>
			<button onClick={() => toggle()}>Tema Değiştir</button>
		</>
	);
}

function ComponentTwo() {
	console.log('ComponentTwo Rendered');
	//listener
	// güncel state
	// props olmadan componentler birbireleri haberleşsin diye var.
	const { state } = useContext(ThemeContext) as ThemeContextType;

	return (
		<>
			<p style={{ background: state.color.bgColor, color: state.color.color }}>
				Deneme
			</p>
		</>
	);
}

// useContext bağlanmayıp dinlemen componentler yeniden re-render olmaz.
function ComponentThree() {
	console.log('ComponentThree Rendered');
	return <>Component Three</>;
}

function UseContextDemoPage() {
	return (
		<>
			<hr></hr>
			<ComponentOne />
			<hr></hr>
			<ComponentTwo />
			<hr></hr>
			<ComponentThree />
		</>
	);
}

export default UseContextDemoPage;
