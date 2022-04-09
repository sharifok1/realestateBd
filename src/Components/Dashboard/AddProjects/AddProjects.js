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

const AddProjects = () => {
  const [blogDate, setBlogDate] = useState({});
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [value, setValue] = useState(0);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newblogDate = { ...blogDate };
    newblogDate[field] = value;
    setBlogDate(newblogDate);
  };
  const handleChangeAll = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleProductDateSubmit = (e) => {
    let product;
    product = {
      ...blogDate,
      category: category,
      type: type,
      location: location,
    };
    fetch("http://localhost:5000/projects", {
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
            Add Project
          </Typography>
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Project Name"
            name="projectName"
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
          <select onChange={handleChangeAll} className="w-100 px-2 py-3 my-1">
            <option className="d-none" value="All">
              Category
            </option>
            <option value="Ongoing">Ongoing</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Description"
            name="description"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <select
            onChange={handleChangeLocation}
            className="w-100 px-2 py-3 my-1"
          >
            <option className="d-none" value="Location">
              Location
            </option>
            <option value="Bashundhara R/A">Bashundhara R/A</option>
            <option value="Tejgaon">Tejgaon</option>
            <option value="Khilgaon">Khilgaon</option>
            <option value="Bashundhara">Bashundhara</option>
          </select>
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Full Location"
            name="fullLocation"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <select onChange={handleChangeType} className="w-100 px-2 py-3 my-1">
            <option className="d-none" value="Type">
              Type
            </option>
            <option value="Residential">Residential</option>
            <option value="Comemercial">Comemercial</option>
          </select>
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Orientation"
            name="orientation"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="FrontRoad"
            name="FrontRoad"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-multiline-static"
            label="Land Size"
            name="landSize"
            onBlur={handleOnBlur}
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Apartment Size"
            name="apartmentSize"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Number of Apartments"
            name="numberofAppartments"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Number of Parking"
            name="numberofParking"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Number of Floors"
            name="numberofFloors"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Handover Date"
            name="handoverDate"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Project Image"
            name="projectImage"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Image 1"
            name="img1"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Image 2"
            name="img2"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Image 3"
            name="img3"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Location Url"
            name="locationUrl"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Project Progress"
            name="projectProgress"
            onBlur={handleOnBlur}
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%", my: 1 }}
            id="outlined-basic"
            label="Number of Floors"
            name="numberofFloors"
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

export default AddProjects;
