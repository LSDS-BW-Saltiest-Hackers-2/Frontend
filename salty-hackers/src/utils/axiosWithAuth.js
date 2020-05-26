import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        },
        //baseURL: 'exampleurl.com/here'
    });
};

// WHEN USING axiosWithAuth always remember to INVOKE it using ()
// example: axiosWithAuth() and then use .get/.put/etc.