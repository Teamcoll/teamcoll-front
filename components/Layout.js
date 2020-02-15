import styled from 'styled-components';
import { LeftsideNav } from './Navbar';
import 'Component/style/util.scss';
import { theme } from 'Component/style/theme';

const LayoutSection = styled.section`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

const ContentsSection = styled.section`
	width: ${theme.ContentsSection.width};
	height: 100vh;
	overflow-y: scroll;
	margin-left: ${theme.ContentsSection.gap};
	padding: ${theme.ContentsSection.padding};
	background-color: #fcfcfc;
`;

export const Layout = props => (
	<LayoutSection>
		<LeftsideNav theme={theme} />
		<ContentsSection theme={theme}>{props.children}</ContentsSection>
	</LayoutSection>
);
