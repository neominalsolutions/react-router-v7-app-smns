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
import UseRefLessonPage from './pages/lessons/useRef/page';
import UseStateLessonPage from './pages/lessons/useState/page';
import HierarchycalComponentsPage from './pages/memoisation/HierarchycalComponents/page';
import MemoPage from './pages/memoisation/Memo/page';
import UseCallbackPage from './pages/memoisation/UseCallback/page';
import UseMemoPage from './pages/memoisation/UseMemo/page';
import About from './pages/site/about/page';
import Home from './pages/site/home/page';
import UseContextDemoPage from './pages/lessons/UseContext/page';
import { ThemeProvider } from './contexts/theme/theme.provider';

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
						<Link to="useRef">Use Ref Hook</Link>|
						<Link to="useContext">Use Context</Link>
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
					{
						path: 'useContext',
						Component: UseContextDemoPage,
					},
				],
			},
			{
				path: 'memoisation',
				Component: () => (
					<>
						<Link to="memo">React.Memo</Link>
						{'|'}
						<Link to="useMemo">UseMemo</Link>
						{'|'}
						<Link to="useCallback">UseCallback</Link> <Outlet />
						{'|'}
						<Link to="hierarchycal">Hierarchycal Component</Link>
					</>
				),
				children: [
					{
						path: 'memo',
						Component: MemoPage,
					},
					{
						path: 'useMemo',
						Component: UseMemoPage,
					},
					{
						path: 'useCallback',
						Component: UseCallbackPage,
					},
					{
						path: 'hierarchycal',
						Component: HierarchycalComponentsPage,
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

// Aşağıdaki gibi uygulamadaki tüm sayfalardan context'in son güncel değerine erişmek istersek o zaman uygulamanın en dışına sarmallama yaparız.
// Not: Uygulama tarayıcıdan refresh edildiğinde global state, context yeniden oluşur. güncel state kaybolur.
createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<RouterProvider router={router} />
	</ThemeProvider>
);
