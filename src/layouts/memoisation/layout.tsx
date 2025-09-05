import { Link, Outlet } from 'react-router';

function MemoisationLayout() {
	return (
		<>
			<Link to="memo">React.Memo</Link>
			{'|'}
			<Link to="useMemo">UseMemo</Link>
			{'|'}
			<Link to="useCallback">UseCallback</Link>
			{'|'}
			<Link to="hierarchycal">Hierarchycal Component</Link>

			<Outlet />
		</>
	);
}

export default MemoisationLayout;
