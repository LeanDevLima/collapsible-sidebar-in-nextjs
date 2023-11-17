import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseLayout from "../components/BaseLayout";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddCompany = () => {
  const [token, setToken] = useState(""); // Estado para armazenar o token
  const [userData, setUserData] = useState([]); // Estado para armazenar dados dos usuários

  useEffect(() => {
    // Função para obter token ao carregar a página
    const login = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5001/Login",
          {
            username: "70031276000112-",
            password: "123456",
          }
        );

        setToken(response.data.response.token);
      } catch (error) {
        console.error("Erro ao fazer login:", error.message);
      }
    };

    login();
  }, []);

  const getUsersData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/Usuario", {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
        },
      });

      setUserData(response.data);
      console.log("Dados dos usuários obtidos com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao obter dados dos usuários:", error.message);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      try {
        const formData = new FormData();
        formData.append("file", file);

        // Substitua a URL abaixo pela URL correta do seu backend
        const uploadUrl = "http://localhost:5001/api/Upload";

        // Adiciona parâmetros adicionais à FormData conforme necessário
        formData.append("ContentType", "ContentTypeTeste");
        formData.append("ContentDisposition", "ContentDispositionTeste");
        formData.append("Headers", JSON.stringify({
          "additionalProp1": ["string"],
          "additionalProp2": ["string"],
          "additionalProp3": ["string"]
        }));
        formData.append("Length", "1");
        formData.append("Name", "teste");
        formData.append("FileName", "teste");

        await axios.post(uploadUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Arquivo enviado com sucesso!");

        getUsersData();
      } catch (error) {
        console.error("Erro ao enviar arquivo:", error.message);
      }
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
              startIcon={<CloudUploadIcon />}
            >
              Escolher Arquivo
            </Button>
          </label>
        </Paper>

        {/* Botão de GET para obter dados dos usuários */}
        <Button variant="contained" color="primary" onClick={getUsersData}>
          Obter Dados dos Usuários
        </Button>

        {/* Exibir dados dos usuários */}
        <Typography variant="h3">Dados dos Usuários:</Typography>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Nome</th>
              <th style={{ textAlign: "left" }}>Email</th>
              <th style={{ textAlign: "left" }}>CPF</th>
              <th style={{ textAlign: "left" }}>ID</th>
              <th style={{ textAlign: "left" }}>Ativo</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: "left" }}>{user.nome}</td>
                <td style={{ textAlign: "left" }}>{user.email}</td>
                <td style={{ textAlign: "left" }}>{user.cpf}</td>
                <td style={{ textAlign: "left" }}>{user.id}</td>
                <td style={{ textAlign: "left" }}>{user.ativo ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </BaseLayout>
  );
};

export default AddCompany;
