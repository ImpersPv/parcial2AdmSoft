import axios from 'axios';

//localhost
//const IMC_API_BASE_URL = "http://localhost:8080/users";
//class server
//const IMC_API_BASE_URL = "http://35.232.232.192:8145/imcs";
//personal server
const IMC_API_BASE_URL = "http://35.223.238.250:8145/users";

class ImcService {

    getImcs(){
        var mytoken = sessionStorage.getItem('token') || '';

        return axios.get(IMC_API_BASE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mytoken}`
            },
        });
    }

    createEmployee(employee){
        return axios.post(IMC_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(IMC_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(IMC_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(IMC_API_BASE_URL + '/' + employeeId);
    }
}

export default new ImcService()