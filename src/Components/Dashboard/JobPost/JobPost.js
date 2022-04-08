import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobPost = () => {
  const [jobPosts, setJobPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/jobPost")
      .then((res) => res.json())
      .then((data) => setJobPosts(data))
      .then(() => setIsLoading(false));
  }, []);
  console.log(jobPosts);
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `http://localhost:5000/jobPost/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("Deleted Successfully!");
            const remainingProducts = jobPosts.filter(
              (product) => product._id !== id
            );
            setJobPosts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
          {jobPosts?.map((post) => (
            <div key={post.id}>
              <Col>
                <div className="text-dark job-card">
                  <h4>{post?.jobTitle}</h4>
                  <h6>Vacancy : {post?.vacancy}</h6>
                  <h6>Employment Status:{post?.employmentStatus}</h6>
                  <h6>Experience: {post?.exp}</h6>
                  <div className="d-flex justify-content-between">
                    <Link to={`/jobDetails/${post.id}`}>
                      <button className="job-details-btn">Details</button>
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(post._id)}
                      className="job-details-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JobPost;
