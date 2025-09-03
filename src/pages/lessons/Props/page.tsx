// Reactda propslar componente tışarıdan gönderilen degerlerdir. Angulardaki @Input ifadelerine çok benzer.
// Propslar sadece okunabilirdir. Bir componente props olarak gönderilen degerler o component içinde degistirilemez. Immutable olarak tanımlıdır. Stateler componentin yaşam döngüsünden sorumlu iken props componentin ilk ekrana nasıl çizileceginden sorumludur. Not: Props değerler state değişkenlere bağlanarak güncellenebilir.

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
	return <div>{message}</div>;
}

function PropsLessonPage() {
	return (
		<div>
			<ChildComponent message="Hello from props!" title="Optional Title" />
			<ChildComponent message="Hello from props Sample 2!" />
		</div>
	);
}

export default PropsLessonPage;
