import React, { useState, useEffect, useRef, } from "react";
import { Typography, Container, Grid, makeStyles, Theme, Button, IconButton, Link } from "@material-ui/core";
import APIManager from "../api/APIManager";
import YoutubeVideo from "./YouTubeVideo";
import BinarySearch from "./BinarySearch";
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles((theme: Theme) => ({

  active: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },

  inactive: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "#9e9e9e"
  },

  logo: {
    width: 48,
    marginRight: theme.spacing(1)
  }
}));

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

const Music = () => {

  const classes = useStyles();
  const [music, setMusic] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVideoTimeIndex, setCurrentVideoTimeIndex] = useState(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);

  const [times, setTimes] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    setMusic(APIManager.getAllMusic());
  }, []);

  useEffect(() => {
    if (!music) return;

    setTimes(music[currentVideoIndex].times);
  }, [music, currentVideoIndex]);
 
  useEffect(() => {

    if (!music) return;

    const index = BinarySearch.findFloorIndex(music[currentVideoIndex].times, currentVideoTime)
    
    if (index !== currentVideoTimeIndex) {
      setCurrentVideoTimeIndex(index);
    }

  }, [currentVideoTime, music, currentVideoIndex, currentVideoTimeIndex]);

  useEffect(() => {

    if (!music) return;

    if (ref && ref.current) ref.current.scrollIntoView({
      behavior: "smooth", 
      block: "center"
    });

  }, [currentVideoTimeIndex, music]);

  return (
    <Container maxWidth="lg">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img className={classes.logo} alt="Jmusic" src="https://github.com/ioneone/Jmusic/blob/master/logo.png?raw=true" />
        <Typography display="inline" variant="h6">
          JMusic
        </Typography>
      </div>
      <Typography variant="subtitle2">
        About: Music Loop Player
      </Typography>
      <Typography variant="body2">
        Motivation comes from <Link href="https://support.google.com/youtube/thread/12880369?hl=en" target="_blank">here</Link>
      </Typography>
      <Typography variant="body2">
        <Link href="https://listenonrepeat.com/ " target="_blank">ListenOnRepeat</Link> was nice but the ads were killing my CPU
      </Typography>
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
                setCurrentVideoIndex(player.getPlaylistIndex());
              }}
              onCurrentTimeChange={(player) => {
                setCurrentVideoTime(player.getCurrentTime());
              }}
            />
          }
        </Grid>
        <Grid item xs={5} style={{ height: 420, overflowY: "auto", paddingTop: 210, paddingBottom: 210 }}>
          {
            music && times && music[currentVideoIndex].lyrics.map((line, index) => 
              <Grid container justify="center" alignItems="center">
                <Grid item xs={9}>
                  <Typography 
                    ref={index === currentVideoTimeIndex ? ref : undefined}
                    className={index === currentVideoTimeIndex ? classes.active : classes.inactive } 
                    align="center"
                    variant="body1"
                  >
                    {line}
                  </Typography> 
                </Grid>
                <Grid item xs={1} style={{ textAlign: "right" }}>
                  <IconButton 
                    size="small"
                    onClick={() => {
                      setTimes([...times.slice(0, index), currentVideoTime, ...times.slice(index + 1)]);
                    }}
                  >
                    <TimerIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <Typography 
                    align="center"
                    variant="body1"
                  >
                    {times[index] ? times[index].toFixed(2) : "..."}
                  </Typography> 
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </Grid>
      <Typography>
        Current Video Time: {currentVideoTime}
      </Typography>
      <br/>
      <Button
        onClick={() => {
          copyToClipboard(JSON.stringify(times));
        }}
      >
        Copy lyrics times to Clipboard
      </Button>
    </Container>
  );
}

export default Music;