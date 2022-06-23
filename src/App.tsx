import { useState } from "react";
import DebounceInput from "./components/DebounceInput";
import { WrapContainer, Container, HorizontalContainer, Content } from "./styled/Layout";

function App() {
  const [value, setValue] = useState('')

  return (
    <WrapContainer>
      <Container>
        <HorizontalContainer>
          <h1>Debounce</h1>
          <DebounceInput props={{
            value,
            setValue,
            debounceTimer: 1000
          }} />
          <Content>
            <h4>{value}</h4>
          </Content>
        </HorizontalContainer>
      </Container>
    </WrapContainer>
  )
}

export default App
