import { Box } from "@chakra-ui/react";
import { FaInstagram, FaFacebookSquare, FaEbay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerBar">
      <a href="https://www.instagram.com" target="_blanc">
        <Box className="footerBox">
          <FaInstagram className="footerIcon" />
        </Box>
      </a>

      <a href="https://www.facebook.com/" target="_blank">
        <Box className="footerBox">
          <FaFacebookSquare className="footerIcon" />
        </Box>
      </a>
      <a href="https://www.ebay.com/" target="_blank">
        <Box className="footerBox">
          <FaEbay className="footerIcon" />
        </Box>
      </a>
    </div>
  );
};

export default Footer;
