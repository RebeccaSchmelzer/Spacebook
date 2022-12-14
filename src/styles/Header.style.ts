import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  
  background-color: var(--bg-white);
  position: sticky;
  z-index: 1;
  top: 0;
  border-bottom: 1px solid var(--light-grey);
  .container {
    max-width: 614px;
    height: 56.5px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    gap: 1rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  @media (max-width: 614px) {
    .container {
      padding: 0 1rem;
    }
  }
`;