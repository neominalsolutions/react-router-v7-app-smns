import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router';
import Home from './pages/site/home/page';
import About from './pages/site/about/page';
import Layout from './layouts/site/layout';
import AdminLayout from './layouts/admin/layout';
import UseStateLessonPage from './pages/lessons/useState/page';

// import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: 'about',
				Component: About,
			},
			{
				path: 'lessons',
				Component: () => (
					<>
						<div>Lessons</div>
						<Link to="usestate">useState Lesson</Link>
						<br />
						<Link to="useeffect">useEffect Lesson</Link>
						<Outlet />
					</>
				),
				children: [
					{
						path: 'usestate',
						Component: UseStateLessonPage,
					},
					{},
				],
			},
		],
	},
	{
		path: '/admin',
		Component: AdminLayout,
		children: [
			{
				index: true,
				Component: () => <div>Dashboard</div>,
			},
			{},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
