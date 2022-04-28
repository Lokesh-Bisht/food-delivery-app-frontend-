import styled from "@mui/system/styled";

export const Header = styled("header")({
  paddingTop: "0.5rem",
});

export const Orders = styled("div")({
  margin: "2rem 0 0 0",
  minHeight: "calc(100vh - 15rem)",
  h1: {
    width: "100%",
    maxWidth: "600px",
    borderBottom: "2px solid #000",
    marginBottom: "5.5rem",
  },
  h3: {
    width: "100%",
    maxWidth: "600px",
    borderTop: "2px solid #000",
    textAlign: "right",
    marginLeft: "auto",
    marginTop: "3rem",
  },
});

export const OrdersMenu = styled("div")({});
