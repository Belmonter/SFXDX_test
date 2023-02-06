import React from 'react';

import Wrapper from '../../StyledComponents/Wrapper';
import DynamicBackground from '../DynamicBackground/DynamicBackground';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
	return (
		<>
			<Wrapper>
				<DynamicBackground>
					<>
						<Header />
						<Main />
					</>
				</DynamicBackground>
			</Wrapper>
			<Footer />
		</>
	);
}

export default App;
