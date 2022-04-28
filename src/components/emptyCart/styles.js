import styled from "@mui/system/styled";

export const EmptyCartWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justContent: "center",
  alignItems: "center",
  button: {
    backgroundColor: "#000",
    color: "#fff",
    textTransform: "none",
    marginTop: "1rem",
    "&: hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  p: {
    fontFamily: "Montserrat",
    fontSize: "1.8rem",
    fontWeight: "500",
    marginTop: "4rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
});

export const EmptyCartImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  maxWidth: "150px",
  marginTop: "5rem",
});
