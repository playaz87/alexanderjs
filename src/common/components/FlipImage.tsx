import React, {useEffect, useState} from 'react';
import styled, {css, keyframes} from 'styled-components/macro';

interface Props {
  src: string;
  title: string;
  content: string;
  showHint?: boolean;
}

export const FlipImage: React.FC<Props> = ({src, title, content, showHint}) => {
  const [hovering, setHovering] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

  useEffect(() => {
    if (hovering) {
      setHasHovered(true);
    }
  }, [hovering]);

  return (
    <Container onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} showHint={showHint}
               hasHovered={hasHovered}>
      <div>{title}</div>
      <Top content={content} src={src} hovering={hovering}/>
      <Bottom src={src}/>
    </Container>
  );
};

const hoveranimate = keyframes`
  0% {
    transform: translate(0, 0);
  }
  33.3% {
    transform: translate(-30%, 30%);
  }
  66.6% {
    transform: translate(30%, 30%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Container = styled.div<{ showHint?: boolean; hasHovered: boolean }>`
  width: 100%;
  height: 100%;
  border: 5px solid white;
  position: relative;
  perspective: 1500px;
  background: #001220;
  border-radius: 14px;
  color: white;

  > div:first-of-type {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    font-size: 3rem;
    font-family: BlackHans sans-serif;
  }

  ${({showHint, hasHovered}) => showHint && !hasHovered && css`
    &:before {
      content: '';
      position: absolute;
      right: -5px;
      top: -5px;
      background-color: rgb(0 0 0 /0.3);
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      z-index: 100;
      border-radius: 14px;
    }
    
    &:after {
      content: '';
      position: absolute;
      right: 5%;
      top: 5%;
      width: 20%;
      height: 20%;
      
      background-image: url("/images/hover-click-icon.svg");
      background-size: contain;
      background-repeat: no-repeat;
      animation: ${hoveranimate} 4s linear infinite;
      z-index: 101;
    }
  `}
`;

const Top = styled.div<{ src: string; content: string; hovering: boolean }>`
  height: 50%;
  transition: all 0.5s ease-out;
  transform: rotateX(${props => props.hovering ? -180 : 0}deg);
  transform-origin: 0 100%;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  border-radius: 14px;

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
    background: #001220;
    height: 100%; /*has to be 100% of .top */
    //padding: 0 40px;
    transform: rotateX(180deg);
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
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
