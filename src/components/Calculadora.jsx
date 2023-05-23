import people from '../images/pessoa.png';
import cifrao from '../images/cifrao.png';
import {
    InputContainer,
    Label,
    MainContainer,
    ContaContainer,
    ButtonsContainer,
    PorcentagemContainer,
    PessoasContainer
} from './CalculadorStyles';
import { Resultados } from './Resultados';

import { useState } from 'react';

export function Calculadora() {
    const [conta, setConta] = useState(0);
    const [pessoas, setPessoas] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0)

    const handleMudarValorConta = (e) => {
        setConta(Number(e.target.value));
    }


    const handleMudarPessoas = (e) => {
        setPessoas(Number(e.target.value));
    }

    const handleMudarPorcentagem = (e, numero) =>{

    }

    console.log(conta)

    return (
        <MainContainer>
            <form action=''>
                <ContaContainer>
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={cifrao} alt="cifrão" /> <input id="bill" type="number" placeholder="0" onChange={handleMudarValorConta} />
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a porcentagem %</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%"  onClick={()=>{handleMudarPorcentagem(0,5)}}/>
                        <input type="button" value="10%" onClick={()=>{handleMudarPorcentagem(0,10)}} />
                        <input type="button" value="15%" onClick={()=>{handleMudarPorcentagem(0,15)}} />
                        <input type="button" value="25%" onClick={()=>{handleMudarPorcentagem(0,25)}} />
                        <input type="button" value="30%" onClick={()=>{handleMudarPorcentagem(0,30)}} />
                        <input type="number" id="custom-tip" placeholder="outro" onChange={handleMudarPorcentagem}/>
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                    <Label htmlFor="bill">Número de Pessoas</Label>
                    <InputContainer>
                        <img src={people} alt="pessoa" /> <input id="people" type="number" placeholder="0" onChange={handleMudarPessoas} />
                    </InputContainer>
                </PessoasContainer>
            </form>

            <Resultados />
        </MainContainer>
    )
}