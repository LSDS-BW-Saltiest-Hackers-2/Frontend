import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://saltyhackers2.herokuapp.com'
    });
};

// WHEN USING axiosWithAuth always remember to INVOKE it using ()
// example: axiosWithAuth() and then use .get/.put/etc.