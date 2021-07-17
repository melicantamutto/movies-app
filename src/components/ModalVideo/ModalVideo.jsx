// Imports from dependencies
import { useState, useEffect } from "react";
import { Modal } from "antd";
// https://cookpete.com/react-player/ to modify the react-player
import ReactPlayer from "react-player";

// Internal Imports
import "./ModalVideo.sass";

const ModalVideo = ({ videoKey, videoPlatform, isOpen, close }) => {
  const [urlVideo, setUrlVideo] = useState(null);
  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoPlatform, videoKey]);
  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls muted />
    </Modal>
  );
};

export default ModalVideo;
