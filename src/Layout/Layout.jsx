import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// IMG 
import Sotsial from "/img/socials.png"
import Happy from "/img/illustration (4).png"
// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const drawerWidth = 240;
const navItems = [<Link to="/"> Home </Link>, <Link to="/about"> About </Link>, <Link to="/contact"> Contact </Link>,];

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Creat<span className="text-red-600">X</span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  let { pathname } = useLocation();
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar className="bg-[#FEDCD2]">
            <IconButton
              color="error"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="text-black"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Creat <span className="text-red-600">X</span>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "black" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
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
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
      <div>
        <Outlet />
      </div>
      <div className="bg-[#FEDCD1] text-center">
        <p className="font-bold md:text-[115%] pt-[10%]">
        Don’t miss anything
        </p>
        <h1 className="font-black text-[120%] md:text-[170%] md:pb-[2%] lg:w-[40%] lg:text-[200%] md:w-[50%] md:m-auto mb-[2%]">
        Subscribe to the Createx School announcements
        </h1>
        <div className="flex justify-center gap-[5%]">
        <TextField id="outlined-basic" size="small" label="Your working email" variant="outlined" />
        <Button variant="contained" sx={{background:"#FF3F3A"}}>Subscribe</Button>
        </div>
        <div className="flex justify-between pl-[1%] pt-[4%] lg:pt-1">
          <img src={Happy} alt="error" className="w-[30%] md:w-[20%]" />
          <img src={Happy} alt="error" className="w-[30%] md:w-[20%]" />
        </div>
      </div>
      <div className="bg-[#1E212C] pt-[10%] text-white flex flex-wrap md:flex-nowrap p-[5%]">
        <div>
        <h1 className="text-[170%]">
          Creat<span className="text-red-600">X</span>
        </h1>
        <p className="text-gray-400">
        Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. 
        </p>
        <div className="w-[50%] pt-[2%] pb-[2%]">
        <img src={Sotsial} alt="error" />
        </div>
        </div>
        
        <ul>
          Site Map 
          <li>
            About Us 
          </li>
          <li> 
            Courses
          </li>
          <li>
            Events 
          </li>
          <li>
            Blog
          </li>
          <li>
            Contacts
          </li>
        </ul>
        <ul className="pl-[7%]">
        COURSES 
          <li>
          Marketing
          </li>
          <li> 
          Management
          </li>
          <li>
          HR & Recruting
          </li>
          <li>
          Design
          </li>
          <li>
          Development
          </li>
        </ul>
        <ul className="pl-[4%]">
        CONTACT US
        <li>
        (405) 555-0128
        </li>
        <li> 
        hello@createx.com
        </li>
        </ul>
        <div className="md:pl-[5%]">
          <h1 className="pt-[4%]">
          SIGN UP TO OUR NEWSLETTER
          </h1>
          <TextField id="outlined-basic" className="bg-[#ffffff89] rounded-t-[10px]" color="error" label="Name" variant="filled" />
          <p className="text-gray-500 mt-[5%]">
          *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
