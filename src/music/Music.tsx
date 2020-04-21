import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import APIManager from "../api/APIManager";

const Music = () => {

  const [player, setPlayer] = useState(null);
  const [music, setMusic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const onPlayerStateChange = (event: any) => {
      if (player) {
        setCurrentIndex(event.target.playerInfo.playlistIndex);
      }
    }

    const loadVideo = () => {
    
      // the Player object is created uniquely based on the id in props
      // @ts-ignore
      const player = new window.YT.Player("player", {
        width: '100%',
        height: '420px',
        events: {
          onReady: () => setPlayer(player),
          onStateChange: onPlayerStateChange
        }
      });
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
      // @ts-ignore
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else { // If script is already there, load the video directly
      loadVideo();
    }

    setMusic(APIManager.getAllMusic());
  }, [player]);

  useEffect(() => {
    if (player && music) {
      player.loadPlaylist(music.map(m => m.id));
      player.setLoop(true);
    }
  }, [player, music])

  return (
    <Container maxWidth="lg">
      <Typography variant="h6">JMusic</Typography>
      <Typography variant="subtitle2">Music Loop Player</Typography>
      <Typography variant="body2">Motivation comes from here: https://support.google.com/youtube/thread/12880369?hl=en</Typography>
      <Typography variant="body2">https://listenonrepeat.com/ was nice but the ads were killing my CPU</Typography>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div id="player" />
        </Grid>
        <Grid item xs={5} style={{ height: 420, overflowY: "scroll" }}>
          {
            music && music[currentIndex].lyrics.map(line => 
              <Typography variant="body1">{line}</Typography>
            )
          }
        </Grid>
      </Grid>
    </Container>
  );
}

export default Music;