import React from 'react'
import PodcastCard from './PodcastCard';
import TiltedCard from './reactBits/TiltedCard';

const podcastData = [
    // {
    //     youtubeUrl: "https://www.youtube.com/embed/BY2C3liFlU4?si=wm0A4DBNb8jzy7fV",
    //     spotifyUrl: "https://open.spotify.com/episode/7tOR10zjFwMQSNr18oLKEf?si=5b59a3c21b784dfb",
    // },
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
    
    return (
        <div className='bg-black flex flex-col items-center text-white '>
            <h2 className="text-6xl font-semibold mb-15 text-center font-">Most Loved Podcasts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[75%] items-center'>
                {podcastData.map((podcast, index) => (
                    <div key={index} className="flex justify-center items-center  ">
                    <TiltedCard
                        imageSrc='https://ik.imagekit.io/devsh16/Hackathon/Screenshot%202025-07-23%20192623.png?updatedAt=1753376119729'
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
                <div className="text-center mt-20 mb-25">
                    <button className=" text-gray-400  hover:text-white text-3xl">
                        more on{" "}
                        <span
                            onClick={() =>
                                window.open(
                                    "https://youtube.com/playlist?list=PLE0Jo6NF_JYO5-phess8GKafKMtPv3tfZ&si=pNBcbPSl2G8aJ_nb",
                                    "_blank"
                                )
                            }
                            className="cursor-pointer text-white text-4xl"
                            style={{ 
                                transition: "color 0.2s ease-in-out, font-size 0.2s ease-in-out",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.fontSize = "45px")
                                (e.currentTarget.style.color = "red")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.fontSize = "35px")
                                (e.currentTarget.style.color = "white")

                            }
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
                            className="cursor-pointer text-white text-4xl"
                            style={{ 
                                transition: "color 0.2s ease-in-out, font-size 0.2s ease-in-out",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.fontSize = "45px")
                                (e.currentTarget.style.color = "#05df72")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.fontSize = "30px")
                                (e.currentTarget.style.color = "white")
                            }
                        >
                            <i className="ri-spotify-fill"></i>
                        </span>
                    </button>
                </div>
            
        </div>
    )
}

export default PodcastSection