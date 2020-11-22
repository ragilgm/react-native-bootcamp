import axios from 'axios'

const BASEURL = "https://jsonplaceholder.typicode.com/"

class Userservices { 



    getUsers() { 
     return axios.get(BASEURL+"users")
   }


}

export default new Userservices();