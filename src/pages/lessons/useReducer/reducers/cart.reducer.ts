// sepete atılan itemlar
export type CartItem = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

// seppettekilerin state
type CartState = {
	items: CartItem[];
	total: number;
};

type CartActionType =
	| 'Update_Quantity'
	| 'Add_Item'
	| 'Remove_Item'
	| 'Update_Price';

// arayüzde yapılacak istek tipleri
type CartAction = {
	type: CartActionType;
	payload:
		| { id: number; quantity: number } // update quantity
		| CartItem // add item
		| { id: number; price: number } // update price
		| { id: number }; // remove
};

// dispatch edince CartReducer function tetiklenir.state ve action payload değerine göre state güncellenir.
// State güncellemesinden sorumlu arkadaş reducer olur.
export function CartReducer(state: CartState, action: CartAction) {
	const item = state.items.find((x) => x.id === action.payload.id);

	if (action.type === 'Update_Quantity') {
		// 1 di 2 oldu
		if (item) {
			item.quantity = (
				action.payload as { id: number; quantity: number }
			).quantity; // cast
		}

		// State Quantity Update
	} else if (action.type === 'Add_Item') {
		if (!item) {
			state.items = [...state.items, action.payload as CartItem];
		}

		// State Add Item
	} else if (action.type === 'Remove_Item') {
		// State Remove Item
	} else if (action.type === 'Update_Price') {
		// State Update Price
	} else {
		return state;
	}

	state.total = state.items.reduce(
		(total, current) => (total += current.quantity * current.price),
		0
	);

	return { ...state };
}
