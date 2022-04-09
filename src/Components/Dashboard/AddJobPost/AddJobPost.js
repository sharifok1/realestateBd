import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const AddJobPost = () => {
  const [blogDate, setBlogDate] = useState({});
  const [value, setValue] = useState(0);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newblogDate = { ...blogDate };
    newblogDate[field] = value;
    setBlogDate(newblogDate);
  };
  const handleProductDateSubmit = (e) => {
    let product;
    product = {
      ...blogDate,
    };
    fetch("http://localhost:5000/jobPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Added.");
          document.getElementById("Form").reset();
          setValue(0);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <Container>
        <form
          id="Form"
          className="my-5 p-4 rounded shadow mx-auto"
          style={{ maxWidth: "60rem" }}
          onSubmit={handleProductDateSubmit}
        >
          <Typography
            style={{ textAlign: "center" }}
            sx={{ my: 3 }}
            variant="h5"
            gutterBottom
          >
            Add Job Post
          </Typography>
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Job Title"
            name="jobTitle"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Vacancy"
            name="vacancy"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Job context"
            name="jobContext"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Job Responsibilities"
            name="jobResponsibilities"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Requirements"
            name="requirments"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Benefits"
            name="benifits"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Employment Status"
            name="employmentStatus"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="WorkPlace"
            name="WorkPlace"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Job Location"
            name="jobLocation"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Salary"
            name="salary"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Exp"
            name="exp"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Deadline"
            name="deadline"
            onBlur={handleOnBlur}
            variant="outlined"
          />

          <Button
            sx={{ width: "100%", my: 1 }}
            style={{
              backgroundColor: "aquamarine",
              color: "black",
              fontWeight: "900",
              fontSize: "16px",
            }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddJobPost;
