import React, { useState } from "react";
import { Button, Box, Flex, Heading, Image } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spacer,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const toast = useToast();
  const [count, setCount] = useState(0);
  const history = useHistory();

  return (
    <div>
      <center>
        <Flex  bg="darkgrey">
          <Heading>Naruto</Heading>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                onClick={() => {
                  history.push("/Login");
                }}
                icon={<AddIcon />}
              >
                Logout
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
              <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
              <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Box bg="gold" w="100%" p={150} color="white">
          <Flex justifyContent="center" display="flex">
            <Box w="50%" p="6" bg="#483D8B">
              <Tabs>
                <TabList>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                  <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <p>วัส!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>มวย!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>หัวคีย์!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Heading>Naruto</Heading> <br />
              <AspectRatio maxW="400px" ratio={4 / 3} mb="6">
                <Image
                  src="https://bit.ly/naruto-sage"
                  alt="naruto"
                  objectFit="cover"
                />
              </AspectRatio>
              <Button
                size="md"
                height="48px"
                width="400px"
                border="2px"
                colorScheme="blue"
                onClick={() =>
                  toast({
                    title: "วัสมวยหัวคีย์",
                    description: "วัสมวยหัวคีย์",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                Show Toast
              </Button>
              <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <br />
                <button onClick={() => setCount(count - 1)}>Click me</button>
              </div>
            </Box>
          </Flex>
        </Box>
      </center>
    </div>
  );
};
export default Homepage;
