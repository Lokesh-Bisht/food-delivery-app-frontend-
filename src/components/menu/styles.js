import styled from "@mui/system/styled";

const ContentMain = styled("main")({
  paddingTop: "3.5rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  justifyItems: "center",
  gridRowGap: "5rem",
  "@media(max-width: 935px)": {
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  "@media(max-width: 735px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  "@media(max-width: 535px)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media(max-width: 335px)": {
    gridTemplateColumns: "1fr",
  },
});

export default ContentMain;
