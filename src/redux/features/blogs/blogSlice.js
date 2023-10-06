import baseApi from "../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBlogs: builder.query({
      query: () => "/recentBlogs",
      providesTags: ["Blogs"],
    }),
    getRecentBlogsApps: builder.query({
      query: () => "/recentBlogsApps",
      providesTags: ["Blogs"],
    }),
    getRecentHeroBlogs: builder.query({
      query: () => "/recentHeroBlog",
      providesTags: ["Blogs"],
    }),
    getRecentTechnologyBlogs: builder.query({
      query: () => "/recentTechnologyBlog",
      providesTags: ["Blogs"],
    }),
    getGadgetRecentBlogs: builder.query({
      query: () => "/recentGadgetBlogs",
      providesTags: ["Blogs"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
      providesTags: ["Blogs"],
    }),
    getSimilarBlog: builder.query({
      query: (category) => `/similarBlogs/${category}`,
      providesTags: ["Blogs"],
    }),
    addComment: builder.mutation({
      query: ({ id, commentData }) => ({
        url: `/addComment/${id}`,
        method: "PUT",
        body: commentData,
      }),
      invalidatesTags: ["Blogs"],
    }),
    getComments: builder.query({
      query: (id) => `/getComments/${id}`,
    }),
    addBlog: builder.mutation({
      query: (post) => ({
        url: `/addBlog`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Blogs"],
    }),
    getUserBlog: builder.query({
      query: (email) => `/userBlogs/${email}`,
    }),
    getAllCategoryBlogs: builder.query({
      query: (category) => `/categoryBlogs/${category}`,
    }),
  }),
});

export const {
  useGetRecentBlogsQuery,
  useGetRecentBlogsAppsQuery,
  useGetRecentHeroBlogsQuery,
  useGetRecentTechnologyBlogsQuery,
  useGetGadgetRecentBlogsQuery,
  useGetSingleBlogQuery,
  useGetSimilarBlogQuery,
  useAddCommentMutation,
  useAddBlogMutation,
  useGetUserBlogQuery,
  useGetAllCategoryBlogsQuery,
} = blogApi;
