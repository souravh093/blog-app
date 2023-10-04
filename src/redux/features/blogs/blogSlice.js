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
    getGadgetRecentBlogs: builder.query({
      query: () => "/recentGadgetBlogs",
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
  }),
});

export const {
  useGetRecentBlogsQuery,
  useGetRecentBlogsAppsQuery,
  useGetRecentHeroBlogsQuery,
  useGetRecentTechnologyBlogsQuery,
  useGetGadgetRecentBlogsQuery,
  useGetSingleBlogQuery
} = blogApi;
