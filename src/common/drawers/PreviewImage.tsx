"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

function PreviewImage({ file }: { file: File }) {
   const [preview, setPreview] = useState<string | null>(null);
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
         setPreview(result);
      }
   };

   return (
      <>
         {preview ? (
            <Box
               sx={{
                  mt: `10px`,
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
               overflow={"hidden"}
            >
               <Image
                  src={preview}
                  alt="preview"
                  width={0}
                  height={0}
                  sizes="30vw"
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                     borderRadius: `10px`,
                  }}
               />
            </Box>
         ) : (
            "loading"
         )}
      </>
   );
}
export default PreviewImage;
