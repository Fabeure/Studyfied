import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent } from "react";

interface UploadButtonProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadButton({ onChange }: UploadButtonProps) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{
        color: "white",
        border: "1px solid #460084",
        borderRadius: "1em",
        background:
          "linear-gradient(42deg, rgba(56,0,105,0.2) 0%, rgba(8,133,138,0.5) 100%)",
      }}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={onChange} />
    </Button>
  );
}
