import styled from 'styled-components';

const Wrapper = styled.nav`
padding: 1rem 1.5rem;
background: var(--clr-white);
box-shadow: var(--shadow-2);
.nav-center {
  text-align: center;
}
h4 {
  animation: bounce 3s linear infinite;
}
span {
  color: var(--clr-secondary-5);
}
`;

export default Wrapper;