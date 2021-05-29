import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../assets/pics/icons/ticket.png";

function MyButtons(props) {
  return (
    <Button
      variant="contained"
      href={props.link}
      size="large"
      style={{ backgroundColor: props.bgc, color: props.color }}
    >
      {props.text}
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
    </Button>
  );
}

export default MyButtons;
