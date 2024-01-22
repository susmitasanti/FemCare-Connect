import { useState } from 'react';

const NoteCard = ({ notes }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const { description } = notes;
    const maxLength = 100; // Adjust the maximum length as needed

    if (showFullDescription || description.length <= maxLength) {
      return description;
    } else {
      return `${description.slice(0, maxLength)}...`;
    }
  };

  return (
    <div className='col-md-3'>
      <div className="card my-3 mx-1" style={{ width: '200px', minHeight: '250px' }}>
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{renderDescription()}</p>
          {notes.description.length > 100 && (
            <button className="btn btn-link mt-auto" onClick={toggleDescription}>
              {showFullDescription ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
