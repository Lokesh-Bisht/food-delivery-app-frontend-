import styled from "@mui/system/styled";

export const Item = styled("div")({
  color: "black",
  width: "160px",
  padding: "0 .8rem .8rem .8rem",
  backgroundColor: "#fff",
  borderRadius: "30px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
});

export const ItemImage = styled("img")({
  marginTop: "-3.5rem",
  height: "130px",
  objectFit: "contain",
});

export const ItemContentHeader = styled("div")({
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  flex: "1",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  p: {
    margin: "0",
    marginBottom: "0.5rem",
  },
});

export const ItemContentFooter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
