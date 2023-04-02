import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Spacer } from '../../../common/components/styled';

export const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const sun = useRef<HTMLImageElement>(null);
  const reflection = useRef<HTMLImageElement>(null);
  const boat1 = useRef<HTMLImageElement>(null);
  const boat2 = useRef<HTMLImageElement>(null);
  const title = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
      console.log(window.innerHeight);
    });
  }, []);

  return (
    <Container>
      <Overlay opacity={1 / (window.innerHeight / scrollY)} />
      <Wrapper>
        <Background z={1} src={'/images/background-upper.png'} />
        <BackgroundEl z={10} src={'/images/background-lower.png'} />
        <BackgroundEl ref={sun} y={scrollY * 0.3} z={3} src={'/images/sun.png'} />
        <Reflection ref={reflection} transform={1 - 1 / (window.innerHeight / scrollY)} z={10} src={'/images/reflection.png'} />
        <BackgroundEl ref={boat1} z={11} x={scrollY * -0.8} src={'/images/boat1.png'} />
        <BackgroundEl ref={boat2} z={10} x={scrollY * 0.3} src={'/images/boat2.png'} />
        <Title ref={title} top={scrollY}>
          Alexander Sommerville
          <br />
          <span>web</span> & <span>hybrid app</span> developer
        </Title>
      </Wrapper>
      <Curve>
        <Spacer type={1} />
      </Curve>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  z-index: 13;
  overflow: hidden;
  height: 85vh;
  background: #f0c05e;
  position: relative;
`;

const Overlay = styled.div<{ opacity: number }>`
  background: linear-gradient(rgb(255 0 0 / ${props => (props.opacity < 0.7 ? props.opacity : 0.7)}), rgb(255 0 0 / 0) 180%);
  z-index: 15;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 90%;
`;

const BackgroundEl = styled.img<{ z: number; y?: number; x?: number }>`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(${props => props.x ?? 0}px, ${props => props.y ?? 0}px);
  z-index: ${props => props.z};
  transition: all ease 0.1s;
  object-fit: cover;
`;

const Background = styled(BackgroundEl)`
  position: relative;
`;

const Reflection = styled(BackgroundEl)<{ transform: number }>`
  transform: scale3d(${props => props.transform}, 1, ${props => props.transform});
`;

const Title = styled.div<{ top: number }>`
  width: 100%;
  text-align: center;
  font-size: clamp(2em, 3em, 5em);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(2em + ${props => props.top}px));
  z-index: 2;
  transition: all ease;
  text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.3);
  font-family: BlackHans, sans-serif;

  > span {
    font-family: Edu, sans-serif;
  }
`;

const Curve = styled.div`
  width: 100%;
  min-height: 15vh;
  z-index: 10;
`;
