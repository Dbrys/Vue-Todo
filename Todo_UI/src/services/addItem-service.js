import axios from 'axios'; 


const getTodo = () => {
    return axios.get(`http://localhost:3000/todos/`)
}

export default getTodo;

