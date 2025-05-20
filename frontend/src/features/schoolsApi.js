import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schoolsApi = createApi({
    reducerPath: 'schoolsApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
    tagTypes: [
        'education',
        'review',
        'footerTop',
        'footerMiddle',
        'sec4MediaLinks',
        'pricePage',
        'intensive',
        'aboutImages',
        'homeImages',
        'integrityAndTerm'
    ],
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
        }),
        // intensive course page
        createIntensive: builder.mutation({
            query: (data) => ({ url: 'intensive', method: 'POST', body: data }),
            invalidatesTags: ['intensive']
        }),
        readIntensive: builder.query({
            query: () => 'intensive',
            providesTags: ['intensive']
        }),
        updateIntensive: builder.mutation({
            query: ({ id, ...data }) => ({ url: `intensive/${id}`, method: 'PUT', body: data }),
            invalidatesTags: ['intensive']
        }),
        deleteIntensive: builder.mutation({
            query: (id) => ({ url: `intensive/${id}`, method: 'DELETE' }),
            invalidatesTags: ['intensive']
        }),
        // upload about images
        uploadAboutImages: builder.mutation({
            query: (formData) => ({ url: 'aboutImages', method: 'POST', body: formData }),
            invalidatesTags: ['aboutImages']
        }),
        readAboutImages: builder.query({
            query: () => 'aboutImages',
            providesTags: ['aboutImages']
        }),
        deleteAboutImages: builder.mutation({
            query: (filename) => ({ url: `aboutImages/${filename}`, method: 'DELETE' }),
            invalidatesTags: ['aboutImages']
        }),
        // Home images
        uploadHomeImages: builder.mutation({
            query: (formData) => ({ url: 'homeImages', method: 'POST', body: formData }),
            invalidatesTags: ['homeImages']
        }),
        readHomeImages: builder.query({
            query: () => 'homeImages',
            providesTags: ['homeImages']
        }),
        deleteHomeImages: builder.mutation({
            query: (file) => ({ url: `homeImages/${file}`, method: 'DELETE' }),
            invalidatesTags: ['homeImages']
        }),
        // Integrity And Terms
        readIntegrityTerm: builder.query({
            query: () => 'integrityAndTerm',
            providesTags: ['integrityAndTerm']
        }),
        updateIntegrityTerm: builder.mutation({
            query: (data) => ({ url: 'integrityAndTerm', method: 'PUT', body: data }),
            invalidatesTags: ['integrityAndTerm']
        }),
    })
});

export const {
    // Education
    useCreateEducationMutation,
    useReadEducationsQuery,
    useUpdateEducationMutation,
    useDeleteEducationMutation,
    // Review
    useCreateReviewMutation,
    useReadReviewQuery,
    useReadReviewWrapperQuery,
    useUpdateReviewWrapperMutation,
    useDeleteReviewMutation,
    // Message
    useSendMessageMutation,
    // Footer
    useReadFooterTopLinksQuery,
    useUpdateFooterTopLinksMutation,
    useReadFooterMiddleLinksQuery,
    useUpdateFooterMiddleLinksMutation,
    // Section 4 Social media Links
    useReadSec4SocialLinksQuery,
    useUpdateSec4SocialLinksMutation,
    // Price Page
    useCreatePricePageMutation,
    useReadPricePageQuery,
    useUpdatePricePageMutation,
    useDeletePricePageMutation,
    // Intensive courses page
    useCreateIntensiveMutation,
    useReadIntensiveQuery,
    useUpdateIntensiveMutation,
    useDeleteIntensiveMutation,
    // About page images
    useUploadAboutImagesMutation,
    useReadAboutImagesQuery,
    useDeleteAboutImagesMutation,
    // Home images
    useUploadHomeImagesMutation,
    useReadHomeImagesQuery,
    useDeleteHomeImagesMutation,
    // Integrity And Terms
    useUpdateIntegrityTermMutation,
    useReadIntegrityTermQuery,
} = schoolsApi;