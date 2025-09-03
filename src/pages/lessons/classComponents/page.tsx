/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Not: Class componentlerde lifecycle methodları vardır
// function componentlerde hooklar vardır
// Class componentlerde this keyword kullanılır
// State yönetimi class componentlerde this.state ile yapılır
// Propslara erişim this.props ile yapılır
// Daha karmaşık yapılar için class componentler tercih edilebilir
// 16 versiyonundan sonra function componentler daha çok tercih edilmeye başlandı

type Props = {
	title?: string; // opsiyonel prop
};
type State = {
	count: number; // state tanımı
};

class ClassComponentDemo extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			count: 0, // initial state değeri
		};
	}

	interval: any;

	// function componentlerdeki useEffect hookuna benzer ama direk bir kaşılığı yok
	// renderdan sonra çalışır. state göre koşullu bir şekilde render olup olmamasına karar verir
	shouldComponentUpdate(
		nextProps: Readonly<Props>,
		nextState: Readonly<State>,
		nextContext: any
	): boolean {
		console.log(nextProps, this.props, nextState, this.state, nextContext);
		// component update olup olmayacağını belirler
		// true dönerse update olur, false dönerse update olmaz
		console.log('Should component update?');
		return true; // her zaman update olmasını sağlar
	}
	componentDidMount(): void {
		// component mount olduktan sonra çalışır
		console.log('Class component mounted'); // UseEffect Mounted aşaması
		// API Call işlemleri burada yapılabilir

		this.interval = setInterval(() => {
			console.log('Interval running');
		}, 1000);
	}
	componentDidUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<State>,
		snapshot?: any
	): void {
		// component update olduktan sonra çalışır
		console.log(prevProps, prevState, this.state, snapshot); // önceki state ile şimdiki state karşılaştırılabilir
		console.log('Class component updated'); // UseEffect Updated aşaması, State değişiminde çalışır
	}
	componentWillUnmount(): void {
		// component unmount olduktan sonra çalışır
		console.log('Class component will unmount'); // UseEffect Cleanup aşaması

        // websocket terminate, http request iptal, interval temizleme gibi işlemler burada yapılır
		if (this.interval) {
			clearInterval(this.interval); // yada useEffect
		}
	}
	// method olarak tanımlanır
	// render ile arayüz tanımlanır jsx ile
	render() {
		return (
			<div>
				<h1>Class Components</h1>
				<p>This is a class component in React.</p>
				<button
					onClick={() =>
						this.setState({ count: this.state.count + 1 }, () => {
							console.log('State updated:', this.state.count);
						})
					}
				>
					Count: {this.state.count}
				</button>
				<p>{this.props.title}</p>
			</div>
		);
	}
}

// render -> componentDidMount -> shouldComponentUpdate -> render -> componentDidUpdate -> componentWillUnmount

type PageProps = { name?: string };
type PageState = {
	visible: boolean;
};

// Not: Class componentleri Page sayfalarının yöntemi olarak kullanabiliriz
// Ama function componentleri daha çok tercih ediyoruz. Arayüzü function componentlerle yapıp, bu şekilde hibrid yapılar oluşturabiliriz

class ClassComponentLessonPage extends React.Component<PageProps, PageState> {
	constructor(props: PageProps) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	// Class Component içerisinde Function Component kullanabiliriz
	// Fakat tam tersi yapmalayım.

	render() {
		return (
			<div>
				<button onClick={() => this.setState({ visible: !this.state.visible })}>
					Toggle Component
				</button>
				{this.state.visible && (
					<ClassComponentDemo title="Toggled Component!" />
				)}
			</div>
		);
	}
}

export default ClassComponentLessonPage;
