import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/auth/signin";

class LoginService {
    signin(loginData){
        return axios.post(LOGIN_API_BASE_URL,
            loginData);
    }
}

export default new LoginService()