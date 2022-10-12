import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Bikin si service apinya
export const reqresinColorAPI = createApi({
  // definisikan didalam sini

  // kita beri "nama jalurnya"
  reducerPath: "reqresinColorAPI",

  // bikin query apa saja yg bisa dilakukan
  baseQuery: fetchBaseQuery({
    // kita akan pakai dari si https
    baseUrl: "https://reqres.in/api",
  }),

  endpoints: (builder) => ({
    // GET /colors
    getColors: builder.query({
      query: () => "/colors",
    }),

    // GET colors/:id
    getColorId: builder.query({
      query: (id) => `/colors/${id}`,
    }),

    // POST /colors
    // karena ini kita akan mengubah data, Bukan builder.query
    // builder.mutation
    postColor: builder.mutation({
      // colro adalah object
      query: (color) => ({
        url: "/colors",
        method: "POST",
        body: "color",
      }),
    }),

    // PUT /colors/:id
    putColor: builder.mutation({
      //   haru terdiri 2 data
      // 1 . id
      // 2. object coloy yang ingin kita updatekan
      //   query ini, kuncinya hanya bisa menerima 1 parameter
      query: ({ id, ...color }) => ({
        url: `/colors/${id}`,
        method: "PUT",
        body: color, // di balik layar RTK Query akan nyatuin dengan yg diatas
      }),
    }),

    // DELETE /colosrs/:id
    deleteColor: builder.mutation({
      query: (id) => ({
        url: `/colors/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  // use + name endpoints(CamelCase) + Query / Mutation
  useGetColorsQuery,
  useGetColorIdQuery,
  usePostColorMutation,
  usePutColorMutation,
  useDeleteColorMutation,
} = reqresinColorAPI;
