import axios from "axios";

export default axios.create({
        baseURL:"https://api.rawg.io/api/",
        params:{
        key:"4118bdc63e2b42a889966dbbc0811ecf",
        },  
    });