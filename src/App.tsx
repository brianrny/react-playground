import { useRef } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { WrapContainer, Container, HorizontalContainer, Content } from "./styled/Layout";

function App() {
  const [debouncedValue, setDebouncedValue] = useDebounce(1500)
  const inputRef = useRef<HTMLInputElement | any>(null)

  return (
    <WrapContainer>
      <Container>
        <HorizontalContainer>
          <h1>Debounce</h1>
          <input type="text" name="input" ref={inputRef} maxLength={255} onChange={() => setDebouncedValue(inputRef.current?.value)} />
          <Content>
            <h4>{debouncedValue}</h4>
          </Content>
        </HorizontalContainer>
      </Container>
    </WrapContainer>
  )
}

export default App
