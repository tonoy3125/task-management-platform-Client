import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-five-fawn.vercel.app/'
})

const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;