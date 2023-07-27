import React from "react";
import MetaData from "../Layouts/MetaData";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { UserDetails } from "../Redux/Authentication/action";
const Home = () => {
  const { user, isAuth } = useSelector(UserDetails);
  const { t } = useTranslation();
  return (
    <>
      <MetaData title={"Dell"} />
      <Flex align="center" justify="center">
        <Box p={4} textAlign="center">
          <Heading as="h1" size="xl" mb={4}>
            {t("welcome")}
          </Heading>
          {isAuth ? (
            <p>{t("greet", { name: user?.name })}</p>
          ) : (
            <p>{t("greet", { name: "" })}</p>
          )}
        </Box>
      </Flex>

      <Box>
        <Sliders />
        {/* Hero Section */}

        {/* Promotions Section */}
        <Box bg="gray.100" p={4}>
          <Flex justify="center" align="center">
            <Text fontSize="lg" mr={2}>
              Get 20% off on all orders with code: SUMMER20
            </Text>
            <Button colorScheme="teal" size="sm">
              Shop Now
            </Button>
          </Flex>
        </Box>

        {/* Featured Categories */}
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Explore Our Categories
          </Heading>
          <Flex flexWrap="wrap" justify="center">
            <Box
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m={4}
              cursor="pointer"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/show-cons-dell-xps-9320t-9320nt-uhp-2402-04-in-homepage-hero-1023x842.png?fmt=png-alpha&wid=1023&hei=842"
                alt="Category 1"
              />
              <Box p={4}>
                <Heading size="md">Laptop</Heading>
                <Text color="gray.500">Shop Now</Text>
              </Box>
            </Box>
            <Box
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m={4}
              cursor="pointer"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/btc-cons-dell-inspiron-5420nt-km5221w-uhp-2402-08-in-homepage-mod-rf-1023x842-lr.png?fmt=png-alpha&wid=1023&hei=842"
                alt="Category 2"
              />
              <Box p={4}>
                <Heading size="md"> DeskTop</Heading>
                <Text color="gray.500">Shop Now</Text>
              </Box>
            </Box>
            <Box
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m={4}
              cursor="pointer"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                src="https://snpi.dell.com/snp/images/products/large/en-in~580-AJNJ/580-AJNJ.jpg"
                alt="Category 3"
              />
              <Box p={4}>
                <Heading size="md">Accessories</Heading>
                <Text color="gray.500">Shop Now</Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* Scrollable Box */}

        {/* Slider Section */}
        <Box p={4} mt={8}>
          <Heading size="lg" mb={4}>
            Featured Products
          </Heading>
        </Box>
      </Box>
    </>
  );
};

const Sliders = () => {
  const carouselHeight = 500; // Desired height for the carousel

  return (
    <>
      <Box m="auto" height={`${carouselHeight}px`} overflow="hidden">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <Box>
            <Image
              src="https://itekmall.com/adminportal/MasterDOCUMENTS/Index/Slider_Index_36_New%20Banner_3.png"
              alt="Image 1"
              height={`${carouselHeight}px`}
            />
          </Box>
          <Box>
            <Image
              src="https://itekmall.com/adminportal/MasterDOCUMENTS/Index/Slider_Index_39_New%20Banner_2.png"
              alt="Image 2"
              height={`${carouselHeight}px`}
            />
          </Box>
          <Box>
            <Image
              src="https://itekmall.com/adminportal/MasterDOCUMENTS/Index/Slider_Index_37_New%20Banner_5.png"
              alt="Image 3"
              height={`${carouselHeight}px`}
            />
          </Box>
          <Box>
            <Image
              src="https://itekmall.com/adminportal/MasterDOCUMENTS/Index/Slider_Index_40_New%20Banner_1.png"
              alt="Image 4"
              height={`${carouselHeight}px`}
            />
          </Box>
          <Box>
            <Image
              src="https://itekmall.com/adminportal/MasterDOCUMENTS/Index/Slider_Index_35_New%20Banner_4.png"
              alt="Image 5"
              height={`${carouselHeight}px`}
            />
          </Box>
        </Carousel>
      </Box>
    </>
  );
};

export default Home;
