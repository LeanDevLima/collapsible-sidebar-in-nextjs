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
        <Typography variant="h2">Conceitos</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">O que é a Torah</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                    O que é a ToraH...
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
                <Typography variant="h5">Cristianismo Vs Judaismo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Cristianismo Vs Judaismo...</Typography>
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
                <Typography variant="h5">desmistificar Lei e Graça</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>desmistificar Lei e Graça...</Typography>
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
                <Typography variant="h5">Jesus (imagem da igreja católica) Vs Yeshua (The Chosen)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Jesus (imagem da igreja católica) Vs Yeshua (The Chosen),...</Typography>
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
                <Typography variant="h5"> Importancia do Catolicismo e Protestantismo para disceminação da Torah</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> Importancia do Catolicismo e Protestantismo para disceminação da Torah...</Typography>
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
                <Typography variant="h5"> Conceito de Arrebatamento: Conceito Bíblico Vs Conceito Teológico (filme Deixados para trás)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> Conceito de Arrebatamento: Conceito Bíblico Vs Conceito Teológico (filme Deixados para trás)</Typography>
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
                <Typography variant="h5">Páscoa Vs Pessach</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Páscoa Vs Pessach</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>


        </Grid>
      </Container>
      </BaseLayout>;
};

export default Automacao;
