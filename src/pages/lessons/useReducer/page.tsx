// sepet fiyat hesaplama
// ekrandan birşey çıkarılıncal total fiyat güncellensin
// quantity, price, name (A 25 Lira x 3) (B 35 Lira x 5) -> 75+105 = 180
// quantity (+) (-)
// item (+), (-)
// total fiyat güncelleme

import { useReducer } from 'react';
import { CartReducer, type CartItem } from './reducers/cart.reducer';

// Not: UseState çok karmaşık olduğu çok falza componente useState olduğu durumlarda ideal bir kullanım şekli.
export const UseReducerPage = () => {
	const initCart = [] as CartItem[];
	// useState gibi yazılıyor.
	// dispatch özel bir isim set State olarka kullanılıyor
	// state ise güncel state değerini veriyor
	const [state, dispatch] = useReducer(CartReducer, {
		items: initCart,
		total: 0,
	});

	return (
		<>
			{state.items.map((item) => {
				return (
					<div key={item.id}>
						{item.name} - {item.price} TL
						<input
							type="number"
							value={item.quantity}
							onChange={(e) => {
								dispatch({
									type: 'Update_Quantity', // state değiştirmek için kullanılan tip
									payload: {
										// ilgili state değiştirmek için kullandığımız veri
										id: item.id,
										quantity: Number(e.target.value),
									},
								});
							}}
						/>
					</div>
				);
			})}

			<div>Total: {state.total}</div>
			<div>
				<button
					onClick={() =>
						dispatch({
							type: 'Add_Item',
							payload: {
								id: Math.round(Math.random() * 100),
								price: Math.round(1 + Math.random() * 10),
								quantity: Math.round(Math.random() * 100),
								name: 'Ürün ' + Math.round(Math.random() * 10),
							},
						})
					}
				>
					Add Item
				</button>
			</div>
		</>
	);
};
