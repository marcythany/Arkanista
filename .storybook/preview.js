import "../styles/globals.css";
import {RouterContext} from "next/dist/shared/lib/router-context";

export const parameters = {
	nextRouter: {
		Provider: RouterContext.Provider,
	},
	actions: {argTypesRegex: "^on[A-Z].*"},
	backgrounds: {disabled: true},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
