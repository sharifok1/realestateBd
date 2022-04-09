import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import JobPost from "../JobPost/JobPost";
import BlogData from "../BlogData/BlogData";
import Projects from "../Projects/Projects";
import AddBlogData from "../AddBlogData/AddBlogData";
import AddJobPost from "../AddJobPost/AddJobPost";
import AddProjects from "../AddProjects/AddProjects";
import ApponitmentReq from "../AppointmentReq/ApponitmentReq";
import ContactRequest from "../ContactRequest/ContactRequest";
import LandOwner from "../LandOwner/LandOwner";
import Buyer from "../Buyer/Buyer";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link style={{ textDecoration: "none", color: "GrayText" }} to="/home">
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-home"></i> Home
              </span>
            </ListItemText>
          </ListItem>
        </Link>

        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/jobPost"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-tasks"></i> Job Posts
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/blogData"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-cart-plus"></i> Blog Data
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/projects"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i> Projects
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/addBlogData"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i> Add Blog Data
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/addJobPost"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i> Add Job Post
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/addProjects"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i> Add Projects
              </span>
            </ListItemText>
          </ListItem>
        </Link>

        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/apponitmentReq"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i> Appoinment List
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/contactRequest"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i>ContactRequest
              </span>
            </ListItemText>
          </ListItem>
        </Link>

        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/landOwner"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i>LandOwner
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        
        <Link
          className="fw-bold"
          style={{ textDecoration: "none", color: "GrayText" }}
          to="/dashboard/buyer"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-users-cog"></i>Buyer
              </span>
            </ListItemText>
          </ListItem>
        </Link>

      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="" element={<JobPost />} />
          <Route path="jobPost" element={<JobPost />} />
          <Route path="blogData" element={<BlogData />} />
          <Route path="projects" element={<Projects />} />
          <Route path="addBlogData" element={<AddBlogData />} />
          <Route path="addJobPost" element={<AddJobPost />} />
          <Route path="addProjects" element={<AddProjects />} />
          <Route path="apponitmentReq" element={< ApponitmentReq/>}/>
          <Route path="contactRequest" element={< ContactRequest/>}/>
          <Route path="landOwner" element={<LandOwner/>}/>
          <Route path="buyer" element={<Buyer/>}/>
        </Routes>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
