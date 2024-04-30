import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 6s;
  border-radius: 3px;
`;

const Side = styled.div<{ $variant: string }>`
  background-color: var(--blazing-orange);
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  box-shadow: inset 0 0 10px var(--fiery-red);
  overflow: hidden;
  text-align: center;
  transform-origin: center;
  color: #fff;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-template-areas:
    "a . c"
    "e g f"
    "d . b";

  ${({ $variant }) => {
    switch ($variant) {
      case "front":
        return `transform: rotateY(0deg) translateZ(25px);
                & :first-child {
                    grid-area: g;
                }`;
      case "back":
        return `transform: rotateY(180deg) translateZ(25px);
                & :nth-child(1) {
                    grid-area: a;
                    }
                & :nth-child(2) {
                    grid-area: b;
                }`;
      case "right":
        return `transform: rotateY(90deg) translateZ(25px);
                & :nth-child(1) {
                    grid-area: a;
                }
                & :nth-child(2) {
                    grid-area: g;
                }
                & :nth-child(3) {
                    grid-area: b;
                }`;

      case "left":
        return `transform: rotateY(-90deg) translateZ(25px);
                & :nth-child(1) {
                    grid-area: a;
                }
                & :nth-child(2) {
                    grid-area: d;
                }
                & :nth-child(3) {
                    grid-area: c;
                }
                & :nth-child(4) {
                    grid-area: b;
                }`;
      case "top":
        return `transform: rotateX(90deg) translateZ(25px);
                & :nth-child(1) {
                    grid-area: a;
                }
                & :nth-child(2) {
                    grid-area: c;
                }
                & :nth-child(3) {
                    grid-area: g;
                }
                & :nth-child(4) {
                    grid-area: d;
                }
                & :nth-child(5) {
                    grid-area: b;
                }`;
      case "bottom":
        return `transform: rotateX(-90deg) translateZ(25px);
                & :nth-child(1) {
                    grid-area: a;
                }
                & :nth-child(2) {
                    grid-area: c;
                }
                & :nth-child(3) {
                    grid-area: e;
                }
                & :nth-child(4) {
                    grid-area: f;
                }
                & :nth-child(5) {
                    grid-area: d;
                }

                & :nth-child(6) {
                    grid-area: b;
                }`;
    }
  }}
`;

const Dot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
`;

const min = 1;
const max = 24;

function getRandom(max: number, min: number) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}

export default function Dice() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    const xRand = getRandom(max, min);
    const yRand = getRandom(max, min);

    setRotation({ x: xRand, y: yRand });
  };
  return (
    <Container>
      <Cube
        onClick={handleClick}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <Side $variant="front">
          <Dot />
        </Side>
        <Side $variant="back">
          <Dot />
          <Dot />
        </Side>
        <Side $variant="right">
          <Dot />
          <Dot />
          <Dot />
        </Side>
        <Side $variant="left">
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Side>
        <Side $variant="top">
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Side>
        <Side $variant="bottom">
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Side>
      </Cube>
    </Container>
  );
}
