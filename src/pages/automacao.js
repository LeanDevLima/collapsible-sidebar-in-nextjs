// src\pages\automacao.js

import React from "react";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const Automacao = () => {
  return <BaseLayout>
  <Container>
        <Typography variant="h2">Automação</Typography>

        {/* Formulário de Dashboard */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Modelos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Modelos de contrato */}
                <Typography>
                  Exemplos de modelos de contrato...
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h5">Formularios</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Conteúdo dos formulários */}
                <Typography>Conteúdo dos formulários...</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography variant="h5">Fluxos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Conteúdo dos fluxos */}
                <Typography>Conteúdo dos fluxos...</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
      </BaseLayout>;
};

export default Automacao;
