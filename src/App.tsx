import type { ReactNode } from 'react';
import './App.css';

const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				padding: 5,
				margin: 5,
				width: 200,
				border: 1,
				borderColor: 'gray',
				borderRadius: 5,
			}}
		>
			{children}
		</div>
	);
};

const Row = ({ children }: { children: ReactNode }) => {
	return <div style={{ backgroundColor: 'red' }}>{children}</div>;
};

function App() {
	// jsx file
	// <>...</> fragment syntax
	return (
		<>
			<Container>
				<Row>
					<input type="text" placeholder="name" />
					<button>Save</button>
				</Row>
			</Container>
		</>
	);
}

export default App;
