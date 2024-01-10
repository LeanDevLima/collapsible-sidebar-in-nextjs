
import React from "react";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Parashiot = () => {

  return (
    <BaseLayout>
      <Container>
      <Typography variant="h2">Mensagens</Typography>
        <Paper>
          <h2>Conteúdo paper</h2>
        </Paper>
       </Container>
    </BaseLayout>
  );  
};

export default Parashiot;
