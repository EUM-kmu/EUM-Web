import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./styles";
import Main from "./pages/Main";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
