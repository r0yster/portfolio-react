import React from 'react';
import { AspectRatio, Box, Container, Center, Flex, Grid, Image, SimpleGrid, Spacer } from '@chakra-ui/react';
import helpingHandsImg from '../assets/projects/helping-hands.PNG'
import localHeroesImg from '../assets/projects/local-heroes.jpg'
import movieHubImg from '../assets/projects/the-movie-hub.jpg'
import background from '../assets/cover/color_firewatch.png'

function Home() {
  return(
    <>
    <Container style={{height: "100vh" }}>
      <Container className="container jumbo-container" style={{height: "61vh" }}>
          <Center className="row homeImg mb-3" style={{ marginTop: "12rem", fontSize: "5rem", fontWeight: "bold", textAlign: "center" }}>
              <h3 className="text-center">Roy, Nice to meet you</h3>
          </Center>
      </Container>
      <Container align="center">
        <div id="down-arrow">
          <span>
            <a href="#about">
              <i
                className="fas fa-arrow-circle-down fa-3x"
                aria-hidden="true"
                style={{ backgroundColor: "#fff", color: "#000" }}
              ></i>
            </a>
          </span>
        </div>
      </Container>
      <Container className="center">
        <h4>Project Snapshots</h4>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <AspectRatio maxW="400px" ratio={4/3}>
            <Image src={helpingHandsImg}  alt="Helping Hands" objectFit="cover" />
          </AspectRatio>
          <Box>
            <img src={localHeroesImg}  alt="Local Heroes" />
          </Box>
          <Box>
            <img src={movieHubImg}  alt="The Movie Hub" />
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
    </>
  ); 
};

export default Home;