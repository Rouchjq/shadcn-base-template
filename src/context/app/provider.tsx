// main tools
import { Toaster } from 'react-hot-toast';
import { useMemo } from 'react';

// context
import { appContext } from './context';

// types
import { FC, ReactNode } from 'react';

type AppContextProviderProps = {
	children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({
	children,
}) => {
	const context = useMemo(() => ({}), []);

	return (
		<appContext.Provider value={context}>
			<Toaster />
			{children}
		</appContext.Provider>
	);
};
