import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import APIManager from "../api/APIManager";
import YoutubeVideo from "./YouTubeVideo";

const Music = () => {

  const [music, setMusic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMusic(APIManager.getAllMusic());
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h6">JMusic</Typography>
      <Typography variant="subtitle2">Music Loop Player</Typography>
      <Typography variant="body2">Motivation comes from here: https://support.google.com/youtube/thread/12880369?hl=en</Typography>
      <Typography variant="body2">https://listenonrepeat.com/ was nice but the ads were killing my CPU</Typography>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          {
            music &&
            <YoutubeVideo
              width="100%"
              height="420px"
              onReady={(event) => {
                const player = event.target;
                player.loadPlaylist(music.map(m => m.id));
                player.setLoop(true);
              }}
              onStateChange={(event) => {
                const player = event.target;
                setCurrentIndex(player.getPlaylistIndex());
              }}
            />
          }
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