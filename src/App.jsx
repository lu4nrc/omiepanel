import { Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [contas, setContas] = useState();

  const url = "https://app.omie.com.br/api/v1/financas/contapagar/";
  const data = {
    call: "ListarContasPagar",
    app_key: "1626665706666",
    app_secret: "6c8d87b88d7784f5fc737b198623aa98",
    param: [{ pagina: 1, registros_por_pagina: 20, apenas_importado_api: "N" }],
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Resposta da API:", data);
    })
    .catch((error) => console.error("Erro na requisição:", error));

  return <><Typography>Hello Word</Typography></>;
}

export default App;
