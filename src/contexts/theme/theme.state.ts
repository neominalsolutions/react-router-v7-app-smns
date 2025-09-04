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

export type ThemeColor = {
	bgColor: string;
	color: string;
};

export const darkThemeColor: ThemeColor = {
	bgColor: 'black',
	color: 'white',
};

export const lighThemeColor: ThemeColor = {
	bgColor: 'white',
	color: 'black',
};

export type ThemeState = {
	isDark: boolean;
	color: ThemeColor;
};

export type ThemeContextType = {
	// tema değiştirmek için kullanılacak context tipi
	state: ThemeState; // temanın güncel stati
	toggle(): void; // light yada dark temaya geçiş
	onRefresh(): void;
};
