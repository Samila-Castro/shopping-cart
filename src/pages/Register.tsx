import {
  Avatar,
  Button,
  Fab,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { purple, red } from "@mui/material/colors";
import ParticlesBg from "particles-bg";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export function Register() {
  return (
    <Box>
      <ParticlesBg type="color" bg={true} num={200} />
      <RegisterForm />
    </Box>
  );
}

const Box = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
