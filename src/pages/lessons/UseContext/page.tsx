import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme/theme.context';
import type { ThemeContextType } from '../../../contexts/theme/theme.state';

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
			{/* <ThemeProvider> */}
			<hr></hr>
			<ComponentOne />
			<hr></hr>
			<ComponentTwo />
			<hr></hr>
			<ComponentThree />
			{/* </ThemeProvider> */}
		</>
	);
}

export default UseContextDemoPage;
