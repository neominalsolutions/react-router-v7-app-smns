import React, { Suspense } from 'react';

// Dahboard bir çok Grafik UI arayüze eklendiği sayfalarda bu tekniği çok kullanırız.
const LazyComponentDemo = React.lazy(
	() => import('../../../components/lazy.component')
);

function LazyLessonPage() {
	return (
		<Suspense fallback={<>... loading</>}>
			<LazyComponentDemo />
		</Suspense>
	);
}

// Not: Genelede sayfalar açılışta lazy yapılarak uygulamanın ilk yüklemesinde performans sağlanır. Fakat uzun süren data çeken componentler içinde lazy kullanılabilir.

export default LazyLessonPage;
