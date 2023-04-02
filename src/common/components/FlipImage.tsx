import React, {useState} from 'react';
import styled from 'styled-components/macro';

interface Props {
  src: string;
  title: string;
  content: string;
}

export const FlipImage: React.FC<Props> = ({ src, title, content }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Container onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <div>{title}</div>
      <Top content={content} src={src} hovering={hovering} />
      <Bottom src={src} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid white;
  position: relative;
  perspective: 1500px;
  background: yellow;

  >div:first-of-type {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #333;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    font-size: 3rem;
    font-family: BlackHans sans-serif;
  }
`;

const Top = styled.div<{ src: string; content: string; hovering: boolean }>`
  height: 50%;
  transition: all 0.5s ease-out;
  transform: rotateX(${props => props.hovering ? -180 : 0}deg);
  transform-origin: 0 100%;
  transform-style: preserve-3d;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 10;

  &:before {
    content: '';
    background-image: url(${props => props.src});
    background-size: 100% 200%;
    background-position: top;
    background-repeat: no-repeat;
    background-color: white;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
  }

  &:after {
    content: '${props => props.content}';
    background: yellow;
    height: 100%; /*has to be 100% of .top */
    //padding: 0 40px;
    transform: rotateX(180deg);
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
  }
  //
  //&:hover {
  //  transform: rotateX(-180deg);
  //}
`;

const Bottom = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-position: bottom;
  background-size: 100% 200%;
  background-repeat: no-repeat;
  background-color: white;
  height: 50%;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 0;
`;
