import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/site/home/page';
import About from './pages/site/about/page';
import Layout from './layouts/site/layout';
import AdminLayout from './layouts/admin/layout';

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
