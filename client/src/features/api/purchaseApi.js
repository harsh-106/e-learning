import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const COURSE_PURCHASE_API = "http://localhost:8080/api/v1/purchase";

export const purchaseApi = createApi({
  reducerPath: "purchaseApi",
//   tagTypes:['Refetch_Creator_Course', 'Refetch_Lecture'],
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_PURCHASE_API,
    credentials: "include",
  }),

  endpoints: (builder) => ({ 
    createCheckoutSession: builder.mutation({
        query: (courseId) => ({
          url: "/checkout/create-checkout-session ",
          method: "POST",
          body: {courseId},
        }),
      }),
    getCourseDetailWithStatus: builder.mutation({
        query: (courseId) => ({
          url: `/course/${courseId}/details-with-status`,
          method: "POST",
          body: {courseId},
        }),
      }),
    getCourseDetailWithStatus: builder.query({
        query: (courseId) => ({
          url: `/course/${courseId}/detail-with-status`,
          method: "GET",
          // body: {courseId},
        }),
      }),
    getPurchasedCourses: builder.query({
        query: () => ({
          url: "/",
          method: "GET",
        
        }),
      }),
  })
})
export const {useCreateCheckoutSessionMutation, useGetCourseDetailWithStatusQuery, useGetPurchasedCoursesQuery } = purchaseApi;