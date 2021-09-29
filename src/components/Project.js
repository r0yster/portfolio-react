import React from 'react';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import helpingHandsImg from '../assets/projects/helping-hands.PNG'
import localHeroesImg from '../assets/projects/local-heroes.jpg'
import movieHubImg from '../assets/projects/the-movie-hub.jpg'
function Project() {

  return (
    <>
    <SimpleGrid columns={[2, null, 3]} spacing="10px">
      <Box>
        <div class="boxy  box_4">
          <div class="overlay_1">
            <h2 class="overlay-text">Helping Hands</h2>
            <a href="https://github.com/r0yster/helping-hands" class="overlay-link">GitHub</a>
            <br/>
            <a href="https://helping-hands-deux.herokuapp.com/" class="overlay-link">Demo</a>
          </div>
        </div>
        <div class="boxy  box_1">
          <div class="overlay_1">
            <h2 class="overlay-text">Google Book Search</h2>
            <a href="https://github.com/r0yster/book-search" class="overlay-link">GitHub</a>
            <br/>
            <a href="https://afternoon-forest-82318.herokuapp.com/" class="overlay-link">Demo</a>
          </div>
        </div>
      </Box>
      <Box>
        <div class="boxy  box_5">
          <div class="overlay_1">
            <h2 class="overlay-text">Local Heroes</h2>
            <a href="https://github.com/r0yster/local-heroes" class="overlay-link">GitHub</a>
            <br/>
            <a href="https://local-heroes-prjct2.herokuapp.com/" class="overlay-link">Demo</a>
          </div>
        </div>
        <div class="boxy  box_3">
          <div class="overlay_1">
            <h2 class="overlay-text">Deep Thoughts</h2>
            <a href="https://github.com/r0yster/deep-thoughts" class="overlay-link">GitHub</a>
            <br/>
            <a href="https://github.com/r0yster/deep-thoughts" class="overlay-link">Demo</a>
          </div>
        </div>
      </Box>
      <Box>
        <div class="boxy  box_6">
          <div class="overlay_1">
            <h2 class="overlay-text">The Movie Hub</h2>
            <a href="https://github.com/r0yster/The-Movie-HUB" class="overlay-link">GitHub</a>
            <br/>
            <a href="https://r0yster.github.io/The-Movie-HUB/" class="overlay-link">Demo</a>
          </div>
        </div>
        <div class="boxy  box_2">
          <div class="overlay_1">
            <h2 class="overlay-text">Offline Budget Tracker</h2>
            <a href="https://github.com/r0yster/budget-tracker" class="overlay-link">GitHub</a>
            <br/>
            <a href="https://sleepy-savannah-50854.herokuapp.com/" class="overlay-link">Demo</a>
          </div>
        </div>
      </Box>
    </SimpleGrid>
    </>
  );
};

export default Project;