import "./trackList.css";

type Track = {
  trackId: number;
  trackNumber: number;
  trackName: string;
  trackTimeMillis: number;
};

type Params = {
  track: Track;
};

export const TrackItem = ({ track }: Params) => {
  const formatDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="track-item">
      <div>
        <span className="track-number">{track.trackNumber}</span>
        <span className="track-name">{track.trackName}</span>
      </div>

      <span className="trackDuration">
        {formatDuration(track.trackTimeMillis)}
      </span>
    </div>
  );
};
