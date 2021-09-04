import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../theme';

export default ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
