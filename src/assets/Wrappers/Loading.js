import styled from 'styled-components';

const Wrapper = styled.div`
.loading {
   width: 6rem;
  height: 6rem;
  border: 5px solid var(--grey-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 2s linear infinite;
}
.loading-center {
  margin: 0 auto;
}`;

export default Wrapper