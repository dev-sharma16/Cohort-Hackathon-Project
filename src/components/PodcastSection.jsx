import React from 'react'
import PodcastCard from './PodcastCard';
import TiltedCard from './reactBits/TiltedCard';

const podcastData = [
    {
        youtubeUrl: "https://www.youtube.com/embed/BY2C3liFlU4?si=wm0A4DBNb8jzy7fV",
        spotifyUrl: "https://open.spotify.com/episode/7tOR10zjFwMQSNr18oLKEf?si=5b59a3c21b784dfb",
    },
    {
        youtubeUrl: "https://www.youtube.com/embed/MdeQMVBuGgY?si=3HCv2NxWGUhPx48n",
        spotifyUrl: "https://open.spotify.com/episode/2xKjdOoBlb1bEYh1yvnmGp?si=83915c8c0293472e",
    },
    {
        youtubeUrl: "https://www.youtube.com/embed/xAt1xcC6qfM?si=eBHh3Mba_E49iLfb",
        spotifyUrl: "https://open.spotify.com/episode/7tOR10zjFwMQSNr18oLKEf?si=5b59a3c21b784dfb",
    },
    {
        youtubeUrl: "https://www.youtube.com/embed/E3oG313_kps?si=q73g_MyyaykffRUR",
        spotifyUrl: "https://open.spotify.com/episode/43hSln0FFteD2NMe23G4cM?si=8538b1ba6c4143da",
    },
];

function PodcastSection() {
    const spotifyHandler = ()=>{
        window.open("https://open.spotify.com/episode/7tOR10zjFwMQSNr18oLKEf?si=5b59a3c21b784dfb", "_blank");
    }
    return (
        <div className=' bg-gray-900 py-2'>
            <h2 className="text-3xl font-bold mb-6 text-center">Most Loved Podcasts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-[75%] items-center'>
                {podcastData.map((podcast, index) => (
                    <div key={index} className="flex justify-center items-center py-4 ">
                    <TiltedCard
                        
                        imageSrc='null'
                        altText="null"
                        captionText="play Video"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="300px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <PodcastCard
                                key={index}
                                youtubeUrl={podcast.youtubeUrl}
                                spotifyUrl={podcast.spotifyUrl}
                            />
                        }
                    />                        
                    </div>
                ))}
            </div>
                <div className="mt-8 text-center">
                    <button className=" text-white underline hover:text-blue-400 text-3xl">
                        more on{" "}
                        <span
                            onClick={() =>
                                window.open(
                                    "https://youtube.com/playlist?list=PLE0Jo6NF_JYO5-phess8GKafKMtPv3tfZ&si=pNBcbPSl2G8aJ_nb",
                                    "_blank"
                                )
                            }
                            className="cursor-pointer hover:underline text-red-500 text-5xl"
                        >
                            <i className="ri-youtube-fill"></i>
                        </span>{" "}
                        /{" "}
                        <span
                            onClick={() =>
                                window.open(
                                    "https://open.spotify.com/show/736rhmW7vilNgkFFo8aDz4?si=525a816bf60a499b",
                                    "_blank"
                                )
                            }
                            className="cursor-pointer hover:underline text-green-400 text-5xl"
                        >
                            <i className="ri-spotify-fill"></i>
                        </span>
                    </button>
                </div>
            
        </div>
    )
}

export default PodcastSection