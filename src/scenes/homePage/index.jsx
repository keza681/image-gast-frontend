import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import Grid from "@mui/material/Grid";
import "./style.css";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <div className='post_widget'>
        <MyPostWidget picturePath={picturePath} />
      </div>
      <div
        className='grid_container'
        display={isNonMobileScreens ? "flex" : "block"}
      >
        <PostsWidget userId={_id} />
      </div>
    </Box>
  );
};

export default HomePage;
