import fetch from "node-fetch";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDIyOThiOWZmNDQzMDNjNzIzNDkwZjFhYjY3YzMyYiIsInN1YiI6IjY1OTRjYzk2N2U5ZDVmNWU3Y2YzNzllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5I30BOJInO0_ioET2ilBYiC8jTsAa9dIcq-Ne_j9ps'
    }
  };
  
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));