import React from 'react';
import YouTube from 'react-youtube';
import '../App.css';

const YoutubeBackground = () => {
    const videoOpts = {
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'ZSt9tm3RoUU',
            mute: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            enablejsapi: 1
        }
    }

    const onReady = (event) => {
        event.target.mute();
      };

      return (
        <YouTube
            videoId= 'ZSt9tm3RoUU'
            opts={videoOpts}
            onReady={onReady}
            iframeClassName="video-background"
        />
      )
}

export default YoutubeBackground;