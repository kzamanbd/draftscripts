import { useContext } from 'react';

import { DialogContext } from '../components/dialog-provider.tsx';

export const useConfirm = () => useContext(DialogContext);

