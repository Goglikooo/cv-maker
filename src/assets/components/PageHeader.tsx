import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  header: string;
  pageNumber: string;
  link: string;
}

export default function PageHeader(props: Props) {
  const { header, pageNumber, link } = props;

  return (
    <InputHeadingContainer>
      <GoBack
        to={link}
        onClick={() => {
          sessionStorage.clear();
        }}
      >
        &#60;
      </GoBack>
      <InputHeading>{header}</InputHeading>
      <HeaderParahraph>{pageNumber}</HeaderParahraph>
    </InputHeadingContainer>
  );
}

const GoBack = styled(Link)`
  position: absolute;
  left: -90px;
  top: 0px;
  font-family: "HelveticaNeue";
  font-size: 20px;
  height: 40px;
  width: 40px;
  text-decoration: none;
  align-self: flex-start;
  text-align: center;
  margin: 15px 20px 0px 20px;
  height: 30px;
  width: 40px;
  border-radius: 100px;
  border: none;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const InputHeadingContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1.3px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  position: relative;
`;

const InputHeading = styled.h2`
  font-family: "HelveticaNeue";
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;

const HeaderParahraph = styled.p`
  font-family: "HelveticaNeue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
`;
