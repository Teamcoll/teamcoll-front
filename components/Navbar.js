import Link from "next/link";
import styled from "styled-components";
import { links } from "./map";
import { theme } from "Component/style/theme";

const Nav = styled.nav`
  background-color: white;
  z-index: 99;
`;

const LeftNav = styled(Nav)`
  width: ${theme.LeftsideNav.width};
  padding: ${theme.LeftsideNav.padding};
  flex-basis: 1;
  height: 100vh;
  box-shadow: ${theme.LeftsideNav.shadow};
`;

const NavHeader = styled.h1`
  margin: 0px;
`;

const Logo = styled.img.attrs({
  src: "images/logo.svg",
  alt: "Teamcoll Logo"
})`
  width: ${theme.Norm.LogoSize.width};
  height: ${theme.Norm.LogoSize.height};
`;

const LinksList = styled.ul`
  padding-left: 0px;
  margin-top: ${theme.LeftsideNav.list.marginTop};
  li {
    margin-bottom: ${theme.LeftsideNav.list.gap};
    a {
      color: black;
    }
  }
`;

export const LeftsideNav = () => {
  return (
    <LeftNav theme={theme}>
      <Logo theme={theme} />
      <NavHeader>Teamcoll</NavHeader>
      <LinksList theme={theme}>
        {links.map((e, i) => (
          <li key={i}>
            <Link href={e.href}>
              <a>{e.name}</a>
            </Link>
          </li>
        ))}
      </LinksList>
    </LeftNav>
  );
};
