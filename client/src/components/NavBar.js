import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Navbar.css'
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token');
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className='link' to='/'>Techno shop</Link>
                {user.IsAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}
                                onClick={()=>navigate(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button variant={'outline-light'}
                                className="ms-lg-3"
                                onClick={()=>logOut()}
                        >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}
                                onClick={()=> navigate(LOGIN_ROUTE)}
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;