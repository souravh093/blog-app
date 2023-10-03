import baseApi from "../api/baseApi";


const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBlogs: builder.query({
      query: () => "/recentBlogs",
      providesTags: ["Blogs"],
    }),
  }),
});

export const { useGetRecentBlogsQuery } = blogApi;
