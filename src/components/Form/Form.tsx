import styled from "styled-components";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Fab,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { purple, red } from "@mui/material/colors";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface FormProps {
  src?: string;
}

export const Form: React.FC<FormProps> = ({ src }) => {
  return (
    <Wrapper>
      <AvatarBox>
        <Avatar variant="rounded" sx={{ bgcolor: purple[500] }}>
          <PersonOutlineOutlinedIcon />
        </Avatar>
      </AvatarBox>
      <Box
        padding={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          type="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />

        <Button variant="contained" color="success">
          Sign in
        </Button>

        <ButtonsBox>
          <Fab size="small" aria-label="add">
            <GoogleIcon sx={{ color: red[300] }} />
          </Fab>
          <Fab size="small" sx={{ color: "black" }} aria-label="add">
            <GitHubIcon sx={{ color: "black" }} />
          </Fab>
        </ButtonsBox>
      </Box>
      <LinkBox>
        <Typography variant="body2" color="black">
          New Here?
        </Typography>
        <Link to={`/register`}> Create an account.</Link>
      </LinkBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fffbf4;
  height: auto;
  padding: 1rem;
  min-width: 2rem;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
`;
