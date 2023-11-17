import React from "react";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';


const AddCompany = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      console.log("Arquivo PDF selecionado:", file.name);
    } else {
      alert("Por favor, selecione um arquivo PDF válido.");
    }
  };

  return (
    <BaseLayout>
      <Container>
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="body1">Anexar arquivo...</Typography>

        {/* Botão de Anexo de Arquivo */}
        <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
          <label htmlFor="fileInput" style={{ display: "block", marginBottom: "10px" }}>
            Anexar arquivo PDF:
          </label>
          <input
            type="file"
            id="fileInput"
            accept=".pdf"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput">
            <Button
              variant="contained"
              component="span"
              startIcon={<UploadFileOutlinedIcon />}
            >
              Escolher Arquivo
            </Button>
          </label>
        </Paper>
      </Container>
    </BaseLayout>
  );
};

export default AddCompany;
