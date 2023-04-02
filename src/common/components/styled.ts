import styled from 'styled-components/macro';

export const Spacer = styled.div<{ type: number }>`
  aspect-ratio: 9 / 3;
  width: 100%;
  background-image: url('/images/spacer-${props => props.type}.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
