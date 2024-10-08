import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Story } from '../types/types'; 

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
  endpoints: (builder) => ({
    getTopStories: builder.query<number[], void>({
      query: () => 'topstories.json',
    }),
    getStory: builder.query<Story, number>({
      query: (id) => `item/${id}.json`,
    }),
  }),
});

export const { useGetTopStoriesQuery, useGetStoryQuery } = hackerNewsApi;
