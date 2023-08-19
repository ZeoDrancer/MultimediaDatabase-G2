import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, genero ,artist, imgUrl }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{genero}</span>
          <h6> {artist}</h6>
        </div>
      </div>
    </Col>
  )
}