const Norm = {
  parentHeight: "100vh",
  horizontalSpace: "3vw",
  verticalSpace: "4.5vw",
  NavigationWidth: "24vw",
  navContentGap: "0px",
  LogoSize: {
    width: "50px",
    height: "25px"
  },
  contentHorizontalSpacing: "50px",
  contentVerticalSpacing: "15px"
};

const Color = {
  white: "#ffffff"
};

export const theme = {
  Norm: Norm,
  Color: Color,
  // Layout
  ContentsSection: {
    width: `calc(100vw - ${Norm.NavigationWidth} - ${Norm.navContentGap})`,
    gap: `${Norm.navContentGap}`,
    padding: `${Norm.verticalSpace} ${Norm.horizontalSpace}`,
    list: {
      padding: `0px 0px`
    }
  },
  // Navbar
  LeftsideNav: {
    width: Norm.NavigationWidth,
    shadow: "5px 0px 5px rgb(180, 180, 180)",
    padding: `calc(${Norm.verticalSpace} - ${Norm.LogoSize.height}) ${Norm.horizontalSpace} ${Norm.verticalSpace} ${Norm.horizontalSpace}`,
    list: {
      marginTop: Norm.horizontalSpace,
      gap: "20px"
    }
  }
};
