import React from "react";
import { Typography, Container } from "@material-ui/core";

const Music = () => {

  return (
    <Container maxWidth="lg">
      <Typography>This is music loop player. I call this JMusic.</Typography>
      <Typography variant="caption">Motivation comes from here: https://support.google.com/youtube/thread/12880369?hl=en</Typography>
      <br />
      <Typography variant="caption">https://listenonrepeat.com/ was nice but the ads were killing my CPU</Typography>
      <iframe title="jmusic" width="560" height="315" src="https://www.youtube.com/embed/tdhSaEbfIko?autoplay=1&playlist=tdhSaEbfIko&loop=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Container>
  );
}

export default Music;