import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Documentos = () => {
  const [tabValue, setTabValue] = useState("todos");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <BaseLayout>
      <Container>
      <Typography variant="h2">Documentos</Typography>
        <Paper>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value="todos" label="Todos" />
            <Tab value="emProcesso" label="Em processo" />
            <Tab value="finalizados" label="Finalizados" />
          </Tabs>
        </Paper>

        {/* Conteúdo do formulário para a aba selecionada */}
        {tabValue === "todos" && (
          <form>
            <TextField label="Nome do Documento" variant="outlined" fullWidth margin="normal" />
            {/* Outros campos*/}
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}

        {tabValue === "emProcesso" && (
          <form>
            <TextField label="Nome do Documento" variant="outlined" fullWidth margin="normal" />
            {/*Outros campos*/}
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}

        {tabValue === "finalizados" && (
          <form>
            <TextField label="Nome do Documento" variant="outlined" fullWidth margin="normal" />
            {/*Outros campos*/}
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}
      </Container>
    </BaseLayout>
  );
};

export default Documentos;
