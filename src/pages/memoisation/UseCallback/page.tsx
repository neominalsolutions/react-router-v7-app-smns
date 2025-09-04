import React from 'react';

type Props = {
	selected: string | null;
	items: string[]; // Ref Type of items
	onItemSelect(item: string): void; // Callback function RefType
};

// Not: React Memo componenti memoize ederlken value type olan propsları kontrol eder. Ref type olan propsları kontrol etmez. Bu yüzden Child componenti her render olduğunda yeniden render olur.
// string | null Union Type
function Child(props: Props) {
	console.log('Child rendered');
	// const [selected, setSelected] = React.useState<string | null>(props.selected);

	return (
		<div>
			{props.items.map((item, index) => (
				<div
					key={index}
					style={{ color: props.selected == item ? 'green' : '' }}
				>
					{item}
					<button
						onClick={() => {
							props.onItemSelect(item);
							// setSelected(item);
						}}
					>
						Select
					</button>
				</div>
			))}
		</div>
	);
}

const MemoizedChild = React.memo(Child); // Memoize the Child component

// action propslarda child componentin içerisinde yapılan bir işlem sonunda parent component bir bildirim gönderilir. Böylelikle parent component child component içerisinde yapılan bir işlemden haberdar olur.
function UseCallbackPage() {
	const [count, setCount] = React.useState(0);
	const [itemSelected, setItemSelected] = React.useState<string | null>('');

	// const ItemSelectHandler = (item: string) => {
	// 	console.log('Item selected', item);
	// };

	// function sayfa açıldığında [] deps dolayı 1 kez memoize edilir. Bu sebeple referans tipi olan fonksiyon her render olduğunda değişmez. Böylelikle Child componenti de her render olduğunda yeniden render olmaz.
	const ItemSelectHandler = React.useCallback((item: string) => {
		console.log('Item selected', item);
		setItemSelected(item);
	}, []); // Mounted olunca unmounted olana kadar memoize ol

	const memoizedItems = React.useMemo(() => {
		return ['Item 1', 'Item 2', 'Item 3'];
	}, []); // items arrayini de useMemo ile sarmalayarak referans tipinin her renderda değişmesini engelliyoruz. // Itemslar değişene kadar memoize ol.

	return (
		<div>
			<MemoizedChild
				selected={itemSelected}
				items={memoizedItems}
				onItemSelect={ItemSelectHandler}
			/>
			<button onClick={() => setCount(count + 1)}>
				Increment Count: {count}
			</button>
		</div>
	);
}

export default UseCallbackPage;

// Not: state.name ='ali';  {...state}
// Not: Eğer bir component propslarını referans type olarak dışarıdan alıyor, array, object, function bu durumda componentin kendisini memoize etmek tek çözüm değildir. aynı zaman array ve object için useMemo, functionlar için useCallback kullanılarak component memoize edilmiş olur.
