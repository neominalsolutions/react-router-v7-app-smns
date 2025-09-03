// event binding
// model binding
// useEffect ile de component yaşam döngüsü yönetimi (3 faz), mount, update, unmount
// mount: Componentin DOM'a eklenmesi anı
// update: Componentin LOCAL STATE güncellenmesi anı
// unmount: Componentin DOM'dan kaldırılması anı
// React render fazında virtual DOM ile gerçek DOM'u karşılaştırır ve sadece değişen kısımları günceller. Bu, performansı artırır çünkü tüm DOM'u yeniden oluşturmak yerine sadece gerekli değişiklikler yapılır.
// React da render denilen sürecin olmasın sebebi ise state ve props değişiklikleridir. State veya props değiştiğinde React, componentin render metodunu tekrar çağırır ve UI'yi günceller.
// State reactda asenkron çalışır. State değişimini consoleda doğru gözlemleyemeyiz. React Developer Tools ile state değişimlerini izleyebiliriz.
// Bir function componente istediğimiz kadar birbirinden bağımsız useState hook'u ekleyebiliriz.
// Hooklar sadece Function componentlere özgüdür. Class componentlerde kullanılamaz.
import React from 'react';

// component içerisinde belirli bir durumu takip eden özel functionlarada hook denir.
function UseStateLessonPage() {
	const [random, setRandom] = React.useState<number>(0); // Angular variable değişkenler

	const onClickHandler = (): void => {
		const newRandom = Math.round(Math.random() * 1);
		setRandom(newRandom);
		console.log('Random Değer: ', random);
		// random = random + 1; // bu şekilde state değiştirilemez.
	};

	// TS kodları,state,props, event, variables,functions, hooks

	console.log('Component Render Edildi');

	return (
		<div>
			{/* one way model binding */}
			<p>Rastgele Değer: {random}</p>
			{/* event Binding */}
			<button onClick={onClickHandler}>Generate Random</button>
		</div>
	); // render anlamına gelir. // JSX dosyası
}

export default UseStateLessonPage;
