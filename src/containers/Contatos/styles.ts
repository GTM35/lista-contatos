import styled from 'styled-components'
import { Input } from '../../styles'

export const ContatosContainer = styled.div`
  background-color: #eef1ef;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 96px;
  padding: 24px 16px;
  height: fit-content;
`

export const PesquisaContainer = styled.div`
  width: 50%;
  background-color: transparent;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ListaContatosContainer = styled.ul`
  background-color: transparent;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`

export const Filtro = styled(Input)`
  background-color: #eaf1fa;
  border: 2px solid #143c70;
  color: #000710;

  &::placeholder {
    color: #000710;
  }
`
