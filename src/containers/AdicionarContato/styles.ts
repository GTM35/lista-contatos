import styled from 'styled-components'
import { Btn, Input } from '../../styles'

export const Form = styled.form`
  display: flex;
  gap: 80px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`

export const ContainerInputs = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const BtnAdicionar = styled(Btn)`
  color: #fffefe;
  background-color: #143c70;

  &:hover {
    background-color: #031d3e;
  }
`
export const BtnLimpar = styled(Btn)`
  color: #070707;
  background-color: #edebeb;

  &:hover {
    background-color: #d2dad5;
  }
`

export const InputAdicionarContato = styled(Input)`
  background-color: #eaf1fa;
  border-radius: 8px;
  color: #000710;
  outline: none;

  &::placeholder {
    color: #000710;
  }

  &:focus {
    border-bottom: 3px solid #143c70;
    border-radius: 8px 8px 0 0;
  }
`
