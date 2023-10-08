import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://blog-app-server-ten.vercel.app"}),
    tagTypes: ["Blogs"],
    endpoints: (builder) => ({})
})

export default baseApi;