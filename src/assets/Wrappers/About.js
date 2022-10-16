import styled from 'styled-components';

const Wrapper = styled.article`
min-height: calc(100vh - 6rem);
display: grid;
place-items: center;
div{
  text-align: left;
  margin: 3rem auto;
  justify-items: center;
}
h2 {
  color: var(--clr-secondary-3);
}
p {
  letter-spacing: 1px;
  max-width:40em;
}
a {
  text-transform: capitalize;
  font-size: 1.3rem;
  text-decoration: underline;
  color: var(--clr-secondary-2);
  font-weight: 700;
  transition: var(--transition);
  :hover{
    opacity:.7;
  } 
}
`;

export default Wrapper;