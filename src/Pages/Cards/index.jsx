import React from "react";
import "./Cards.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CardButton1 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2F1728",
    borderColor: "#2F1728",
    borderRadius: "20px",
    width: "200px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#2F1728",
      borderColor: "#2F1728",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2F1728",
      borderColor: "#2F1728",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);
const CardButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2F1728",
    borderColor: "#2F1728",
    borderRadius: "20px",
    width: "150px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#2F1728",
      borderColor: "#2F1728",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2F1728",
      borderColor: "#2F1728",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function Cards(props) {
  const classes = useStyles();
  return (
    <div className="card">
      <div className="card-main">
        <div className="card-heading">
          <b> {props.name} </b>
        </div>
        <div className="card-content">{props.long_description}</div>
        <div className="card-styles">
          <div className="sub-heading"> Prize worth </div>
          <div className="content1 content-styles "> {props.worth} </div>
        </div>
        <div className="card-styles">
          <div className="sub-heading"> Venue </div>
          <div className="content2 content-styles"> {props.venue} </div>
        </div>
        <div className="card-styles">
          <div className="sub-heading"> Date and Time </div>
          <div className="content3 content-styles"> {props.date} </div>
        </div>
        <div className="card-styles">
          <div className="sub-heading"> Convenor </div>
          <div className="content4 content-styles"> {props.convenor} </div>
        </div>
        <div className="card-styles">
          <div className="sub-heading"> Co - convenor </div>
          <div className="content5 content-styles"> {props.coconvenor} </div>
        </div>
        <div className="card-styles">
          <div className="sub-heading"> Members </div>
          <div className="content6 content-styles"> {props.members} </div>
        </div>
        <div className="button">
          <div className="button1">
            <CardButton1
              variant="contained"
              color="primary"
              disableRipple
              className={classes.margin}
            >
              Rules and Regulations
            </CardButton1>
          </div>
          <div className="button2">
            <CardButton2
              variant="contained"
              color="primary"
              disableRipple
              className={classes.margin}
              href={props.reg_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </CardButton2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
