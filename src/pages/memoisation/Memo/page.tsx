import React from 'react';
import { ChildMemo } from '../../../components/child.memo';

// Sayfalar içerisinde componentler memoize edilebilir.
// Bu, özellikle büyük uygulamalarda performans iyileştirmesi sağlar.
// Memoization, bir bileşenin props'ları değişmediği sürece yeniden render edilmesini engeller.
// Page içinde state değiştiğinde sadece state'e bağlı componentler render edilir.

function MemoPage() {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h1>Memo Page</h1>
			<ChildMemo title="title-1" />
			<button onClick={() => setCount(count + 1)}>
				Increment Count: {count}
			</button>
		</div>
	);
}

export default MemoPage;
