import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import { useOnScreen } from '../../../common/hooks';
import { FlipImage } from '../../../common/components/FlipImage';

export const Projects: React.FC = () => {
  const tod2 = useRef<HTMLDivElement>(null);
  const tod2Visible = useOnScreen(tod2, { threshold: 0.9 });
  const candidate = useRef<HTMLDivElement>(null);
  const candidateVisible = useOnScreen(candidate, { threshold: 0.9 });
  const meltingpot = useRef<HTMLDivElement>(null);
  const meltingpotVisible = useOnScreen(meltingpot, { threshold: 0.9 });
  return (
    <Container>
      <div style={{ width: '300px', height: '300px' }}>
        <FlipImage
          src={'/images/tome-of-d2.png'}
          title={'Tome of D2'}
          content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
          showHint={true}
        />
      </div>
      {/*<ProjectWrapper ref={tod2}>*/}
      {/*  <ProjectLogo src={'/images/tome-of-d2.png'} />*/}
      {/*  <ProjectDescription visible={tod2Visible && !candidateVisible}>*/}
      {/*    <div className={'title'}>Tome of D2</div>*/}
      {/*    <div className='body'>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />*/}
      {/*      A amet architecto cumque debitis dicta, eligendi esse explicabo <br />*/}
      {/*      illo illum impedit in iure minus molestiae nisi pariatur provident <br />*/}
      {/*      quam quasi quidem quos repellendus sed sequi suscipit tempora*/}
      {/*    </div>*/}
      {/*  </ProjectDescription>*/}
      {/*</ProjectWrapper>*/}

      {/*<ProjectWrapper ref={candidate} reverse={true}>*/}
      {/*  <ProjectLogo src={'/images/tome-of-d2.png'} />*/}
      {/*  <ProjectDescription visible={candidateVisible && !meltingpotVisible}>*/}
      {/*    <div className={'title'}>Tome of D2</div>*/}
      {/*    <div className='body'>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />*/}
      {/*      A amet architecto cumque debitis dicta, eligendi esse explicabo <br />*/}
      {/*      illo illum impedit in iure minus molestiae nisi pariatur provident <br />*/}
      {/*      quam quasi quidem quos repellendus sed sequi suscipit tempora*/}
      {/*    </div>*/}
      {/*  </ProjectDescription>*/}
      {/*</ProjectWrapper>*/}

      {/*<ProjectWrapper ref={meltingpot}>*/}
      {/*  <ProjectLogo src={'/images/tome-of-d2.png'} />*/}
      {/*  <ProjectDescription visible={meltingpotVisible}>*/}
      {/*    <div className={'title'}>Tome of D2</div>*/}
      {/*    <div className='body'>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />*/}
      {/*      A amet architecto cumque debitis dicta, eligendi esse explicabo <br />*/}
      {/*      illo illum impedit in iure minus molestiae nisi pariatur provident <br />*/}
      {/*      quam quasi quidem quos repellendus sed sequi suscipit tempora*/}
      {/*    </div>*/}
      {/*  </ProjectDescription>*/}
      {/*</ProjectWrapper>*/}
    </Container>
  );
};

const Container = styled.div`
  //width: 100%;
  background-color: #001220;
  padding: 1rem 6rem;
  max-width: 100%;
  overflow: hidden;
`;

const ProjectWrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'reverse')};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  height: 30vh;
  gap: 2rem;

  &:before {
    width: 0;
    content: '';
  }
`;

const ProjectLogo = styled.img`
  height: 60%;
  aspect-ratio: 1 /1;
  background: white;
  border-radius: 30px;
`;

const ProjectDescription = styled.div<{ visible: boolean }>`
  height: 100%;
  width: ${props => (props.visible ? '100%' : 0)};
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  transition: all 1s ease-in-out;

  .title {
    font-size: 2.2rem;
  }

  .body {
    font-size: 1.6rem;
    width: 100%;
    overflow: hidden;
  }
`;
