import axios from 'axios';

//const LOGIN_API_BASE_URL = "http://localhost:8080/api/auth/signin";
//personal
//const LOGIN_API_BASE_URL = "http://34.122.12.31:8145/api/auth/signin";
//class
const LOGIN_API_BASE_URL = "http://35.232.232.192:8145/api/auth/signin";

class LoginService {
    signin(loginData){
        return axios.post(LOGIN_API_BASE_URL,
            loginData);
    }
}

export default new LoginService()