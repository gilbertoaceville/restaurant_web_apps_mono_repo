import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCommentAlt } from "react-icons/fa";

const RatingPercentage = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p,
  label {
    margin: 0;
    padding: 0;
  }

  .comment-section {
    position: relative;
    top: 2px;
  }

  .comments-number {
    color: #ffffff;
    font-size: 9px;
    position: absolute;
    top: 10%;
    left: 60%;
    ${'' /* transform: translate(-70%, -10%); */}
  }

  @media(max-width: 750px) {
    width: 98%;
  }
`;

const ProgressBarContainer = styled.div`
  height: 5px;
  width: 80%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 5px 3px;
`;

const FillerStyles = styled.div`
  height: 100%;
  width: ${({ completed }) => (completed ? `${completed}%` : "0%")};
  background-color: #f38b1c;
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
`;

const LabelStyles = styled.span`
  color: #000000;
  font-size: 10px;
`;

const ProgressBar = (props) => {
  const { completed, noOfStars = 5, noOfRating = 36, noOfComments = 3 } = props;

  const [complete, setComplete] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(completed);
    }, []);

    return () => clearTimeout(timer);
  });
  return (
    <RatingPercentage>
      <LabelStyles>{noOfStars} star{noOfStars > 1 && "s"}</LabelStyles>
      <ProgressBarContainer>
        <FillerStyles completed={complete} />
      </ProgressBarContainer>
      <LabelStyles>{noOfRating}</LabelStyles>
      <div className="comment-section">
        <FaCommentAlt
          color="#696969"
          fontSize={12}
          style={{ marginLeft: "10px" }}
        />
        <label className="comments-number">{noOfComments}</label>
      </div>
    </RatingPercentage>
  );
};

export default ProgressBar;
