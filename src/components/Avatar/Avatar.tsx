import styled from "styled-components";

interface AvatarProps {
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return <ImgAvatar src={src} />;
};

const ImgAvatar = styled.img`
  box-sizing: initial;
  
  height: 2.5rem;
  border-radius: 50%;
  border: 4px solid #202024;
  outline: 2px solid #C71D1D;
  }`;
