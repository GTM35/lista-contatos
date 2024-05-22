import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        background-color: #fffffc;
      }
      
      `

export const Container = styled.div`
  padding: 0 40px;
  width: 100%;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #ddd;
  padding: 8px;
  font-size: 16px;
  color: #143c70;
`

export const Btn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #ddd;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 40px;
  background-color: #ddd;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: regular;
  cursor: pointer;
  resize: none;
  padding: 8px;
`
