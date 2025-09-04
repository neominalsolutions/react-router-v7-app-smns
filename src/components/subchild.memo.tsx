import React from 'react';
import type { ChildProps } from './child.memo';

export function SubChild(props: ChildProps) {
	const { title } = props;
	console.log('SubChild Memo Rendered: ', title);

	return <div>SubChild Memo {title}</div>;
}

export const SubChildMemo = React.memo(SubChild);

// export const memoizedComponents = [React.memo(SubChild),];


// Page <Input /> <Button /> <List />
