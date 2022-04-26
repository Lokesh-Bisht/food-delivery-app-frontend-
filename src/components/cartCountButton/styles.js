import styled from "@mui/system/styled";

export const CartCountButtonWrapper = styled("div")({
  width: "50px",
  height: "50px",
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "15px",
  transform: "rotate(45deg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "1.5rem",
  right: "1rem",
});

export const CartCount = styled("div")({
  transform: "rotate(-45deg)",
  position: "absolute",
  backgroundColor: "red",
  top: "-8px",
  left: "-9px",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  fontSize: "0.7rem",
  display: "flex",
  justifyContent: "center",
  fontWeight: "500",
  alignItems: "center",
});
