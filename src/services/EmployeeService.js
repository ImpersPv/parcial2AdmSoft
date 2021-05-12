import axios from 'axios';

//<<<<<<< HEAD
//const EMPLOYEE_API_BASE_URL = "http://35.223.20.167:8145/api/auth/estados";
//=======
//const EMPLOYEE_API_BASE_URL = "http://35.223.20.167:8085/api/auth/estados";
const EMPLOYEE_API_BASE_URL = "http://34.122.12.31:8145/api/auth/estados";
//>>>>>>> dcbbd65485472ffb46ee02dd2a494467c9a597e0

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
