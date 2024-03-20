import { Door } from '@/types/door';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getDoors: builder.query<Door[], void>({
      query: () => '/doors',
    }),
    getDoor: builder.query<Door, number>({
      query: (doorId) => `/doors/${doorId}`,
    }),
  }),
});

export const { useGetDoorsQuery, useGetDoorQuery } = apiSlice;
