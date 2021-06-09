import axios from 'axios';

//localhost
const EMAIL_API_BASE_URL = "http://localhost:8085/emails";
//class server
//const EMPLOYEE_API_BASE_URL = "http://35.232.232.192:8145/api/auth/estados";

//personal server
//const EMPLOYEE_API_BASE_URL = "http://34.122.12.31:8145/api/auth/estados";

class EmployeeService {

    getEmployees(){
        return axios.get(EMAIL_API_BASE_URL);
    }
}

export default new EmployeeService()
