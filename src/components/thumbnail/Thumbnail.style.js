import styled from "styled-components/macro";

export const ThumbnailWrapperStyle = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid #e7e9ec;
  border-radius: 5%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    border-radius: 10%;
  }
`;

export const ThumbnailImgStyle = styled.div`
  width: 100%;
  height: 50%;
  flex-basis: 50%;
  max-height: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
`;

export const ThumbnailDescStyle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;

  div {
    text-overflow: ellipsis;
  }
`;

export const ThumbnailTitleStyle = styled.h2`
  color: #282c34;
  height: 20%;
  font-size: 18px;
`;

export const ThumbnailLinkStyle = styled.span`
  margin-left: auto;
  margin-right: 24px;

  a {
    text-decoration: none;
    color: #282c34;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
