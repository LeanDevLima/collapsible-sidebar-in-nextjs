import React from "react";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Gestao = () => {
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h2">Gestão</Typography>

        {/* Formulário de Dashboard */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Relatórios</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Conteúdo do relatório */}
                <Typography>
                  Conteúdo do Relatório...
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
                <Typography variant="h5">Prazos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Conteúdo dos prazos */}
                <Typography>Conteúdo dos Prazos...</Typography>
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
                <Typography variant="h5">E-mails Enviados</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Conteúdo dos e-mails enviados */}
                <Typography>Conteúdo dos E-mails Enviados...</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography variant="h5">Agenda de Contatos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Conteúdo da agenda de contatos*/}
                <Typography>Conteúdo da Agenda de Contatos...</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  );
};

export default Gestao;
