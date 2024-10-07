import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import EditorComponent from './EditorComponent'; // Asegúrate de tener este componente
import ButtonGroup from './ButtonGroup'; // Asegúrate de tener este componente
import LikeStatus from './LikeStatus'; // Asegúrate de tener este componente

const defaultCode = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

const CodeEditor = () => {
  const [code, setCode] = useState(defaultCode);
  // eslint-disable-next-line no-unused-vars
  const [isShareEnabled, setIsShareEnabled] = useState(true);
  const [likeStatus, setLikeStatus] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el tema
  const { uniqueId } = useParams();
  const editorRef = useRef(null);

  useEffect(() => {
    if (uniqueId) {
      axios.get(`/api/snippet/${uniqueId}`)
        .then((response) => {
          setCode(response.data.code);
          setIsShareEnabled(false);
        })
        .catch((err) => console.log(err));

      const savedLikeStatus = localStorage.getItem(`likeStatus_${uniqueId}`);
      if (savedLikeStatus) {
        setLikeStatus(JSON.parse(savedLikeStatus));
      }
    }

    // Recuperar el tema del localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, [uniqueId]);

  useEffect(() => {
    // Guardar el tema en localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleEditorChange = (newCode) => {
    setCode(newCode);
    if (uniqueId) {
      setIsShareEnabled(true);
    }
  };

  const handleCaptureImage = () => {
    if (editorRef.current) {
      html2canvas(editorRef.current, { width: 800, height: 600 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'code-snapshot.png';
        link.click();
      });
    }
  };

  const handleLike = () => {
    setLikeStatus('like');
    localStorage.setItem(`likeStatus_${uniqueId}`, JSON.stringify('like'));
  };

  const handleDislike = () => {
    setLikeStatus('dislike');
    localStorage.setItem(`likeStatus_${uniqueId}`, JSON.stringify('dislike'));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <EditorComponent
        code={code}
        onCodeChange={handleEditorChange}
        editorRef={editorRef}
      />
      <ButtonGroup
        onLike={handleLike}
        onDislike={handleDislike}
        onCaptureImage={handleCaptureImage}
      />
      <LikeStatus likeStatus={likeStatus} />
    </div>
  );
};

export default CodeEditor;
