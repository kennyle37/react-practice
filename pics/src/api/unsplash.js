import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    authorization: 'Client-ID 034652124235a226d3b6ee897f8e75dd03ebf6bb477ea0d870bed284e38d8f63',
  }  
});