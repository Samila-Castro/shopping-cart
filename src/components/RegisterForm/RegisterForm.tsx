import styled from "styled-components";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { passwordValidate, emailValidate } from "../../script";
import { Avatar, Button, Fab, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { purple, red } from "@mui/material/colors";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState } from "react";

export const RegisterForm: React.FC = () => {
  const [errors, setErrors] = useState({
    password: "",
    passwordConfirmed: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const submit = () => {};
  const handlePasword = (value: string) => {
    const isValid = passwordValidate(value);
    setPassword(value);
    setErrors({ ...errors, password: "" });

    if (!isValid) {
      setErrors({
        ...errors,
        password:
          "Minimo 1 número, 1 letra minuscula, 1 maiuscula e algum caractere especial",
      });
    }
  };

  const handleEmail = (value: string) => {
    const isValid = emailValidate(value);
    setEmail(value);
    setErrors({ ...errors, email: "" });

    if (!isValid) {
      setErrors({
        ...errors,
        email: "Siga o padrão da assinatura de email",
      });
    }
  };
  const handleConfirmPassword = (value: string) => {
    setPasswordConfirmed(value);
    const isValid = password === value;
    setErrors({ ...errors, passwordConfirmed: "" });

    if (!isValid) {
      setErrors({ ...errors, passwordConfirmed: "Devem ser iguais" });
    }
  };
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
          label="email"
          variant="outlined"
          type="email"
          onChange={(e) => {
            handleEmail(e.target.value);
          }}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField label="username" variant="outlined" />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          onChange={(e) => {
            handlePasword(e.target.value);
          }}
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label="confirm password"
          variant="outlined"
          type="password"
          error={!!errors.passwordConfirmed}
          helperText={errors.passwordConfirmed}
          onChange={(e) => {
            handleConfirmPassword(e.target.value);
          }}
        />

        <Button
          variant="contained"
          color="success"
          onClick={submit}
          disabled={
            !password ||
            !passwordConfirmed ||
            !!errors.password ||
            !!errors.passwordConfirmed
          }
        >
          <Link to={`/`}>Sign in</Link>
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
          Already Register?
        </Typography>
        <Link to={`/login`}> Login Here.</Link>
      </LinkBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fffbf4;
  height: auto;
  padding: 1rem;
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
