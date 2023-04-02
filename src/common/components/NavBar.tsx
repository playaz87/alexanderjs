import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

export const NavBar: React.FC = () => {
  const [active, setActive] = useState(1);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [hoverIndicatorLeft, setHoverIndicatorLeft] = useState<number>();
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const prevScrollY = useRef(0);
  const home = useRef<HTMLLIElement>(null);
  const projects = useRef<HTMLLIElement>(null);
  const skills = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
    window.addEventListener('resize', () => {
      calcIndicatorPosition();
    });
  }, []);

  useEffect(() => {
    if (scrollY < 200) {
      return setVisible(true);
    }

    if (scrollY - prevScrollY.current >= 20) {
      setVisible(false);
      prevScrollY.current = scrollY;
    } else if (scrollY - prevScrollY.current <= -20) {
      setVisible(true);
      prevScrollY.current = scrollY;
    }
  }, [scrollY]);

  useLayoutEffect(() => {
    calcIndicatorPosition();
  }, [active]);

  const calcIndicatorPosition = () => {
    const el = active === 1 ? home : active === 2 ? projects : skills;

    if (el.current) {
      const bounds = el.current.getBoundingClientRect();
      setIndicatorLeft(bounds.left + bounds.width / 2);
    }
  };

  const onMouseOver = (e?: React.MouseEvent<HTMLLIElement>) => {
    const bounds = e?.currentTarget.getBoundingClientRect();
    if (bounds) {
      setHoverIndicatorLeft(bounds.left + bounds.width / 2);
    } else {
      setHoverIndicatorLeft(undefined);
    }
  };

  useEffect(() => {
    console.log(hoverIndicatorLeft);
  }, [hoverIndicatorLeft]);

  return (
    <Container visible={visible}>
      <Wrapper>
        <NavWrapper>
          <NavItem ref={home} onClick={() => setActive(1)} onMouseOver={onMouseOver} onMouseLeave={() => setHoverIndicatorLeft(undefined)}>
            Home
          </NavItem>
          <NavItem
            ref={projects}
            onClick={() => setActive(2)}
            onMouseOver={onMouseOver}
            onMouseLeave={() => setHoverIndicatorLeft(undefined)}
          >
            Projects
          </NavItem>
          <NavItem
            ref={skills}
            onClick={() => setActive(3)}
            onMouseOver={onMouseOver}
            onMouseLeave={() => setHoverIndicatorLeft(undefined)}
          >
            Skills
          </NavItem>
        </NavWrapper>
        <ActiveIndicator x={indicatorLeft} />
        <HoverIndicator x={hoverIndicatorLeft ?? indicatorLeft} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<{ visible: boolean }>`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transform: translateY(${props => (props.visible ? 0 : -100)}%);
  transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const NavWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2em;
  font-size: 1.2em;
  background-color: transparent;
  color: #25b939;
  cursor: pointer;
  z-index: 102;
  margin-bottom: 6px;
  user-select: none;
  font-family: BlackHans, sans-serif;
  font-weight: 200;
`;

const Indicator = styled.div<{ x?: number }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  transition: all 0.3s ease-in-out;
  transform: translateX(${props => (props.x ?? 0) - 5}px);
`;

const ActiveIndicator = styled(Indicator)`
  background: #25b939;
  z-index: 101;
`;

const HoverIndicator = styled(Indicator)`
  background: radial-gradient(#98bd9e, #4e6c51);
  z-index: 100;
`;
