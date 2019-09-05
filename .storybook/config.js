import { configure } from '@storybook/react';

import 'storybook-chromatic';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
