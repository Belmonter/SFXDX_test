import React from 'react';
import {StyledDynamicBackground} from './DynamicBackground.styled'
import ellipse_1 from '../../assets/img/svg/Ellipse_1.svg'
import ellipse_2 from '../../assets/img/svg/Ellipse_2.svg'
import ellipse_3 from '../../assets/img/svg/Ellipse_3.svg'
import ellipse_4 from '../../assets/img/svg/Ellipse_4.svg'

interface DynamicBackgroundProps {
  children: JSX.Element,
}

function DynamicBackground(props: DynamicBackgroundProps) {

  return (
    <StyledDynamicBackground>
      <img className={'Ellipse1'} src={ellipse_1} alt={'ellipse'}/>
      <img className={'Ellipse2'} src={ellipse_2} alt={'ellipse'}/>
      <img className={'Ellipse3'} src={ellipse_3} alt={'ellipse'}/>
      <img className={'Ellipse4'} src={ellipse_4} alt={'ellipse'}/>
      {props.children}
    </StyledDynamicBackground>
  );
}

export default DynamicBackground;
