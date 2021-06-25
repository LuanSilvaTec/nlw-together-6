import {useHistory} from 'react-router'

import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import {auth, firebase} from '../services/firebase'
import { useAuth } from '../hooks/useAuth';





export function Home() {
    const {signInWithGoogle, user}= useAuth();
    const history = useHistory();
    
    async function handleCreateRoom(){    
        if(!user){
            await signInWithGoogle()
        }   

        history.push('/rooms/new');
    }
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}