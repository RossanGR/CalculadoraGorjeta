import people from '../images/pessoa.png';
import cifrao from '../images/cifrao.png';
import {
    InputContainer,
    InputContainerCustom,
    Label,
    MainContainer,
    ContaContainer,
    ButtonsContainer,
    PorcentagemContainer,
    PessoasContainer,
    TextContent
} from './CalculadorStyles';
import { Resultados } from './Resultados';
import { LogoComponent } from './Logo';
import { useState } from 'react';

export function Calculadora() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    const handleSendData = () => {
        alert("Email: " + email + '\n' + "Senha: " + senha);
    }


    

    
    return (
        <MainContainer>
            <form action=''>
                <ContaContainer>
                    <LogoComponent ></LogoComponent >
                    <TextContent>
                        <h1>Acesse a plataforma</h1>
                        <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                    </TextContent>
                    <Label htmlFor="bill">Email</Label>
                    <InputContainerCustom>
                        <input id="bill" type="email" placeholder="Digite seu e-mail" onChange={(e)=>{setEmail(e.target.value)}} />
                    </InputContainerCustom>

                    <Label htmlFor="bill">Senha</Label>
                    <InputContainerCustom>
                        <input id="bill" type="password" placeholder="Digite sua senha" onChange={(e)=>{setSenha(e.target.value)}} />
                    </InputContainerCustom>

                    <ButtonsContainer>
                        <input type='button' value="Entrar" onClick={handleSendData}/>
                    </ButtonsContainer>
                </ContaContainer>

               

            </form>
            <Resultados />
        </MainContainer>
    )
}