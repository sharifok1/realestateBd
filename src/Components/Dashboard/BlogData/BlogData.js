import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogData = () => {
  const [blogData, setBlogData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://secure-cove-36711.herokuapp.com/blogdata")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .then(() => setIsLoading(false));
  }, []);
  console.log(blogData);
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `https://secure-cove-36711.herokuapp.com/blogdata/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("Deleted Successfully!");
            const remainingProducts = blogData.filter(
              (product) => product._id !== id
            );
            setBlogData(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
        {blogData?.map((blog) => (
          <div key={blog.id}>
            {console.log(blog)}
            <Col className="">
              <Card className="mt-5 blog-card border-0 ">
                <Card.Img
                  className="blog-card-img"
                  variant="top"
                  src={blog?.imgOne}
                />
                <Card.Body>
                  <Card.Text>
                    <p className="text-dark">{blog?.date}</p>
                  </Card.Text>
                  <div className="text-dark fs-5" style={{ fontWeight: "800" }}>
                    {" "}
                    <p>{blog?.blogTitle}</p>{" "}
                  </div>
                  <div className="d-flex justify-content-between">
                    <Link to={`/blogDetails/${blog.id}`}>
                      <button className="project-explore-btn">Explore</button>
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(blog._id)}
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

export default BlogData;
