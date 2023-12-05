import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./styles";
import Main from "./pages/Main";
import Notion from "./pages/Notion";
import PostDetail from "./pages/Detail";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<PostDetail />} />
          <Route path="/help" element={<Notion />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
