import styled from 'styled-components';

import { rem, variables } from './Theme';

interface IStyledContainerProps {
	boxSizing?: string;
}

const StyledContainer = styled.div<IStyledContainerProps>`
	max-width: ${({ theme }) => rem(theme.containerWidth)};
	width: 100%;
	box-sizing: ${({ boxSizing }) => boxSizing || 'content-box'};
	margin: 0 auto;
	padding: 0 ${() => rem(variables.containerPadding)};
`;

export default StyledContainer;
