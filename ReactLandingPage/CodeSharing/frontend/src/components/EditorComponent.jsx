
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';

const EditorComponent = ({ code, onCodeChange, editorRef }) => {
  return (
    <div ref={editorRef} className="w-3/4">
      <Editor
        height="80vh" // Altura del editor
        defaultLanguage="html"
        value={code} // Código actual en el editor
        onChange={onCodeChange} // Callback para manejar cambios
        theme="vs-dark" // Tema del editor
      />
    </div>
  );
};

// Definición de los tipos de los props
EditorComponent.propTypes = {
  code: PropTypes.string.isRequired,        // 'code' debe ser una cadena y es obligatorio
  onCodeChange: PropTypes.func.isRequired,  // 'onCodeChange' debe ser una función y es obligatorio
  editorRef: PropTypes.object.isRequired,    // 'editorRef' debe ser un objeto y es obligatorio
};

export default EditorComponent;
