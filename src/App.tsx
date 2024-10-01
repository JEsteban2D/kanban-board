import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import { HomePage } from "./pages/homepage/HomePage";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
