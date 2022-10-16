import styled from 'styled-components'


const Wrapper = styled.main`
text-align: center;
img {
  width: 90vw;
  max-width: 600px;
  display: block;
  margin-bottom: 2rem;
}
display: flex;
align-items: center;
justify-content: center;
h3 {
  margin-bottom: .5rem;
}
p {
  margin-top: 0;
  margin-bottom: .5rem;
  color: var(--clr-grey-500);
}
a {
  color: var(--clr-primary-5);
  text-decoration: underline;
  text-transform: capitalize;
}
`;

export default Wrapper