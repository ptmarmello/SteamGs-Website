import { Box, Button, HStack, Heading, IconButton, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const HomeRoute = () => {
  return (
    <Box>
      <Box as="section" bg="gray.800" color="white" py={20} minH="100vh">
        <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={8}>
          <Stack spacing={8} py={12}>
            <Box textAlign="center">
              <Text
                as="span"
                fontSize="lg"
                fontWeight="black"
                bgColor="blue.500"
                color="white"
                px={1}
                rounded="base"
                verticalAlign="text-bottom"
              >
                USE
              </Text>
              <Text as="span" fontSize="4xl" fontWeight="bold">
                Mindmap
              </Text>
            </Box>
          </Stack>

          <VStack justify="center" mt={10} mb={10} spacing={20}>
            <HStack spacing={8}>
              <Button
                as={RouterLink}
                to="/get-started"
                size="lg"
                colorScheme="blue"
                px={8}
                fontWeight="bold"
                fontSize="md"
              >
                Get started
              </Button>
              <Button as="a" href="/sign-up" size="lg" color="blue.400" px={8} fontWeight="bold" fontSize="md">
                Read more
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
