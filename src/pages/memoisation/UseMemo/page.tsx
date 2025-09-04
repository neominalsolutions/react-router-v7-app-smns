import React, { useMemo } from 'react';

// Önemli Not:
// useMemo kullanırken asenkron fonksiyonlar kullanılmaz.
// promise verileri memoize edilemez.
// Veri filtereleme, gruplama, sıralama gibi işlemler için kullanılır.
// useMemo, useEffect gibi hooklar componentin en üstünde tanımlanır.
// Hooklar, Koşul içinde, döngü içinde, function içinde kullanılmaz.
function UseMemoPage() {
	const [count, setCount] = React.useState(0);
	// const val = 1;

	// client taraflı çekilen veri üzeinden ağır işlemler yapılıyorsa
	// bu işlemler her render da tekrar tekrar yapılır.
	// Bu durumda useMemo kullanarak bu işlemi optimize edebiliriz.
	// useMemo, bir değeri veya fonksiyon sonucunu hafızada tutar ve bağımlılıklar değişmediği sürece
	// bu değeri yeniden hesaplamaz.
	// Böylece performans iyileştirmesi sağlanır.
	const calculateValue = () => {
		console.log('long Time Calculating value...');
		return 45;
	};

	// state gibi Memoize edilen değeker React Dev Toolsda component içinde gözükür.
	// const value = calculateValue(); Performansız kullanım
	const Memoizedvalue = useMemo(() => calculateValue(), []); // Performanslı kullanım [] sayfa mount etildiğinde çalışır.bidaha çalışmaz.

	return (
		<div>
			<p>Sayac: {count}</p>
			{/* <h2>Hesaplanan Değer : {value}</h2> */}
			<h2>Hesaplanan Değer : {Memoizedvalue}</h2>
			<button onClick={() => setCount(5)}>Counter</button>
		</div>
	);
}

export default UseMemoPage;
