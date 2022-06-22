import React from "react";
import styled from "styled-components";
import ThankYouImage from "../illustration-thank-you.svg";
const Wrapper = styled.div`
  padding: 30px;
  background: hsl(213, 19%, 18%, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  text-align: center;
`;
const RatingShow = styled.div`
  font-size: 0.9rem;
  background: hsl(217, 12%, 63%, 0.1);
  margin-top: 2rem;
  color: hsl(25, 97%, 53%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0px 20px;
  border-radius: 15px;
`;
const Heading = styled.h1`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-weight: 700;
`;
const Paragraph = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 1rem;
  color: hsl(216, 12%, 54%);
  line-height: 1.5rem;
`;
const Image = styled.img`
  height: 100px;
`;
function Thanks({ rating }) {
  return (
    <Wrapper>
      <Image src={ThankYouImage} />
      <RatingShow>You selected {rating} out of 5</RatingShow>
      <Heading>Thank You!</Heading>
      <Paragraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support don't hesitate to get in touch!
      </Paragraph>
    </Wrapper>
  );
}

export default Thanks;
