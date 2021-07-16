import "./Loading.sass";
import { Spin } from "antd";

const Loading = () => {
  return (
   <div className="loading">
     <Spin size="large" />
   </div>
  );
};

export default Loading;

