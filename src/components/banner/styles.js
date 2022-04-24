import styled from "@mui/system/styled";

export const Header = styled("header")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  paddingTop: "0.5rem",
  height: "100vh",
});

export const HeaderContent = styled("header")({
  display: "flex",
  flexDirection: "column",
  marginRight: "32px",
});

export const HeaderImage = styled("img")({
  width: "100%",
  alignSelf: "center",
  borderRadius: "25px",
});

export const ContentMain = styled("header")({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  justifyContent: "center",
  h1: {
    fontSize: "3em",
    marginBottom: "1.5rem",
  },
  p: {
    fontWeight: "500",
  },
  button: {
    backgroundColor: "black",
    color: "#fff",
    width: "150px",
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px",
    borderTopRightRadius: "25px",
    marginTop: "2.5rem",
    textTransform: "none",
  },
  "@media(max-width: 760px)": {
    h1: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
    },
    button: {
      fontSize: ".8rem",
    },
  },
});
