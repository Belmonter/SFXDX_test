import styled, { keyframes } from 'styled-components';

const ellipseKeyFrame1 = keyframes`
  0% {
    top: 0;
    left: 0;
  }
  50% {
    top: 100%;
    left: 100%;
  }
  100% {
    top: 0;
    left: 0;
  }
`;

const ellipseKeyFrame2 = keyframes`
  0% {
    top: 0;
    right: 0;
  }
  50% {
    top: 100%;
    right: 100%;
  }
  100% {
    top: 0;
    right: 0;
  }
`;

const ellipseKeyFrame3 = keyframes`
  0% {
    bottom: 0;
    left: 0;
  }
  50% {
    bottom: 100%;
    left: 100%;
  }
  100% {
    bottom: 0;
    left: 0;
  }
`;

const ellipseKeyFrame4 = keyframes`
  0% {
    bottom: 0;
    right: 0;
  }
  50% {
    bottom: 100%;
    right: 100%;
  }
  100% {
    bottom: 0;
    right: 0;
  }
`;

export const StyledDynamicBackground = styled.div`
	position: relative;

	.Ellipse1 {
		display: block;
		object-fit: contain;
		position: absolute;
		border-radius: 50%;
		animation-duration: 37s;
		animation-name: ${ellipseKeyFrame1};
		animation-delay: 1s;
		animation-iteration-count: infinite;
		animation: 37s ${ellipseKeyFrame1} infinite;
		z-index: -1;
	}

	.Ellipse2 {
		display: block;
		object-fit: contain;
		position: absolute;
		border-radius: 50%;
		animation-duration: 35s;
		animation-name: ${ellipseKeyFrame2};
		animation-delay: 2s;
		animation-iteration-count: infinite;
		z-index: -1;
	}

	.Ellipse3 {
		display: block;
		object-fit: contain;
		position: absolute;
		border-radius: 50%;
		animation-duration: 30s;
		animation-name: ${ellipseKeyFrame3};
		animation-delay: 1s;
		animation-iteration-count: infinite;
		z-index: -1;
	}

	.Ellipse4 {
		display: block;
		object-fit: contain;
		position: absolute;
		border-radius: 50%;
		animation-duration: 33s;
		animation-name: ${ellipseKeyFrame4};
		animation-delay: 3s;
		animation-iteration-count: infinite;
		z-index: -1;
	}
`;
