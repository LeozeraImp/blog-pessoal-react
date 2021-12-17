import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduces';
import { addToken } from '../../../store/tokens/actions';
import {toast} from "react-toastify";


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();
    

        function goLogout(){
            dispatch(addToken(""));
            toast.info("Usuario deslogado!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }

        var navBarComponent;

        if(token !== ""){
            navBarComponent = <AppBar position="static" className = "flex-navbar" >
            <Toolbar variant="dense" className = "color-nav">
                <Box className = "cursor" >
                    <Typography variant="h5" color="inherit">
                        InsertheCoin
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className = "cursor">
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className = "cursor">
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className = "cursor">
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className = "cursor">
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                    </Link>
                    
                    <Box mx={1} className="cursor" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                    
                </Box>

            </Toolbar>
        </AppBar>
        }
        return (
        <>
            {navBarComponent}
        </>
    )
}

export default Navbar;