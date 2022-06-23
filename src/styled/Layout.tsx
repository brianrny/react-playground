import styled from "styled-components"

export const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  width: 100vw;
`
export const Container = styled.div`
  background-color: #EEEEEE;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`
export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  max-width: 350px;
  word-wrap: break-word;
`