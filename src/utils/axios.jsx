import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjg4ZDllZWUyZjkzYTExYjkwMjE2YzFiN2ZkYTVlYiIsIm5iZiI6MTcyMTgyNzE3Ny4yNTQyOCwic3ViIjoiNjY5ZmY5OWE2MWQ5MzI4OWM3MTg5OWYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0EbPjlvz5sFFqgp33ay-hmezKtBDaWwG6Q5dKQN2P14'
      }
})

export default instance;