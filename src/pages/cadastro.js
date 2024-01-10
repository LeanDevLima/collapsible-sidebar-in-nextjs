import React from "react";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  borderRadius: 20,
  "&:hover": {
    backgroundColor: "#10b981",
  },
});

const Configuracoes = () => {
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h2">Cadastro</Typography>

        {/* Formulário de Cadastro */}
        <form>
          <TextField
            label="Nome da Empresa"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Nome Exibido na Plataforma e em E-mails Enviados"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Número de Funcionários"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="CNPJ"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Razão Social"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Segmento de Atuação"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Representante"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Telefone"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="WhatsApp"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <StyledButton type="submit" variant="contained" color="primary">
            Enviar
          </StyledButton>
        </form>
      </Container>
    </BaseLayout>
  );
};

export default Configuracoes;
