import { Button } from "../components/Button";
import illustration from '../assets/images/illustration.svg'
import {Link} from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { useContext } from "react";
import { AuthContext } from  '../contexts/AuthContext'
import { useAuth } from "../hooks/useAuth";


export function NewRoom(){
   const {user} = useAuth();
    return (
        <div id="page-auth">
            <aside>
                <img src={illustration} alt="" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} />
                    <h2>Crie uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente ? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>

        </div>
    )
}