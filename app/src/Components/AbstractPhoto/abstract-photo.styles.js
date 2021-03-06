import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 50%;
  background-color: #dbd8c7;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 20%;
    flex-direction: row;
    padding: 6% 0 25% 0;
  }

  @media screen and (min-width: 1400px) {
    padding: 6% 0 15% 0;
  }
`;

export const LeftBlock = styled.div``;

export const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 31vw;
    padding-top: 10%;
  }
`;

export const RightBlock = styled(motion.div)`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const ImageItem = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
  width: 100%;
  padding-top: ${(props) => props.padTop};
`;

export const Title = styled.h1`
  /* font-family: var(--ff-secondary); */
  font-family: broadacre-thin-1, sans-serif;
  font-size: 4rem;
  font-weight: 200;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: clamp(3rem, 2.8vw, 16rem);
    font-weight: 100;
  }
`;

export const Description = styled.p`
  font-family: var(--ff-primary);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8;
  letter-spacing: 1.1px;
  text-align: center;
  padding: 5% 10% 10% 10%;

  @media screen and (min-width: 768px) {
    font-size: clamp(0.8rem, 0.6vw, 6rem);
  }

  @media screen and (min-width: 1100px) {
    padding: 10%;
  }

  @media screen and (min-width: 1100px) {
    width: 70%;
    align-self: center;
  }
`;
export const Divider = styled.div`
  position: relative;
  left: 30%;

  margin: 20% 0 15% 0;
  min-height: 0.03%;
  width: 40%;
  background-color: #5b5b5b;
  transform: rotate(-45deg);
`;

export const ImageBlockOne = styled(motion.div)`
  position: absolute;
  top: -42%;
  right: 0%;
  width: 12vw;
`;
export const ImageBlockTwoInner = styled(motion.div)``;
export const ImageBlockTwo = styled(motion.div)`
  position: relative;
  top: -20%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 50vw;

  @media screen and (min-width: 768px) {
    transform: none;
    top: 12%;
    left: 0;
    width: 30vw;
    padding-left: 10%;
  }
`;

export const ImageBlockThree = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: -60%;
  width: 13vw;

  @media screen and (min-width: 1400px) {
    right: -30%;
    bottom: -32%;
  }
`;
