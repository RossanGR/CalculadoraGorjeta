import styled from "styled-components";

export const MainContainer = styled.main`
    background: #FFF;
    border-radius: 25px 25px 0px 0px;
    padding: 2rem;

    @media(min-width: 950px){
        display:grid;
        grid-template-columns: 1fr 1fr;
        max-width: 57.5rem;
        gap: 3rem;
        margin: 0 auto;
        padding: 2.5rem;

        border-radius: 25px;
    }
`


export const Label = styled.label`
    color: #5e7a7d;
    line-height: 1.5rem;
    margim-bottom: 0.375rem;
    display: block;
`

export const InputContainer = styled.div`
    background: #f3f9fa; 
    padding: 0.375rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 5px;

    &:has(input:hover), &:has(input:focus){
        outline:  2px solid #26c2ae;
    }

    input{
        border: 0;
        background: transparent;
        font-size: 1.5rem;
        text-align: right;
        width: 100%;
        outline: none;
        color: #00474B;

        &::placeholder{
            color:#9EBBD
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
          -webkit-appearance: none;
          margin:0;
        }

       
    }
`

export const ContaContainer = styled.div`
    margin-bottom: 2rem;
`

export const ButtonsContainer = styled.div`
    margin-top: 0.625rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    

    input{
        border:0
        outline:none
        font-size: 1.5rem;
        padding: 0.375rem 1rem;
        border-radius: 5px;
        color: #FFF;
    }
    
    input[type="button"]{
        background: #00474B;
        text-align: center;
        color: #FFF;

        &::placeholder{
            color: #547878;
        }

        &:hover{
            background:#9fe8df;
            cursor:pointer;
            outline: 2px solid rgb(159, 232, 223);
            border: 0;
        }
    }

    input#custom-tip{
        width: 100%;
        color: #00474B;
        outline: none;
        
        text-align: center;
        
        &:focus,
        &:hover{
            outline: 2px solid #26c2ae;
            border: none
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
          -webkit-appearance: none;
          margin:0;
        }
    }

    @media(min-width: 950px){
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
`

export const PorcentagemContainer = styled(ContaContainer)`

`

export const PessoasContainer = styled(ContaContainer)``

