
import PropTypes from 'prop-types';

const ButtonGroup = ({ onLike, onDislike, onCaptureImage }) => {
  return (
    <div className="mt-4 flex gap-4">
      <button 
        onClick={onLike} 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Like
      </button>
      <button 
        onClick={onDislike} 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Dislike
      </button>
      <button 
        onClick={onCaptureImage} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Capture Image
      </button>
    </div>
  );
};

// Definición de los tipos de los props
ButtonGroup.propTypes = {
  onLike: PropTypes.func.isRequired,          // 'onLike' debe ser una función y es obligatorio
  onDislike: PropTypes.func.isRequired,       // 'onDislike' debe ser una función y es obligatorio
  onCaptureImage: PropTypes.func.isRequired,  // 'onCaptureImage' debe ser una función y es obligatorio
};

export default ButtonGroup;
