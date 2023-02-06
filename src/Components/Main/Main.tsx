import React from 'react';

import Container from '../../StyledComponents/Container';

import { MainStyled } from './Main.styled';
import PlaceOrder from './PlaceOrder/PlaceOrder';

function Main() {
	return (
		<MainStyled>
			<Container>
				<PlaceOrder />
			</Container>
		</MainStyled>
	);
}

export default Main;
