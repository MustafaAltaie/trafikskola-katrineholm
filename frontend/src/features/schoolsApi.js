import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schoolsApi = createApi({
    reducerPath: 'schoolsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['education', 'review'],
    endpoints: (builder) => ({
        // Educations CRUD
        // create
        createEducation: builder.mutation({
            query: (data) => ({ url: 'education', method: 'POST', body: data }),
            invalidatesTags: ['education']
        }),
        // read
        readEducations: builder.query({
            query: () => 'education',
            providesTags: ['education']
        }),
        // update
        updateEducation: builder.mutation({
            query: ({ id, ...data }) => ({ url: `education/${id}`, method: 'PUT', body: data }),
            invalidatesTags: ['education']
        }),
        // delete
        deleteEducation: builder.mutation({
            query: (id) => ({ url: `education/${id}`, method: 'DELETE' }),
            invalidatesTags: ['education']
        }),
        // Review CRUD
        // create
        createReview: builder.mutation({
            query: (data) => ({ url: 'review', method: 'POST', body: data }),
            invalidatesTags: ['review']
        }),
        // read
        readReview: builder.query({
            query: () => 'review',
            providesTags: ['review']
        }),
        // delete
        deleteReview: builder.mutation({
            query: (id) => ({ url: `review/${id}`, method: 'DELETE' }),
            invalidatesTags: ['review']
        }),
        // read review wrapper lock
        readReviewWrapper: builder.query({
            query: () => 'review/state',
            providesTags: ['review']
        }),
        // update review wrapper lock
        updateReviewWrapper: builder.mutation({
            query: (data) => ({ url: `review`, method: 'PUT', body: data }),
            invalidatesTags: ['review']
        }),
        // send message
        sendMessage: builder.mutation({
            query: (data) => ({ url: 'message', method: 'POST', body: data }),
            extraOptions: {
                maxRetries: 0,
            },
        }),
        
    })
});

export const {
    useCreateEducationMutation,
    useReadEducationsQuery,
    useUpdateEducationMutation,
    useDeleteEducationMutation,
    useCreateReviewMutation,
    useReadReviewQuery,
    useReadReviewWrapperQuery,
    useUpdateReviewWrapperMutation,
    useDeleteReviewMutation,
    useSendMessageMutation,
} = schoolsApi;