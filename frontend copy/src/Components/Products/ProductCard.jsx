import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
  Badge,
  VStack,
  Divider,
  HStack,
} from "@chakra-ui/react";

export default function ProductCard({ product }) {
  const { name, price, category, ratings, numOfReviews, _id, images } = product;
  const IMAGE = images && images[0]?.url;
  // "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80";
  // console.log(images);
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      w={["300px", "200px", "350px"]}
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Image src={IMAGE} alt={product.name} objectFit="cover" h="200px" />
      </Flex>

      <Box p={4}>
        <Heading as="h2" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontSize="sm" mb={2}>
          {product.description}
        </Text>

        <Stack spacing={1}>
          <Text>
            <strong>Specifications:</strong> {product.specifications}
          </Text>
          <Text>
            <strong>Compatibility:</strong> {product.compatibility}
          </Text>
          <Text>
            <strong>Issues & Recalls:</strong> {product.issuesRecalls}
          </Text>
        </Stack>

        <Divider my={2} />

        <HStack justify="space-between">
          <Badge colorScheme="green">In Stock</Badge>
          <Text fontSize="lg" fontWeight="bold">
            ${product.price}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
