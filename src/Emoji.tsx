import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  emoji: {
    verticalAlign: "middle"
  }
}));

type EmojiProps = {
  emoji: string
};

const Emoji = (props: EmojiProps) => {

  const { emoji } = props;
  const classes = useStyles();

  return (
    <span className={classes.emoji}>{emoji}</span>
  );

};

export default Emoji;
