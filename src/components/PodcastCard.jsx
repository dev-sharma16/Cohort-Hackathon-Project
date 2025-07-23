const PodcastCard = ({ youtubeUrl, spotifyUrl }) => {
  return (
    <div 
        className="flex flex-col items-center justify-center gap-3 p-3 backdrop-blur-lg rounded-2xl"
        style={{ 
            boxShadow: "0 0 5px 2px white",
            transition: "box-shadow 0.3s ease-in-out",
        }}
        onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 0 15px 5px white")
        }
        onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 10px 3px white")
        }
    >
        <iframe
            width="370"
            height="220"
            src={youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-md shadow-lg"
        />
        <button
            onClick={() => window.open(spotifyUrl, "_blank")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
        >
            Listen on <span><i className="ri-spotify-fill"></i></span>
        </button>
    </div>
  );
};

export default PodcastCard;
