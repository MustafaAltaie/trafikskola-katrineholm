import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schoolsApi = createApi({
    reducerPath: 'schoolsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['education', 'review', 'footerTop', 'footerMiddle', 'sec4MediaLinks', 'pricePage'],
    endpoints: (builder) => ({
        // Educations
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
        // Review
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
        // footer top part links
        readFooterTopLinks: builder.query({
            query: () => 'footerTop',
            providesTags: ['footerTop']
        }),
        updateFooterTopLinks: builder.mutation({
            query: (data) => ({ url: 'footerTop', method: 'PUT', body: data }),
            invalidatesTags: ['footerTop']
        }),
        // footer middle part
        readFooterMiddleLinks: builder.query({
            query: () => 'footerMiddle',
            providesTags: ['footerMiddle']
        }),
        updateFooterMiddleLinks: builder.mutation({
            query: (data) => ({ url: 'footerMiddle', method: 'PUT', body: data }),
            invalidatesTags: ['footerMiddle']
        }),
        // section4 social media links
        readSec4SocialLinks: builder.query({
            query: () => 'sec4MediaLinks',
            providesTags: ['sec4MediaLinks']
        }),
        updateSec4SocialLinks: builder.mutation({
            query: (data) => ({ url: 'sec4MediaLinks', method: 'PUT', body: data }),
            invalidatesTags: ['sec4MediaLinks']
        }),
        // Price page
        createPricePage: builder.mutation({
            query: (data) => ({ url: 'pricePage', method: 'POST', body: data }),
            invalidatesTags: ['pricePage']
        }),
        readPricePage: builder.query({
            query: () => 'pricePage',
            providesTags: ['pricePage']
        }),
        updatePricePage: builder.mutation({
            query: ({ id, ...data }) => ({ url: `pricePage/${id}`, method: 'PUT', body: data }),
            invalidatesTags: ['pricePage']
        }),
        deletePricePage: builder.mutation({
            query: (id) => ({ url: `pricePage/${id}`, method: 'Delete' }),
            invalidatesTags: ['pricePage']
        })
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
    useReadFooterTopLinksQuery,
    useUpdateFooterTopLinksMutation,
    useReadFooterMiddleLinksQuery,
    useUpdateFooterMiddleLinksMutation,
    useReadSec4SocialLinksQuery,
    useUpdateSec4SocialLinksMutation,
    useCreatePricePageMutation,
    useReadPricePageQuery,
    useUpdatePricePageMutation,
    useDeletePricePageMutation,
} = schoolsApi;