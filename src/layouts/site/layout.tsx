import { Link, Outlet } from 'react-router';

// ikinci bir dosya dışarı çıkılacak ise named export kullanılır.
export function A() {
	return <></>;
}

function Layout() {
	return (
		<>
			<h1>Layout</h1>
			<Link to="/">Home</Link> | <Link to="/about">About</Link>|{' '}
			<Link to="/admin">Admin</Link>| <Link to="/lessons/">Lessons</Link>|{' '}
			<Link to="/memoisation/">Memoisation</Link>
			<hr />
			<main>
				<Outlet />
			</main>
		</>
	);
}
export default Layout;

// 2.export işlemi ise default olarak yapılmıştır. Bu, bu bileşenin başka dosyalarda import edilmesini sağlar.
// sadece bir tane export edilecekse default kullanılır.
