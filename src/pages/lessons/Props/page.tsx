// Reactda propslar componente tışarıdan gönderilen degerlerdir. Angulardaki @Input ifadelerine çok benzer.
// Propslar sadece okunabilirdir. Bir componente props olarak gönderilen degerler o component içinde degistirilemez. Immutable olarak tanımlıdır. Stateler componentin yaşam döngüsünden sorumlu iken props componentin ilk ekrana nasıl çizileceginden sorumludur. Not: Props değerler state değişkenlere bağlanarak güncellenebilir.

import React from 'react';

// { message }: { message: string } dışarıdan gönderilen propsun tipini belirler.

type ChildComponentProps = {
	message: string; // required prop
	title?: string; // optional prop
};

// export function ChildComponent({ message,title }: { message: string, title?:string }) {
//     return <div>{message}</div>;
// }

export function ChildComponent(props: ChildComponentProps) {
	const { message } = props; // deconstructing

	const handleClick = () => {
		// props.title = 'New Title'; // This will cause an error because props are read-only
	};
	// propslar state gibi degistirilemez. Sadece okunabilirler.
	// Immutable yani degistirilemezler.
	return (
		<div>
			{message}
			<button onClick={handleClick}>{props.title ?? 'Default Title'}</button>
		</div>
	);
}

// props state gibi güncellenemez ama bir state props güncelleyip güncel props değeriene göre component render edilebilir.
// Not: Parent Component state değişkeni props olarak child componente gönderirse parent componentte state değişkeni güncellendiginde child componentte güncellenir.
function PropsLessonPage() {
	// parent component
	const [title, setTitle] = React.useState('Initial Title');
	const changeTitle = () => {
		setTitle('Updated Title');
	};

	return (
		<div>
			<ChildComponent message="Hello from props!" title={title} />
			<ChildComponent message="Hello from props Sample 2!" />
			<button onClick={changeTitle}>Change Title</button>
		</div>
	);
}

export default PropsLessonPage;
