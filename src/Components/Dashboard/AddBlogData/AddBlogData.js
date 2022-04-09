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

const AddBlogData = () => {
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
    fetch("http://localhost:5000/blogData", {
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
            Add Blog Data
          </Typography>
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Title"
            name="title"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Sub-Title"
            name="subTitle"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Intro"
            name="intro"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Text heading one"
            name="textheadingOne"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Paragraph One"
            name="paragraphOne"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Image 1"
            name="imgOne"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Text heading two"
            name="textheadingTwo"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Paragraph Two"
            name="paragraphTwo"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Image 2"
            name="imgTwo"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Text heading three"
            name="textheadingThree"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Paragraph Three"
            name="paragraphThree"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Image 3"
            name="imgThree"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Data"
            name="data"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="User Comment"
            name="userComment"
            onBlur={handleOnBlur}
            multiline
            rows={4}
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

export default AddBlogData;
