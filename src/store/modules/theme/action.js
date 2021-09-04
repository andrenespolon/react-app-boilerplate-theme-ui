export function fetchTheme(userId) {
	return {
		type: '@theme/FETCH_THEME',
		userId,
	};
}

export function fetchThemeSuccess(mode) {
	return {
		type: '@theme/FETCH_THEME_SUCCESS',
		mode,
	};
}

export function fetchThemeError(error) {
	return {
		type: '@theme/FETCH_THEME_ERROR',
		error,
	};
}

export function sendTheme(mode) {
	return {
		type: '@theme/SEND_THEME',
		mode,
	};
}

export function sendThemeSuccess() {
	return {
		type: '@theme/SEND_THEME_SUCCESS',
	};
}

export function sendThemeError(error) {
	return {
		type: '@theme/SEND_THEME_ERROR',
		error,
	};
}
