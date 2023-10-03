import baseApi from "../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBlogs: builder.query({
      query: () => "/recentBlogs",
      providesTags: ["Blogs"],
    }),
    getRecentBlogsApps: builder.query({
      query: () => "/recentBlogsApps",
    }),
    getRecentHeroBlogs: builder.query({
      query: () => "/recentHeroBlog",
    }),
    getRecentTechnologyBlogs: builder.query({
      query: () => "/recentTechnologyBlog",
    }),
  }),
});

export const {
  useGetRecentBlogsQuery,
  useGetRecentBlogsAppsQuery,
  useGetRecentHeroBlogsQuery,
  useGetRecentTechnologyBlogsQuery
} = blogApi;
