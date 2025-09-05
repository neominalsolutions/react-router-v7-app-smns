/* eslint-disable @typescript-eslint/no-explicit-any */
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

import About from './pages/site/about/page';
import Home from './pages/site/home/page';
import UseContextDemoPage from './pages/lessons/UseContext/page';
import { ThemeProvider } from './contexts/theme/theme.provider';
import { UseReducerPage } from './pages/lessons/useReducer/page';
import CustomHookLessonPage from './pages/lessons/customHook/page';
import React from 'react';
import LazyLessonPage from './pages/lessons/lazy/page';
import { getTodos } from './services/todo.service';
import { getUsers } from './services/user.service';
import TodosLessonPage from './pages/lessons/react-router-v7-features/Todos/page';
import TodoFormLessonPage, {
	TodoFormAction,
} from './pages/lessons/react-router-v7-features/TodoForm/page';
import ErrorPage from './pages/error';

const MemoPage = React.lazy(() => import('./pages/memoisation/Memo/page'));
const UseMemoPage = React.lazy(
	() => import('./pages/memoisation/UseMemo/page')
);

const UseCallbackPage = React.lazy(
	() => import('./pages/memoisation/UseCallback/page')
);

const HierarchycalComponentsPage = React.lazy(
	() => import('./pages/memoisation/HierarchycalComponents/page')
);

const MemoisationLayout = React.lazy(
	() => import('./layouts/memoisation/layout')
);

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
						<Link to="useContext">Use Context</Link>|
						<Link to="useReducer">Use Reducer</Link>|
						<Link to="customHook">Custom Hook</Link>|
						<Link to="reactLazy">React Lazy</Link>|
						<Link to="todos">Loader Data</Link>|
						<Link to="todosForm">Todos Form</Link>|
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
					{
						path: 'useReducer',
						Component: UseReducerPage,
					},
					{
						path: 'customHook',
						Component: CustomHookLessonPage,
					},
					{
						path: 'reactLazy',
						Component: LazyLessonPage,
					},
					{
						path: 'todos',
						Component: TodosLessonPage,
						loader: async () => {
							// Component veri hazır hale getirilmeden doma mount edilmez.
							// sayfa daha doma mounted edilmeden veri yükleme işlemin öncesinde yapar.
							// Birden fazla servsi buraya bağlayıp tek bir response olarak döndürebiliriz
							return { todos: await getTodos(), users: await getUsers() };
						},
						ErrorBoundary: ErrorPage,
						// errorElement: (
						// 	<div>Veri Yüklenirken sayfada bir hata meydana geldi!</div>
						// ),
					},
					{
						path: 'todos/:id/:name',
						Component: TodosLessonPage,
						loader: async (request: any) => {
							// id parametresine göre belki servise istek atıcam.
							console.log('sayfa load edilmeden ', request.params);
							// Component veri hazır hale getirilmeden doma mount edilmez.
							// sayfa daha doma mounted edilmeden veri yükleme işlemin öncesinde yapar.
							// Birden fazla servsi buraya bağlayıp tek bir response olarak döndürebiliriz
							return { todos: await getTodos(), users: await getUsers() };
						},
						ErrorBoundary: ErrorPage,
						// errorElement: (
						// 	<div>Veri Yüklenirken sayfada bir hata meydana geldi!</div>
						// ),
					},
					{
						path: 'todosForm',
						Component: TodoFormLessonPage,
						action: TodoFormAction,
						ErrorBoundary: ErrorPage,
					},
				],
			},
			{
				path: 'memoisation',
				Component: MemoisationLayout,
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
