
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeEditor />} />
        <Route path="/:uniqueId" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
