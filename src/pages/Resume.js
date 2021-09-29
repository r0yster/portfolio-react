import React from 'react';
import { Box, Container, ListItem, UnorderedList, SimpleGrid } from '@chakra-ui/react';

function Resume() {
  return (
    <Container className="my-5" style={{height: "73vh" }}>
      <Box textAlign="center">
        Download my <a href="https://www.linkedin.com/">resume</a>
      </Box>
      <SimpleGrid columns={2} spacing={20} className="my-2">
        <UnorderedList className="skills">
          <h3>Front-end Proficiencies</h3>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>jQuery</ListItem>
          <ListItem>responsive design</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Bootstrap</ListItem>
        </UnorderedList>

        <UnorderedList className="skills">
          <h3>Back-end Proficiencies</h3>
          <ListItem>APIs</ListItem>
          <ListItem>Node</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>MySQL, Sequelize</ListItem>
          <ListItem>MongoDB, Mongoose</ListItem>
          <ListItem>REST</ListItem>
          <ListItem>GraphQL</ListItem>
        </UnorderedList>
      </SimpleGrid>
    </Container>
  );
}

export default Resume;