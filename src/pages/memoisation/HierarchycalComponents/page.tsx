// Senaryo: Subdaki bir değişikliği Parenta aktarmamız lazım

// + A
     // + B
        // + C 

function Parent() {
	const ChildSubItemClickHandler = () => {
		console.log('SubItemClick-From Child');
	};

	return (
		<>
			<hr></hr>
			<p>Parent</p>
			<Child onSubItemClick={ChildSubItemClickHandler} />
			<hr></hr>
		</>
	);
}

function Child({ onSubItemClick }: { onSubItemClick(): void }) {
	const SubItemClickHandler = () => {
		console.log('SubItemClick');
		onSubItemClick();
	};

	return (
		<>
			<hr></hr>
			<p>Child</p>
			<Sub onItemClick={SubItemClickHandler} />
			<hr></hr>
		</>
	);
}

function Sub({ onItemClick }: { onItemClick(): void }) {
	return (
		<>
			<hr></hr>
			<p>Sub Component</p>
			<button onClick={onItemClick}>Item Click</button>
			<hr></hr>
		</>
	);
}

function HierarchycalComponentsPage() {
	return (
		<>
			<h2>HierarchycalComponentsPage</h2>
			<hr></hr>
			<Parent />
			<hr></hr>
		</>
	);
}

export default HierarchycalComponentsPage;
