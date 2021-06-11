import { useEffect, useCallback } from 'react';
import classNames from 'classnames';

import useSystemTheme from 'react-use-system-theme';

import SunIcon from '../sun-icon';
import MoonIcon from '../moon-icon';

import styles from './ThemeSwapper.module.css';

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
};

export const ThemeSwapper = () => {
	const systemTheme = useSystemTheme(THEMES.LIGHT);

	useEffect(() => {
		if (document.body.getAttribute('data-theme') === systemTheme) {
			document.body.removeAttribute('data-theme');
		}
	}, [systemTheme]);

	const handleClick = useCallback(() => {
		if (!document.body.getAttribute('data-theme')) {
			document.body.setAttribute('data-theme', systemTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
		} else {
			document.body.removeAttribute('data-theme');
		}
	}, [systemTheme]);

	return (
		<button onClick={ handleClick } className={ styles.container }>
			<SunIcon className={ classNames(styles.icon, styles.sun) } />
			<MoonIcon className={ classNames(styles.icon, styles.moon) } />
		</button>
	);
};

export default ThemeSwapper;
