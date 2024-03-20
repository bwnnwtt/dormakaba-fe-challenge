// import 'cross-fetch/polyfill'
import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import doors from '@/app/mock/doors';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  http.get('/api/doors', () => {
    return HttpResponse.json(doors);
  }),
];

export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
