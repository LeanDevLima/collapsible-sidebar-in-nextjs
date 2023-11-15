// src\pages\aceites.js

import React from "react";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const Aceites = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <BaseLayout>
      <Container>
      <Typography variant="h2">Aceites</Typography>
        <Paper>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Aceitos" />
            <Tab label="Aguardando Aceite" />
            <Tab label="Não Aceitos" />
            <Tab label="A serem Revisados" />
          </Tabs>
        </Paper>

        {/* Renderizar o conteúdo com base na aba selecionada */}
        {tabValue === 0 && <p>Lista de Contratos/Documentos Aceitos</p>}
        {tabValue === 1 && (
          <p>Lista de Contratos/Documentos Aguardando Aceite</p>
        )}
        {tabValue === 2 && <p>Lista de Contratos/Documentos Não Aceitos</p>}
        {tabValue === 3 && (
          <p>Lista de Contratos/Documentos a Serem Revisados</p>
        )}
      </Container>
    </BaseLayout>
  );
};

export default Aceites;
