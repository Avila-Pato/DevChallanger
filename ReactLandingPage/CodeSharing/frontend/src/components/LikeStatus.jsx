
import PropTypes from 'prop-types';

const LikeStatus = ({ likeStatus }) => {
  let message;

  if (likeStatus === 'like') {
    message = 'You liked this!';
  } else if (likeStatus === 'dislike') {
    message = 'You disliked this!';
  } else {
    message = null;
  }

  return <div className="mt-4">{message}</div>;
};

// Definición de los tipos de los props
LikeStatus.propTypes = {
  likeStatus: PropTypes.oneOf(['like', 'dislike', null]).isRequired, // Puede ser 'like', 'dislike' o null
};

export default LikeStatus;
