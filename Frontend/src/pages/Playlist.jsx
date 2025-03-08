import React, { useEffect, useState } from "react";
import axios from "axios";
import { Play, X } from "lucide-react"; // Lucide icons for Play & Close

const YOUTUBE_API_KEY = "AIzaSyBzjXmQ3794a1Ux18S0DOZBjfGxFLyjxzE"; // Replace with your API key
const PLAYLIST_ID = "PLBRObSmbZluSEeBkH17c72MaM4nFjqoi8"; // Replace with your Playlist ID
import tablebg from "../assets/tablebg.png"
import ytbg from "../assets/ytbg.jpeg"

const Playlist = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Stores selected video ID for modal

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: "snippet",
              maxResults: 10, // Adjust as needed
              playlistId: PLAYLIST_ID,
              key: YOUTUBE_API_KEY,
            },
          }
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching playlist videos:", error);
      }
    };

    fetchPlaylistVideos();
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center text-[#362511] ">
      <h2 className="text-5xl font-bold mb-4">Chess Tutorials</h2>
      <div className="overflow-x-auto bg-cover p-6" style={{ backgroundImage: `url(${tablebg})` }}>
        <table className="md:w-[1200px]shadow-md rounded-lg " >
          <thead>
            <tr className="text-xl border-b">
              <th className="py-2 px-4 text-center">Video</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-center">Watch</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video.id} className="border-b">
                <td className="py-2 px-4">
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                    className="w-24 rounded-lg"
                  />
                </td>
                <td className=" py-2 px-4">{video.snippet.title}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() =>
                      setSelectedVideo(video.snippet.resourceId.videoId)
                    }
                    className="p-2 bg-[#362511] text-white rounded-lg hover:bg-[#362511d0] cursor-pointer transition"
                  >
                    <Play className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for playing video */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-50">
          <div className="bg-cover bg-center p-4 rounded-lg w-[90%] md:w-[600px] relative " style={{ backgroundImage: `url(${ytbg})` }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Embedded YouTube Video */}
            <iframe
              className="w-full h-[315px] rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
