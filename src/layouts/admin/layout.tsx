import { Link, Outlet } from 'react-router';

function AdminLayout() {
	return (
		<div>
			<h1>Admin Layout</h1>
			<Link to="/admin">Dashboard</Link> |   <Link to="/">Home</Link>
			<br></br>
			{/* Outlet component will render the matched child route component here */}
			<Outlet />
		</div>
	);
}

export default AdminLayout;
