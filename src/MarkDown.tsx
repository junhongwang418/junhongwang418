import React from "react";
import {useHistory, useLocation, useParams} from "react-router";
import {Button} from "@material-ui/core";

const MarkDown = () => {

  const params = useParams<{ id: string }>();
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => history.push({ pathname: "/", state: location.state })}>
        back
      </Button>
      {params.id}
    </div>
  );
};

export default MarkDown;
