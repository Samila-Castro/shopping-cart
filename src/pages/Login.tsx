import ParticlesBg from "particles-bg";
import styled from "styled-components";
import { Form } from "../components/Form";

export function Login() {
  return (
    <Box>
      <ParticlesBg type="color" bg={true} num={200} />
      <Form />
    </Box>
  );
}

const Box = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
