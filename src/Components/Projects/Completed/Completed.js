import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FbMsgChat from "../../Shared/FbMessengerChat/FbMsgChat";
import Footer from "../../Shared/Footer/Footer";
import NavBars from "../../Shared/NavBars/NavBars";
import ProjectsBanner from "../ProjectsBanner/ProjectsBanner";

const Completed = () => {
  const [projects, setProjects] = useState([]);
  //   const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://secure-cove-36711.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) =>
        setProjects(data?.filter((td) => td?.category === "Completed"))
      )
      .then(() => setIsLoading(false));
  }, []);
  //   useEffect(() => {
  //     fetch("https://secure-cove-36711.herokuapp.com/projects")
  //       .then((res) => res.json())
  //       .then((data) => setAllProjects(data))
  //       .then(() => setIsLoading(false));
  //   }, []);
  //   console.log(allProjects);
  // console.log(projects);
  //   const handleChangeAll = (event) => {
  //     setProjects(
  //       allProjects?.filter((td) => td?.category === event.target.value)
  //     );
  //   };
  //   const handleChangeType = (event) => {
  //     setProjects(allProjects?.filter((td) => td?.type === event.target.value));
  //   };
  //   const handleChangeLocation = (event) => {
  //     setProjects(
  //       allProjects?.filter((td) => td?.location === event.target.value)
  //     );
  //   };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <NavBars></NavBars>
      <ProjectsBanner></ProjectsBanner>
      <div className="project-search-field">
        <Container>
          {/* <form
          >
            <div className="field-wraper">
              <select
                onChange={handleChangeAll}
                className="allProjects-search-field"
              >
                <option className="d-none" value="All">
                  All
                </option>
                <option value="Ongoing">Ongoing</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
              </select>
              <select
                onChange={handleChangeType}
                className="allProjects-search-field"
              >
                <option className="d-none" value="Type">
                  Type
                </option>
                <option value="Residential">Residential</option>
                <option value="Comemercial">Comemercial</option>
              </select>
              <select
                onChange={handleChangeLocation}
                className="allProjects-search-field"
              >
                <option className="d-none" value="Location">
                  Location
                </option>
                <option value="Bashundhara R/A">Bashundhara R/A</option>
                <option value="Tejgaon">Tejgaon</option>
                <option value="Khilgaon">Khilgaon</option>
                <option value="Bashundhara">Bashundhara</option>
              </select>
            </div>
          </form> */}
        </Container>
      </div>

      {/* Projects//// */}

      <div
        style={{
          backgroundColor: "#eee",
          padding: "100px 0px",
        }}
      >
        <Container>
          <h1 className="text-center mb-5 pb-3 text-dark fw-bold">
            Completed Projects
          </h1>
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project) => (
              <div key={project.id}>
                <Col className="slider-card">
                  <img
                    className="slider-card-img img-fluid"
                    src={project.projectImage}
                    alt=""
                  />
                  <div className="allproject-img-overlay"></div>
                  <div className="slider-text-div">
                    <div className="mb-4">
                      <div className="card-name">
                        <h1 className="card-heading">{project.projectName}</h1>
                        <h3>{project.location}</h3>
                      </div>
                      <p style={{ color: "#eee" }}>
                        {project.description.slice(0, 150)} . . .
                      </p>
                    </div>
                  </div>
                  <Link to={`/details/${project.id}`}>
                    {" "}
                    <button
                      className="btn-secondary mb-4 mt-3 btn-position"
                      variant="primary"
                    >
                      Explore
                    </button>
                  </Link>
                </Col>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
      <FbMsgChat />
    </div>
  );
};

export default Completed;
