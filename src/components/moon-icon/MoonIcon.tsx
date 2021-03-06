/* eslint-disable max-len */

import { HTMLAttributes } from 'react';

type MoonIconProps = HTMLAttributes<SVGElement>;

export const MoonIcon = (props: MoonIconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 512 512" { ...props }>
		<path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
	</svg>
);

export default MoonIcon;
