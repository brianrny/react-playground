import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  width: 100vh;
`

const Container = styled.div`
  background-color: #EEEEEE;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Content = styled.div`
  max-width: 350px;
  word-wrap: break-word;
`

function App() {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement | any>(null)

  let debouceTimer: number;

  const debounce = (value: string, waittime = 1500) => {
    clearTimeout(debouceTimer)

    debouceTimer = setTimeout(() => {
      setValue(value)
    }, waittime)
  }

  return (
    <WrapContainer>
      <Container>
        <HorizontalContainer>
          <h1>Debounce</h1>
          <input type="text" name="input" ref={inputRef} maxLength={255} onChange={() => debounce(inputRef.current?.value)} />
          <Content>
            <h4>{value}</h4>
          </Content>
        </HorizontalContainer>
      </Container>
    </WrapContainer>
  )
}

export default App
