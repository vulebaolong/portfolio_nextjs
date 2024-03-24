
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

type TProps = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  sx?: SxProps;
  priority?: boolean;
  sizes?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};

function CustomImage({
  src,
  alt,
  width,
  height,
  sx,
  priority,
  sizes = "100vw",
  objectFit,
  ...props
}: TProps) {
  return (
    <Box width={width} height={height} position={"relative"} sx={sx} {...props}>
      <Image
        fill
        src={src}
        alt={alt}
        sizes={sizes}
        priority={!!priority}
        objectFit={objectFit}
        style={{ verticalAlign: "middle" }}
      />
    </Box>
  );
}

export default CustomImage;
