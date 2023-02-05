import styled from "styled-components";

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
  }
`

export default FooterWrapper
