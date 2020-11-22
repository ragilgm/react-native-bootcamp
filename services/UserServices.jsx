import axios from 'axios'

const BASEURL = "https://jsonplaceholder.typicode.com/"

class Userservices { 

    getUsers() { 
     return axios.get(BASEURL+"users")
   }

    getAlbumByUser(id) { 
     return axios.get(BASEURL+"albums?userId="+id)
   }
    getPhotoByAlbum(albumId, page) { 
     return axios.get(BASEURL+"albums/"+albumId+"/photos?_page="+page+"&_limit=20")
   }

}

export default new Userservices();