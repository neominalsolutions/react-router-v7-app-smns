import { useContext, useLayoutEffect } from 'react';
import { Link, Outlet } from 'react-router';
import {
	ThemeContext,
	type ThemeContextType,
} from '../../pages/lessons/UseContext/page';

// ikinci bir dosya dışarı çıkılacak ise named export kullanılır.
export function A() {
	return <></>;
}

function Layout() {
	const { onRefresh } = useContext(ThemeContext) as ThemeContextType;

	// eğer localstorage persist edilmiş bir state varsa sayfa refreshledndiğinde ilk olarak layout componentlere düşer. burada ilgili state set ediyoruz. Layout altındaki tüm childlarda state uygulanmış olsun

	// Not: Tema bazlı işlemlerde rek ve tem değişimleri için useEffect yerine useLayout Effect kullanalım.
	useLayoutEffect(() => {
		console.log('onRefresh....');
		onRefresh();
		// mounted olduğunda
	}, []);

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
