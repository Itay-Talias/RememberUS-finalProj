import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./PublicModal.css";
import TitleBarPublic from "./TitleBarPublic";
import LikeAndComment from "./LikeAndComment";

const PublicModal = (props) => {
  let srcPhoto =
    Object.keys(props.user).length === 0
      ? " "
      : props.user.forPlanArray.length === 0
      ? " "
      : props.user.forPlanArray[0].forPlanImangeBase64[0].data_url;
  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box className="modal">
          <img className="img-model" src={srcPhoto} />
          <LikeAndComment
            user={props.user}
            userInfo={props.userInfo}
          ></LikeAndComment>
          <TitleBarPublic
            className="bar-model"
            userInfo={props.user}
          ></TitleBarPublic>
        </Box>
      </Modal>
    </div>
  );
};

export default PublicModal;
