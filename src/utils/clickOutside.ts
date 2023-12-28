import type { ActionReturn } from 'svelte/action';

type Attributes = {
	'on:clickOutsideDispatch': (e: CustomEvent<boolean>) => void;
};

export const clickOutside = (node: HTMLElement): ActionReturn<undefined, Attributes> => {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickOutsideDispatch', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
