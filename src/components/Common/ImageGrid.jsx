import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

export const ImageGrid = ({ product }) => {
  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={200}>
        {product?.listPhotos?.map((photo, index) => (
          <ImageListItem key={index}>
            <img srcSet={`${photo}`} src={`photo ${index}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
