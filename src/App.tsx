import { useRef, useState } from "react";
import { WrapContainer, Container, HorizontalContainer, Content } from "./styled/Layout";

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
