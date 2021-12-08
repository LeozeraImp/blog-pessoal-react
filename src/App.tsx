import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import Login from "./paginas/Login/Login";
import './App.css';
import ListaTema from "./components/temas/listatema/Listatema";
import ListaPostagem from "./components/postagens/listapostagem/Listapostagem"
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
    <>
        <Router>
          <NavBar />
            <Switch>
              <div style = {{minHeight: "100vh" }}>

              <Route exact path = "/">
                  <Login />
                </Route>

              <Route path = "/login">
                  <Login />
                </Route>

                <Route path = "/home">
                  <Home />
                </Route>

                <Route path = "/cadastrousuario">
                  <CadastroUsuario />
                </Route>

                <Route path = "/temas">
                  <ListaTema/>
                </Route>

                <Route path = "/posts">
                  <ListaPostagem />
                </Route>

                 <Route exact path='/formularioPostagem'>
                  <CadastroPost />
                </Route>
                <Route exact path='/formularioPostagem/:id'>
                  <CadastroPost />
                </Route>
                <Route exact path='/formularioTema'>
                  <CadastroTema />
                </Route>
                <Route exact path='/formularioTema/:id'>
                  <CadastroTema />
                </Route>
                <Route path='/deletarPostagem/:id'>
                  <DeletarPostagem />
                </Route>
                <Route path='/deletarTema/:id'>
                  <DeletarTema />
                </Route>


              </div>
            </Switch>
          <Footer />
        </Router>

    </>

    
  );
}

export default App;
