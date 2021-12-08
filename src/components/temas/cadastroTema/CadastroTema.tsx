import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import "./CadastroTema.css"
import { useHistory , useParams} from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import { findByDisplayValue } from '@testing-library/dom';
import { backdropUnstyledClasses } from '@mui/core';


function CadastroTema() {
    let history = useHistory();
    const {id} = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage("token");
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })

    useEffect(()=>{
        if(token == "" ){
            history.push("/login")
        }
    }, [token])


    useEffect(() =>{
        if(id !== undefined){
            findByID(id)
        }
    }, [id])

    async function findByID(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                "Authorization": token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema" + JSON.stringify(tema))

        if(id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    "Authorization": token
                }
            })
            alert("Tema atualizado com sucesso!!");
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    "Authorization": token
                }
            })
            alert("Tema cadastrado com sucesso!!")
            }
            back()
        
        }
       
    

    function back() {
        history.push("/temas")
    }
    


    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
    }


export default CadastroTema;


