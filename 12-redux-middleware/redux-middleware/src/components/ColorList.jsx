import { Box } from "@mui/system";
import React from "react";
import ColorItem from "./ColorItem";

// Terima data dari API (Get /colors)
// menggunakan hoosk yg dibuatkan oleh RTK Query
import { useGetColorsQuery } from "../services/reqresinColorAPI";

export default function ColorList() {
  // Diterimanya dalam bentuk object (destructure)
  // { }
  // property yang bisa diambil di dalam hooks pemebrian RTK Query
  // 1. data -> data yang diquerykan (response)
  // 2. error -> berisi informasi error
  // 3. isLoading -> kondisi ketika querynya masih pending atau gak !

  const { data, error, isLoading } = useGetColorsQuery();
  return (
    <>
      <Box>
        {/* Kalau ada error kita pengen ngapain */}
        {/* Ternary atau conditional rendering */}
        {error ? (
          <>Ada error</>
        ) : isLoading ? (
          <>Loading data dulu yah ...</>
        ) : (
          // ?. => optional chaining
          data?.data.map((warna) => (
            <ColorItem key={warna.id} objColorItem={warna} />
          ))
        )}
      </Box>
    </>
  );
}
