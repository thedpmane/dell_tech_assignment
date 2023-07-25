import React, { useMemo } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import moment from "moment";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Center,
  createStandaloneToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllAdiminProducts,
  getAdminProducts,
} from "../../Redux/Admin/Products/action";
import { useEffect } from "react";
import { getAdminAllUsers } from "../../Redux/Admin/Users/action";
import "chartjs-adapter-moment";

const DashboardHome = () => {
  // Redux state selectors
  const { products } = useSelector(AllAdiminProducts);

  const allUserList = useSelector((store) => store.allUsers.users);

  const { toast } = createStandaloneToast();
  const dispatch = useDispatch();

  // Total Amount Calculation
  let totalAmount = 0;

  // Bar Chart Data
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
      },
    },
    indexAxis: "x", // To display the bars horizontally
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };

  // Pie Chart Data
  const pieChartData = useMemo(() => {
    let outOfStock = 0;
    products?.forEach((product) => {
      if (product.Stock === 0) {
        outOfStock++;
      }
    });
    return {
      labels: ["In Stock", "Out of Stock"],
      datasets: [
        {
          label: ["Stock"],
          data: [products?.length - outOfStock, outOfStock],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
          hoverOffset: 4,
        },
      ],
    };
  }, [products]);

  // Line Chart Data
  const optionsline = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          parser: "YYYY-MM-DD",
          unit: "day",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    dispatch(getAdminProducts(toast));
    dispatch(getAdminAllUsers());
  }, [dispatch]);

  return (
    <Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Box
          textAlign={"center"}
          borderWidth="1px"
          borderRadius="lg"
          fontSize="xl"
          p={4}
          mb={4}
        >
          <Heading as="h2" size="xl">
            Dell Dashboard
          </Heading>
        </Box>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
          <Box p={4} borderWidth="1px" borderRadius="full" textAlign={"center"}>
            <Heading as="h3" size="xl">
              Products
            </Heading>

            <Text>{products && products?.length}</Text>
          </Box>

          <Box p={4} borderWidth="1px" borderRadius="full" textAlign={"center"}>
            <Heading as="h3" size="xl">
              Users
            </Heading>
            <Text>{allUserList?.length}</Text>
          </Box>
        </Grid>

        <Box borderWidth="1px" borderRadius="lg" p={["1", "2"]} mt="2" w="95%">
          <Center>
            <Box maxW={["xs", "md"]} h="300px">
              <Doughnut data={pieChartData} options={{ responsive: true }} />
            </Box>
          </Center>
        </Box>
        <Flex
          gap={"20px"}
          w="95%"
          p={["1", "2"]}
          flexDirection={["column", "column", "row"]}
        >
          <Box
            w={["100%", "100%", "50%"]}
            borderWidth="1px"
            borderRadius="lg"
            p={["1", "2"]}
          >
            {/* <Bar data={chartData} options={options} /> */}
          </Box>

          <Box
            w={["100%", "100%", "50%"]}
            borderWidth="1px"
            borderRadius="lg"
            p={["1", "2"]}
          >
            {/* <Line data={dataset} options={optionsline} /> */}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardHome;
