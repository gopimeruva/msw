import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Create the mock server with the defined handlers
const server = setupServer(...handlers);

export { server };
