import React, { useState, useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Player from "@vimeo/player"
import "../styles/video.css"

export default function BackgroundVideo() {
    const [isVideoReady, setIsVideoReady] = useState(false);
    const playerRef = useRef(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current && !playerRef.current) {
            playerRef.current = new Player(iframeRef.current);
            
            // Configure and start the player
            playerRef.current.setVolume(0);
            playerRef.current.setLoop(true);
            
            // Listen for player events
            playerRef.current.on('loaded', () => {
                playerRef.current.play().catch(console.error);
            });

            playerRef.current.on('play', () => {
                setIsVideoReady(true);
            });

            // Handle any errors
            playerRef.current.on('error', console.error);
        }

        // Cleanup
        return () => {
            if (playerRef.current) {
                playerRef.current.unload();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div className="vimeo-wrapper">
            <div className={`overlay ${isVideoReady ? "visible" : ""}`}/>
            {!isVideoReady && (
                <div className="thumbnail-wrapper">
                    <StaticImage
                        src="../images/video-thumbnail.jpg"
                        alt="Video thumbnail"
                        className="video-thumbnail"
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                </div>
            )}
            <iframe 
                ref={iframeRef}
                title="alianta rogojeni"
                src="https://player.vimeo.com/video/430445552?background=1&byline=0&title=0"
                style={{ opacity: isVideoReady ? 1 : 0 }}
                allow="autoplay; fullscreen"
                loading="lazy"
                webkitallowfullscreen 
                mozallowfullscreen 
                allowFullScreen
            />
        </div>
    );
}