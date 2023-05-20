import people from '../images/pessoa.png';
import cifrao from '../images/cifrao.png';
import {
    InputContainer,
    Label,
    MainContainer,
    ContaContainer,
    ButtonsContainer,
    PorcentagemContainer,
    PessoasContainer,
    ResultadosContainer,
    GorjetaContainer,
    TotalContainer,
    GorjetaTotalContainer
} from './CalculadorStyles';

export function Calculadora() {
    return (
        <MainContainer>
            <form action=''>
                <ContaContainer>
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={cifrao} alt="cifrão" /> <input id="bill" type="number" placeholder="0" />
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a porcentagem %</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%" />
                        <input type="button" value="10%" />
                        <input type="button" value="15%" />
                        <input type="button" value="25%" />
                        <input type="button" value="30%" />
                        <input type="text" id="custom-tip" placeholder="outro" />
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                    <Label htmlFor="bill">Número de Pessoas</Label>
                    <InputContainer>
                        <img src={people} alt="pessoa" /> <input id="people" type="number" placeholder="0" />
                    </InputContainer>
                </PessoasContainer>
            </form>

            <ResultadosContainer>
                <GorjetaTotalContainer>
                    <GorjetaContainer>
                        <p>Gorjeta <br /> <span>/pessoa</span></p>
                        <p>R$ 0.00</p>
                    </GorjetaContainer>
                    <TotalContainer>
                        <p>Total <br /> <span>/pessoa</span></p>
                        <p>R$ 0.00</p>
                    </TotalContainer>
                </GorjetaTotalContainer>
                <button>Limpar</button>
            </ResultadosContainer>
        </MainContainer>
    )
}