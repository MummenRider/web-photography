import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: rgb(240, 238, 236);
  padding: 14vh 0 8vh 0;
  position: relative;
  flex-wrap: wrap;
  &::before {
    content: "";
    display: ${(props) => (props.isMobile ? "block" : "none")};
    position: absolute;
    top: -1%;
    left: 50%;
    transform: translate(-50%, 1%);
    width: 0;
    height: 0;
    border-top: 6vh solid #dbd8c7;
    border-left: 3vh solid transparent;
    border-right: 3vh solid transparent;
  }

  & > * {
    flex: 1 0 50%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div``;
export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 125%;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
`;

export const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: var(--ff-secondary);
  font-size: 4.2rem;
  font-weight: lighter;
  text-align: left;
  line-height: 1.2;
  padding: 5rem 0 1rem 0;

  @media screen and (min-width: 768px) {
    font-size: clamp(3.2rem, 5vw, 32rem);
    padding: 0;
  }
`;

export const SubTitle = styled.p`
  font-family: var(--ff-primary);
  font-size: clamp(1.5rem, 1.2vw, 7.8rem);
  margin-bottom: 10%;
  span {
    color: #9a6130;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  font-family: var(--ff-primary);
  counter-reset: counterName;
`;

export const Item = styled.p`
  font-size: clamp(1.2rem, 0.8vw, 5.2rem);
  font-weight: 200;
  margin: 2em 0;
  position: relative;
  left: 10%;
  padding-left: 2em;
  &::before {
    counter-increment: counterName;
    content: "0" counter(counterName) ". ";
    font-size: clamp(1rem, 0.8vw, 4.5rem);
    position: absolute;
    left: -10%;
  }
`;

export const Wrapper = styled.div``;

export const ContactBtn = styled.button`
  cursor: pointer;
  background-color: #9a6130;
  border: none;
  font-family: var(--ff-primary);
  font-size: clamp(1rem, 1vw, 6rem);
  font-weight: 400;
  padding: 1.4em 1em;
  width: 40%;
  min-width: 100px;
  position: relative;
  margin-top: 5%;
  margin-left: 4.5em;
  box-shadow: rgba(17, 17, 26, 0.33) 0px 4px 16px,
    rgba(17, 17, 26, 0) 0px 8px 32px;

  &::before {
    position: absolute;
    left: 120%;
    font-size: clamp(0.9rem, 0.5vw, 5rem);
    width: 100%;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-weight: 200;

    width: 80%;
    min-width: 100px;
    content: "Lorem ipsum dolor sit amet,
consetetu";
  }
`;

export const SvgInner = styled.div`
  position: absolute;
  bottom: -0.15%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 15.36vh;
  }

  path {
    fill: #111112;
  }
`;
export const SvgWave = styled.div`
  margin-top: 15em;
`;
