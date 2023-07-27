import React, { useState } from "react";
import { Box, Icon, Text, Flex, Tooltip, Button } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import {
  MdProductionQuantityLimits,
  MdOutlineReviews,
  MdHome,
} from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { BsBoxes } from "react-icons/bs";
import { useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminDashboardNavbar = ({
  handleSidebarToggle,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  handleSidebarToggle = () => {
    setIsExpanded(!isExpanded);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarStyles = {
    width: isExpanded ? "150px" : "80px",
    transition: "width 0.5s ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "fixed",
    top: "1",
    left: "0",
    height: "100%",
  };

  const textStyles = {
    opacity: isExpanded ? "1" : "0",
    transition: "opacity 0.3s ease-in-out",
    fontSize: "15px",
    textTransform: "uppercase",
    display: isExpanded ? "block" : "none",
    marginLeft: "5px",
  };

  const sidebarStylesMobile = {
    ...sidebarStyles,
    flexDirection: "row",
    width: "100%",
    height: "70px",
    top: "0",
  };

  return (
    <>
      <Box fontSize={isMobile ? "md" : "lg"} zIndex={100}>
        {isMobile ? (
          <Flex
            boxShadow={"outline"}
            w={"100%"}
            position="fixed"
            zIndex={100}
            top="1"
            mt={-1}
            bgColor={"white"}
            justifyContent="space-evenly"
            alignItems={"center"}
            fontSize="30px"
          >
            <Link to="/dashboard">
              <Tooltip placement="bottom" label="Dashboard">
                <Box>
                  <Icon as={RxDashboard} />
                </Box>
              </Tooltip>
            </Link>
            <Link to="dashboard/products">
              <Tooltip placement="bottom" label="Products" fontSize="md">
                <Box>
                  <Icon as={BsBoxes} />
                </Box>
              </Tooltip>
            </Link>

            <Link to="dashboard/users">
              <Tooltip placement="bottom" label="Users" fontSize="md">
                <Box>
                  <Icon as={HiUsers} />
                </Box>
              </Tooltip>
            </Link>
            <Link to="/">
              <Tooltip placement="bottom" label="Home" fontSize="md">
                <Box>
                  <Icon as={MdHome} />
                </Box>
              </Tooltip>
            </Link>
          </Flex>
        ) : (
          <Box
            zIndex={100}
            as="nav"
            boxShadow={"outline"}
            style={{
              ...sidebarStyles,
              "@media (maxWidth: 480px)": sidebarStylesMobile,
            }}
            onMouseEnter={handleSidebarToggle}
            onMouseLeave={handleSidebarToggle}
          >
            <Box
              h="70%"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              fontSize="30px"
            >
              <Link to="/dashboard">
                <Flex>
                  <Icon as={RxDashboard} />
                  <Text style={textStyles}>Dashboard</Text>
                </Flex>
              </Link>

              <Link to="dashboard/products">
                <Flex>
                  <Icon as={BsBoxes} />
                  <Text style={textStyles}>Products</Text>
                </Flex>
              </Link>

              <Link to="dashboard/users">
                <Flex>
                  <Icon as={HiUsers} />
                  <Text style={textStyles}>Users</Text>
                </Flex>
              </Link>
              <Link to="/">
                <Flex>
                  <Icon as={MdHome} />
                  <Text style={textStyles}>Home</Text>
                </Flex>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AdminDashboardNavbar;
