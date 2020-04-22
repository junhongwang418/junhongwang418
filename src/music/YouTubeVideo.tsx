import React, { useEffect } from 'react';

type YoutubeVideoProps = {
  width: string,
  height: string,
  onReady: (event: any) => void,
  onStateChange: (event: any) => void
}

const YoutubeVideo = (props: YoutubeVideoProps) => {

  const { width, height, onReady, onStateChange } = props;

  useEffect(() => {

    const loadVideo = () => {
  
      // the Player object is created uniquely based on the id in props
      // @ts-ignore
      new window.YT.Player("player", {
        width: width,
        height: height,
        events: {
          onReady: onReady,
          onStateChange: onStateChange
        }
      })
    };

    // On mount, check to see if the API script is already loaded
    // @ts-ignore
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      // @ts-ignore
      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else { // If script is already there, load the video directly
      loadVideo();
    }
  }, [width, height, onReady, onStateChange]);

  return (
    <div id="player" />
  );

};

export default YoutubeVideo;