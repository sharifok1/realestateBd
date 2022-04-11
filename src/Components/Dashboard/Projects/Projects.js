import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://secure-cove-36711.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .then(() => setIsLoading(false));
  }, []);
  useEffect(() => {
    fetch("https://secure-cove-36711.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setAllProjects(data))
      .then(() => setIsLoading(false));
  }, []);
  console.log(allProjects);
  // console.log(projects);
  const handleChangeAll = (event) => {
    setProjects(
      allProjects?.filter((td) => td?.category === event.target.value)
    );
  };
  const handleChangeType = (event) => {
    setProjects(allProjects?.filter((td) => td?.type === event.target.value));
  };
  const handleChangeLocation = (event) => {
    setProjects(
      allProjects?.filter((td) => td?.location === event.target.value)
    );
  };
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `https://secure-cove-36711.herokuapp.com/projects/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("Deleted Successfully!");
            const remainingProducts = allProjects.filter(
              (product) => product._id !== id
            );
            const remainingProduct = projects.filter(
              (product) => product._id !== id
            );
            setProjects(remainingProduct);
            setAllProjects(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <div className="">
        <Container>
          <form
          //   onChange={handleSubmit(onSubmit)}
          >
            <div className="field-wraper">
              <select
                onChange={handleChangeAll}
                className="allProjects-search-field"
                // {...register("category")}
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
                // {...register("type")}
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
                // {...register("location")}
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
          </form>
        </Container>
      </div>
      <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 ">
        {projects?.map((project) => (
          <div key={project.id}>
            <Col className="">
              <Card className="mt-5 blog-card border-0 ">
                <Card.Img
                  className="blog-card-img"
                  variant="top"
                  src={project?.img1}
                />
                <Card.Body>
                  <Card.Text>
                    <p className="text-dark">{project?.projectName}</p>
                  </Card.Text>
                  <div className="text-dark fs-5" style={{ fontWeight: "800" }}>
                    {" "}
                    <p>{project?.subTitle}</p>{" "}
                  </div>

                  <div className="d-flex justify-content-between">
                    <Link to={`/details/${project.id}`}>
                      <button className="project-explore-btn">Explore</button>
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(project._id)}
                      className="project-explore-btn"
                    >
                      Delete
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
