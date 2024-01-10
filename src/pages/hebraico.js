import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Hebraico = () => {
  const [tabValue, setTabValue] = useState("todos");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <BaseLayout>
      <Container>
      <Typography variant="h2">Hebraico</Typography>
        <Paper>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value="Alfabeto" label="Alfabeto" />
            <Tab value="Palavras" label="Palavras" />
            <Tab value="Cabalah" label="Cabalah" />
          </Tabs>
        </Paper>

        {tabValue === "Alfabeto" && (
          <form>
            <TextField label="Nome do Documento" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}

        {tabValue === "Palavras" && (
          <form>
            <TextField label="Nome do Documento" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}

        {tabValue === "Cabalah" && (
          <form>
            <TextField label="Nome do Documento" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}
      </Container>
    </BaseLayout>
  );
};

export default Hebraico;
