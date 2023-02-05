import styled from "styled-components";

interface IFlexProps {
  justify: string,
  align: string,
  columnGap?: string,
  flex?: string;
  position?: string,
}

const Flex = styled.div<IFlexProps>`
  position: ${({position}) => position || 'static'};
  display: flex;
  justify-content: ${({justify}) => justify || 'stretch'};
  align-items: ${({align}) => align || 'stretch'};
  column-gap: ${({columnGap}) => columnGap || '0'};
  flex: ${({flex}) => flex || 'unset'};
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export default Flex
