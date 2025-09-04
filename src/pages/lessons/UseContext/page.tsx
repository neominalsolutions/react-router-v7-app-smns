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
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
// Not: provider içerisine tanımlı olan children componentlere ilgili global state aktarmamızı sağlayan servis yapıları
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	// bu state diğer componentler için ortak kullanılan bir state
	const [state, setState] = useState<ThemeState>({
		isDark: false,
		color: lighThemeColor,
	});

	// setState
	const toggle = () => {
		state.isDark = !state.isDark;
		state.color = state.isDark ? darkThemeColor : lighThemeColor;
		setState({ ...state });
	};

	const values = {
		state, // güncel state
		toggle, // setState
	};

	// values ile children arasında ThemeContext.Provider üzerinden verinin taşınması için ThemeContext.Provider value tanımlası yaptık

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

function ComponentOne() {
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

function UseContextDemoPage() {
	return (
		<>
			<ThemeProvider>
				<hr></hr>
				<ComponentOne />
				<hr></hr>
				<ComponentTwo />
			</ThemeProvider>
		</>
	);
}

export default UseContextDemoPage;
