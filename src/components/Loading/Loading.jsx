import "./Loading.sass";
import { Spin } from "antd";

const Loading = () => {
  return (
   <div className="loading">
     <h4>Cargando</h4>
     <Spin size="large" />
   </div>
  );
};

export default Loading;

