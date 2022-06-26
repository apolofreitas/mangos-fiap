import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "~/components/Logo";

export const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate("/home");
  };

  return (
    <Stack alignItems="center" padding={2}>
      <Logo />
      <Typography marginTop={8} variant="h5">
        faça seu login
      </Typography>
      <Stack spacing={1} marginTop={8} width="100%" maxWidth="288px">
        <Stack spacing={2}>
          <TextField label="nome de usuário ou email" fullWidth />
          <TextField label="senha" type="password" fullWidth />
        </Stack>
        <Link variant="caption" paddingBottom={2}>
          esqueci minha senha
        </Link>
        <Stack spacing={1}>
          <Button size="large" fullWidth onClick={signIn}>
            entrar
          </Button>
          <Button size="large" variant="outlined" fullWidth onClick={signIn}>
            criar conta
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
