import "./videoCard.css";

const VideoCard = ({ cardData }) => {
  return (
    <div className="video-card_container">
      <div className="thumbnail-container">
        <img
          src={cardData.snippet.thumbnails.medium.url}
          alt="video-thumbnail"
        />
      </div>
      <div className="details-container">
        <div className="channel-image">
          <p>R</p>
        </div>
        <div className="video-details">
          <p className="video-title">{cardData.snippet.title}</p>
          <p className="channel-name">{cardData.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
