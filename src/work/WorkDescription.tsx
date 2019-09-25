import React from "react";
import {Redirect, RouteComponentProps} from "react-router";
import {Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TeamLabImage from "../images/teamlab.png";
import MaruMeImage from "../images/marume.jpg";
import BicCameraImage from "../images/biccamera.jpg";
import MaruMeScreenshot1 from "../images/marume1.jpg";
import MaruMeScreenshot2 from "../images/marume2.jpg";
import GIRSImage from "../images/girs.png";
import HCLAScreenshot1 from "../images/hcla1.png";
import HCLAScreenshot2 from "../images/hcla2.png";
import HCLAScreenshot3 from "../images/hcla3.png";
import HCLAImage from "../images/hcla.svg";
import Grid from "@material-ui/core/Grid";


const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8)
  },

  content: {
    marginTop: theme.spacing(8)
  },

  center: {
    display: "block",
    margin: "0 auto"
  }
});

interface Props extends RouteComponentProps<{ id: string }>, WithStyles<typeof styles> {

}

class WorkDescription extends React.Component<Props> {
  render() {

    const { match, classes } = this.props;
    const { params } = match;
    const { id } = params;

    // MaruMe: 5d84b3cf081999de6653335f
    // teamLab: 5d84b3cf081999de6653335e
    // GIRS: 5d84b3cf081999de6653335d
    if (id !== "5d84b3cf081999de6653335f" && id !== "5d84b3cf081999de6653335e" && id != "5d84b3cf081999de6653335d") {
      return <Redirect to="/page-not-found" />;
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={8} className={classes.content}>
          {
            id === "5d84b3cf081999de6653335f" &&
            <React.Fragment>
              <Grid item xs={8}>
                <Typography variant="h3" color="primary">MaruMe</Typography>
                <Typography variant="h6" color="textSecondary">iOS App Developer Intern, 2016/06 - 2016/08</Typography>
                <Typography variant="subtitle1">
                  MaruMe is a product discovery and review app.
                  It provides a personal space for all the information you need to make informed purchase decisions.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img src={MaruMeImage} width="100%" alt="marume"/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Role</Typography>
                <Typography>
                  I joined MaruMe as an iOS app developer intern when I was in community college.
                  It was a startup company, so I worked directly with the two co-founders,
                  where I got involved in everything from design to programming.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Process</Typography>
                <Typography>
                  I had no experience in iOS development when I joined MaruMe.
                  At first, I was just watching Swift tutorials on Udemy.
                </Typography>
                <Typography>
                  After a couple weeks, I was already adding new features for the app.
                  I started off by tweaking some existing features such as changing the
                  design/appearance of buttons.
                </Typography>
                <img className={classes.center} src={MaruMeScreenshot1} width="256" alt="screenshot of the app" />
                <Typography>
                  Once I was more confident with iOS app development, I had an opportunity
                  to implement a while new feature from scratch. The largest feature I built
                  was the user profile page, which was released in version 0.0.16.
                </Typography>
                <img className={classes.center} src={MaruMeScreenshot2} width="256" alt="screenshot of the app" />
                <Typography>
                  This was huge update because users can now see their stuff in one place
                  (they used to have to go to setting > posts, or setting > wishlist) and
                  follow other users just like many other SNS.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Contribution</Typography>
                <Typography>
                  I changed the designs of small things here and there in the home and post screens.
                  I implemented the whole user profile page (just the front-end).
                </Typography>
              </Grid>
            </React.Fragment>
          }
          {
            id === "5d84b3cf081999de6653335e" &&
            <React.Fragment>
              <Grid item xs={8}>
                <Typography variant="h3" color="primary">teamLab</Typography>
                <Typography variant="h6" color="textSecondary">iOS App Developer Intern, 2018/07 - 2018/09</Typography>
                <Typography variant="subtitle1">
                  teamLab aims to create digital arts that blows your mind.
                  Aside from arts, the company also help its clients build stunning websites
                  and mobile apps.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img src={TeamLabImage} width="100%" alt="teamlab"/>
              </Grid>
              <Grid item xs={4}>
                <img src={BicCameraImage} width="100%" alt="biccamera"/>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h3" color="primary">Role</Typography>
                <Typography>
                  I joined teamLab's iOS app development team and was assigned to
                  BicCamera project. BicCamera is one of the largest electronics retailer
                  chain in Japan, and we were renewing their app so that it adapts to
                  modern design and has more useful features including product recommendations,
                  searching items by category, barcode scanning, and so on.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Process</Typography>
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    src="https://www.youtube.com/embed/cLFaLSaN9b0" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Contribution</Typography>
                <Typography>
                  I built tutorial pages from scratch, which quickly introduce users what the app can do.
                  Then I implemented skeleton view whenever there is an asynchronous data fetch request,
                  which visually shows users the app is still loading. Finally, I add/redesign popups in various
                  places of the app, which informs users how to navigate through the app.
                </Typography>
              </Grid>
            </React.Fragment>
          }
          {
            id === "5d84b3cf081999de6653335d" &&
            <React.Fragment>
              <Grid item xs={8}>
                <Typography variant="h3" color="primary">GIRS</Typography>
                <Typography variant="h6" color="textSecondary">Student Researcher, 2019/04 - Current</Typography>
                <Typography variant="subtitle1">
                  GIRS is a research lab at UCLA that researches and develops tools for quantifying and
                  reducing the risk to society.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img src={GIRSImage} width="100%" alt="girs"/>
              </Grid>
              <Grid item xs={4}>
                <img src={HCLAImage} width="100%" alt="hcla"/>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h3" color="primary">Role</Typography>
                <Typography>
                  I officially joined GIRS as a student researcher, but the actual job was more
                  like a software engineer. At GIRS, I was developing HCLA web application for
                  NASA's JPL for system reliability analysis. I was working there during school year
                  for part-time, and full-time during the summer.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Process</Typography>
                <Typography>
                  I only had limited experience in web development, and also had no prior experience with React.
                  The first few weeks were just learning React, and tweaking the design of small things (e.g. button) slightly.
                </Typography>
                <img src={HCLAScreenshot1} width="100%" alt="hcla" />
                <Typography>
                  By the time summer came, I was more confident with my skills in React and started to
                  work on core features of the app such as Fault Tree Modeling using MxGraph.
                </Typography>
                <img src={HCLAScreenshot2} width="100%" alt="hcla" />
                <Typography>
                  One of the most challenging feature I implemented is node value setting page,
                  where users can input data into a node.
                </Typography>
                <img src={HCLAScreenshot3} width="100%" alt="hcla" />
                <Typography>
                  This was the most satisfying task I've done because it uses a lot of concept of React (e.g. state, controlled components)
                  as well as leveraging third party plotting library (Plotly).
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="primary">Contribution</Typography>
                <Typography>- Migrate 80% of the code base from Javascript to Typescript.</Typography>
                <Typography>- Build a node selection dialog where users can input data to a node / event.</Typography>
                <Typography>- Build encoders / decoders for Fault Tree, Event Tree, and Beysian Network.</Typography>
              </Grid>
            </React.Fragment>
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(WorkDescription);
