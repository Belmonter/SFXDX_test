import React from 'react';

import whiteSpinner from '../../assets/img/gif/whiteSpinner.gif';

import StyledSpinner from './Spinner.styled';

function Spinner() {
	return <StyledSpinner src={whiteSpinner} alt={'spinner'} />;
}

export default Spinner;
