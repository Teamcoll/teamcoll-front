import styled from 'styled-components';
import { loremipsum } from 'Component/map';
const Header = styled.h2`
	margin: 0px;
	font-size: 2em;
`;

const Index = () => {
	return (
		<>
			<Header>Index Page</Header>
			<p>{loremipsum}</p>
			<p>{loremipsum}</p>
			<p>{loremipsum}</p>
			<p>{loremipsum}</p>
		</>
	);
};

export default Index;
