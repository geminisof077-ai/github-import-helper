import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnailUrl: string;
  title: string;
  duration?: string;
}

export default function VideoPlayer({
  videoUrl,
  thumbnailUrl,
  title,
  duration = "2:45",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {!isPlaying ? (
        <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="bg-accent text-accent-foreground rounded-full p-6 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {duration}
          </div>
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm">
            ▶ Watch Video
          </div>
        </div>
      ) : (
        <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            {videoUrl ? (
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>Video coming soon</p>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
