import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router';
import AdminLayout from './layouts/admin/layout';
import Layout from './layouts/site/layout';
import ClassComponentLessonPage from './pages/lessons/classComponents/page';
import PropsLessonPage from './pages/lessons/Props/page';
import UseEffectLessonPage from './pages/lessons/useEffect/page';
import UseStateLessonPage from './pages/lessons/useState/page';
import About from './pages/site/about/page';
import Home from './pages/site/home/page';
import UseRefLessonPage from './pages/lessons/useRef/page';

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
						<Link to="usestate">useState Lesson</Link>|
						<Link to="useeffect">useEffect Lesson</Link>|
						<Link to="props">Props Lesson</Link> |
						<Link to="classComponents">Class Component Lesson</Link>|
						<Link to="useRef">Use Ref Hook</Link>
						<Outlet />
					</>
				),
				children: [
					{
						path: 'usestate',
						Component: UseStateLessonPage,
					},
					{
						path: 'useeffect',
						Component: UseEffectLessonPage,
					},
					{
						path: 'props',
						Component: PropsLessonPage,
					},
					{
						path: 'classComponents',
						Component: ClassComponentLessonPage,
					},
					{
						path: 'useRef',
						Component: UseRefLessonPage,
					},
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
