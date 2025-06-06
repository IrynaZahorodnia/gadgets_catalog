import { createRoot } from 'react-dom/client';

import { Root } from './Root';
import { GlobalProvider } from './store/GlobalProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <Root />
  </GlobalProvider>,
);
