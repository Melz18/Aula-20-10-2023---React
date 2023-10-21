import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import TitleWithText from "./components/TitleWithText";

function App() {
  return (
    <>
      <Header />
      <TitleWithText 
        title="Titulo do bloco" 
        content="Conteudo do primeiro bloco" 
      />
      <TitleWithText 
        title="Outro titulo"
        content= "Outra descrição do segundo bloco" 
      />
      <Footer Footer="Desenvolvido por Fabricio Biasi" />
    </>
  );
}

export default App;
