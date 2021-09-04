export const theme = {
	config: {
		initialColorModeName: 'light',
		printColorModeName: 'light',
		useLocalStorage: false,
		useColorSchemeMediaQuery: false,
	},
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, "Ubuntu Mono", Consolas, monospace',
	},
	fontSizes: [12, 14, 24, 32, 48],
	fontWeights: {
		body: 400,
		medium: 700,
		bold: 900,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	letterSpacings: {
		body: 'normal',
		caps: '0.2em',
	},
	text: {
		note: {
			color: 'gray',
			fontSize: 0,
			fontWeight: 'body',
		},
		default: {
			fontSize: 1,
			color: 'text',
		},
		caps: {
			textTransform: 'uppercase',
			letterSpacing: 'caps',
			fontWeight: 'medium',
			fontSize: 0,
		},
		subtitle: {
			fontSize: 2,
			fontWeight: 'bold',
			lineHeight: 'heading',
		},
		title: {
			fontSize: 3,
			fontWeight: 'bold',
			lineHeight: 'heading',
		},
		heading: {
			fontSize: 4,
			fontWeight: 'bold',
			lineHeight: 'heading',
		},
	},
	buttons: {
		primary: {
			cursor: 'pointer',
			fontFamily: 'body',
			fontWeight: 'medium',
			border: (t) => `solid 1px ${t.colors.primary}`,
			'&:disabled': {
				cursor: 'default',
				opacity: 0.6,
			},
		},
		secondary: {
			cursor: 'pointer',
			fontFamily: 'body',
			fontWeight: 'medium',
			bg: 'transparent',
			color: 'text',
			border: (t) => `solid 1px ${t.colors.text}`,
			'&:disabled': {
				cursor: 'default',
				opacity: 0.6,
			},
		},
		danger: {
			cursor: 'pointer',
			fontFamily: 'body',
			fontWeight: 'medium',
			bg: 'transparent',
			color: 'danger',
			border: (t) => `solid 1px ${t.colors.danger}`,
			'&:disabled': {
				cursor: 'default',
				opacity: 0.6,
			},
		},
	},
	cards: {
		primary: {
			padding: 3,
			borderRadius: 4,
			bg: 'background',
			border: (t) => `solid 1px ${t.colors.gray}`,
		},
		compact: {
			padding: 0,
			borderRadius: 4,
			bg: 'background',
			border: (t) => `solid 1px ${t.colors.gray}`,
		},
		float: {
			padding: 0,
			borderRadius: 4,
			bg: 'background',
			border: (t) => `solid 1px ${t.colors.gray}`,
			boxShadow: '0 0 10px 1px rgba(0,0,0,0.1)',
		},
	},
	label: {
		fontSize: 1,
		fontWeight: 'medium',
	},
	input: {
		borderColor: 'gray',
		'&:focus': {
			borderColor: 'primary',
			boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
			outline: 'none',
		},
		'&:disabled': {
			bg: (t) => t.colors.muted,
		},
	},
	select: {
		borderColor: 'gray',
		'&:focus': {
			borderColor: 'primary',
			boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
			outline: 'none',
		},
	},
	textarea: {
		borderColor: 'gray',
		'&:focus': {
			borderColor: 'primary',
			boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
			outline: 'none',
		},
	},
	slider: {
		bg: 'muted',
	},
	badges: {
		default: {
			bg: 'primary',
		},
		danger: {
			bg: 'danger',
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
		},
		h1: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'bold',
			fontSize: 4,
		},
		h2: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'bold',
			fontSize: 3,
		},
		h3: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'medium',
			fontSize: 2,
		},
		p: {
			color: 'text',
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body',
			fontSize: 1,
		},
		a: {
			color: 'primary',
			fontWeight: 'medium',
		},
		pre: {
			fontFamily: 'monospace',
			overflowX: 'auto',
			code: {
				color: 'inherit',
			},
		},
		code: {
			fontFamily: 'monospace',
			fontSize: 'inherit',
		},
		table: {
			width: '100%',
			borderCollapse: 'separate',
			borderSpacing: 0,
		},
		th: {
			textAlign: 'left',
			borderBottomStyle: 'solid',
		},
		td: {
			textAlign: 'left',
			borderBottomStyle: 'solid',
		},
		img: {
			maxWidth: '100%',
		},
	},
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#2eaadc',
		danger: '#Eb5757',
		accent: '#396',
		gray: '#cacaca',
		highlight: '#ff93',
		muted: '#f6f6f6',
		modes: {
			dark: {
				text: '#fff',
				background: '#2f3437',
				gray: '#555',
				muted: '#444',
			},
		},
	},
};
