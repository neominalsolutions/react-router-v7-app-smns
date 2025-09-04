import React from 'react';
import { SubChildMemo } from './subchild.memo';

export type ChildProps = {
	title: string;
};

function Child(props: ChildProps) {
	const { title } = props;
	console.log('Child Memo Rendered: ', title);

	return (
		<>
			<div>Child Memo {title}</div>
			<SubChildMemo title={title} />
		</>
	);
}

export const ChildMemo = React.memo(Child);
