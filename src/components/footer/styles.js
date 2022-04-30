import styled from "@mui/system/styled";

export const FooterContent = styled("footer")({
  borderTop: "1px solid #000",
  marginTop: "3rem",
  padding: "2rem 0",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  p: {
    fontWeight: "500",
    maxWidth: "600px",
    marginRight: "0.5rem",
  },
  "@media(max-width: 576px)": {
    p: {
      fontSize: "0.8rem",
    },
  },
});
