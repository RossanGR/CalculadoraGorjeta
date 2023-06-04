import styled from "styled-components";

export const MainContainer = styled.main`
    background: #F8FAFC;
    
    
    @media(min-width: 950px){
        display:grid;
        grid-template-columns: 1fr 1fr;
        max-width: 57.5rem;
        gap: 3rem;
        margin: 3rem auto;      
    }
`


export const Label = styled.label`
    color: #1E293B;
    line-height: 1.5rem;
    margim-bottom: 0.375rem;
    display: block;
`

export const TextContent = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;

    h1{
        color: #1E293B;
        padding: 0.50rem;
        font-style: normal;
        font-weight: 700;
    }

    p{
        padding: 1rem 0.50rem;
        color: #475569;
    }
    
`

export const InputContainerCustom = styled.div`
    background: #FFF; 
    padding: 1rem 0.75rem 1rem 0.75rem;
    border-radius: 4px;
    margin-bottom: 1.25rem;
    border: 2px solid #E2E8F0;

    &:has(input:hover), &:has(input:focus){
        outline:  2px solid #7C3AED;
    }

    input{
        border: 0;
        background: #FFF;
        font-size: 1rem;      
        width: 100%;
        outline: none;
        color: #00474B;

        &::placeholder{
            color:#94A3B8
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
          -webkit-appearance: none;
          margin:0;
        }

       
    }
`

export const InputContainer = styled.div`
    background: #f3f9fa; 
    padding: 0.375rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 1.25rem;
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
    padding: 2rem 3rem;
`

export const ButtonsContainer = styled.div`
    margin-top: 0.625rem;
    width:100%

    

    input{
        border:0
        outline:none
        font-size: 1.5rem;
        padding: 1rem 1,5rem
        border-radius: 4px;
        color: #FFF;

    }
    
    input[type="button"]{
        background: #7C3AED;
        text-align: center;
        color: #FFF;
        border-radius:4px;
        border:0;
        width: 100%;
        padding: 1rem 1.5rem;
         
        &::placeholder{
            color: #547878;
        }

        &:hover{
            background:#9F67FF;
            cursor:pointer;           
        }
    }
`

export const PorcentagemContainer = styled(ContaContainer)`

`

export const PessoasContainer = styled(ContaContainer)``

