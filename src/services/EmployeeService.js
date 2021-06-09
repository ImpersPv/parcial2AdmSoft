import axios from 'axios';

//localhost
//const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/auth/people";
//class server
//const EMPLOYEE_API_BASE_URL = "http://35.232.232.192:8145/api/auth/estados";

//personal server
const EMPLOYEE_API_BASE_URL = "http://34.134.111.121:8145/api/auth/people";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()
