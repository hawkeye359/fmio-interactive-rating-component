import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../icon-star.svg";
import Thanks from "./Thanks";
const Wrapper = styled.div`
  padding: 30px 30px;
  padding-right: 35px;
  background: #1e252f;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  width: 375px;
`;
const Star = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background: hsl(217, 12%, 63%, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StarImage = styled.img`
  height: 15px;
  width: 15px;
`;
const Heading = styled.h1`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 700;
`;
const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-top: 0.5rem;
  color: hsl(216, 12%, 54%);
  line-height: 1.4rem;
`;
const SubmitButton = styled.button`
  background: hsl(25, 97%, 53%);
  line-height: 1.5rem;
  border: none;
  margin-top: 2.2rem;
  font-size: 0.8rem;
  padding: 5px;
  padding-top: 7px;
  border-radius: 24px;
  height: 40px;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;
  &:hover {
    background: white;
    color: hsl(25, 97%, 53%);
  }
  &:active {
    background: hsl(25, 97%, 53%);
    color: white;
  }
`;
const RatingPointContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
const RatingPoint = styled.div`
  height: 43px;
  width: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262f38;
  border-radius: 25px;
  color: hsl(217, 12%, 63%);
  cursor: pointer;
  &:hover {
    background: hsl(25, 97%, 53%);
    color: white;
  }
`;
const RatingPointActive = styled(RatingPoint)`
  background: hsl(217, 12%, 63%);
  color: white;
`;

function Rating() {
  const [active, setActive] = useState(null);
  const [given, setGiven] = useState(false);
  if (given) {
    return <Thanks rating={active} />;
  }
  return (
    <Wrapper>
      <Star>
        <StarImage alt="just a star" src={image} />
      </Star>
      <Heading>How did we do?</Heading>
      <Paragraph>
        {" "}
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering
      </Paragraph>
      <RatingPointContainer>
        {[1, 2, 3, 4, 5].map((item) => {
          if (item === active) {
            return <RatingPointActive key={item}>{item}</RatingPointActive>;
          } else {
            return (
              <RatingPoint
                onClick={() => {
                  setActive(item);
                }}
                key={item}
              >
                {item}
              </RatingPoint>
            );
          }
        })}
      </RatingPointContainer>
      <SubmitButton
        disabled={!active}
        onClick={() => {
          setGiven(true);
        }}
      >
        SUBMIT
      </SubmitButton>
    </Wrapper>
  );
}

export default Rating;
