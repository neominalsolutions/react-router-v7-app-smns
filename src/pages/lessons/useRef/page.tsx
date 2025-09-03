// useRef hook ile elementin referansını almak ve mutable bir değişken oluşturmak için kullanılır.
// useRef, component yeniden render olduğunda bile aynı referansı korur.
// useRef ile oluşturulan mutable değişkenin değeri değiştirilebilir ve bu değişiklik render'ı tetiklemez.
// render tetiklenmesini istemediğimiz durumlarda useRef kullanmak performans açısından faydalı olabilir.

import { useEffect, useRef, useState } from 'react';

function UseRefLessonPage() {
	// js tarafında document.getElementById('id') ile elemente erişmeye benzer.
	const inputRef = useRef<HTMLInputElement>(null);
	const renderCount = useRef(0);
	let _renderCount = 0; // useRef tanımlamadığımız için her renderda sıfırlar.
	const [random, setRandom] = useState(0);

	renderCount.current = renderCount.current + 1;

	// 2.kullanımda state değiştiğinde renderCount artar. ve State değişiminde değişken değeri kaybolmaz. useRef
	useEffect(() => {
		console.log('İlk doma basıldığında mounted', renderCount.current);
	}, []);

	useEffect(() => {
		console.log('random her değişiminde:', renderCount.current);
		// renderCount.current = renderCount.current + 1;
	}, [random]);

	console.log('Render oldu');

	return (
		<div>
			<h1>UseRefLessonPage</h1>
			<input ref={inputRef} type="text" />
			<button
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.value = 'Merhaba';
						inputRef.current.style.backgroundColor = 'yellow';
						inputRef.current.focus();
					}
				}}
			>
				Değeri Değiştir
			</button>
			<p>Rander Sayısı: {renderCount.current}</p>
			<p>Random: {random}</p>
			<button
				onClick={() => {
					// render sonrası değişken değerini kaybeder.
					_renderCount += 1;
					console.log('_renderCount', _renderCount);
					// random state değiştiğinde component yeniden render olur.
					setRandom(Math.random());
					// renderCount.current = renderCount.current + 1;
				}}
			>
				Random
			</button>
		</div>
	);
}

export default UseRefLessonPage;
