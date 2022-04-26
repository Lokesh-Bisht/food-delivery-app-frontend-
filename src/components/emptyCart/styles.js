import styled from "@mui/system/styled";

export const EmptyCartWrapper = styled("div")({
  height: "calc(100vh - 14rem)",
  display: "flex",
  flexDirection: "column",
  justContent: "center",
  alignItems: "center",
  button: {
    backgroundColor: "#000",
    color: "#fff",
    textTransform: "none",
    "&: hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
});

export const EmptyCartImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  maxWidth: "150px",
});
