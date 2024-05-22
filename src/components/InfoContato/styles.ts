import styled from 'styled-components'
import { Btn, TextArea } from '../../styles'

export const Contato = styled.li`
  background-color: #fffffc;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`
export const DadosContainer = styled.div`
  background-color: transparent;
  display: flex;
  gap: 16px;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`

export const TextAreaData = styled(TextArea)`
  background-color: #c0d2e9;
  outline: none;
  color: #000710;

  &::placeholder {
    color: #000710;
  }

  &:focus {
    border-radius: 8px 8px 0 0;
    border-bottom: 3px solid #143c70;
  }
`
export const TextAreaDataEditar = styled(TextAreaData)`
  background-color: #fff9da;

  &:focus {
    border-radius: 8px 8px 0 0;
    border-bottom: 3px solid #e1c645;
  }
`

export const ButtonsControl = styled.div`
  background-color: transparent;
  display: flex;
  gap: 16px;
`

export const BtnSalvar = styled(Btn)`
  background-color: #143c70;
  color: #fffefe;

  &:hover {
    background-color: #031d3e;
  }
`
export const BtnCancelar = styled(Btn)`
  background-color: #eaf1fa;
  color: #070707;

  &:hover {
    background-color: #c0d2e9;
  }
`
export const BtnEditar = styled(Btn)`
  background-color: #3f6596;
  color: #fffefe;

  &:hover {
    background-color: #23508b;
  }
`
export const BtnDeletar = styled(Btn)`
  background-color: #f56a7d;
  color: #fffefe;

  &:hover {
    background-color: #e9465c;
  }
`
