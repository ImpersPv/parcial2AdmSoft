import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        //BEGINNEW
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        //ENDNEW
        this.login = this.login.bind(this);
        this.imc = this.imc.bind(this);
        this.email = this.email.bind(this);

        this.cerrarSesion = this.cerrarSesion.bind(this);

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        //localStorage.setItem('token', null);

        EmployeeService.getEmployees().then((res) => {
             console.log(res);
            this.setState({ employees: res.data.content});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    imc(){
        this.props.history.push('/add-imc/_add');
    }
    /*
    <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-imc/:id" component = {ListImcComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/login/:id" component = {LoginComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/emails" component = {ListEmailComponent}></Route>*/

    email(){
        this.props.history.push('/emails');
    }

    login(){
        this.props.history.push('/login/_add');
    }

    cerrarSesion(){
        sessionStorage.setItem('token', null);
        alert('Sesion cerrada');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "text-center" >
                    <button className="btn btn-success" onClick={this.addEmployee} > Agregar Usuario</button>
                    <button className="btn btn-info" onClick={this.imc}> Admins </button>
                    <button className="btn btn-info" onClick={this.email}> Emails </button>
                    <a href="http://34.71.227.51:8149/" class="btn btn-info" role="button">Sucursales</a>
                    <button className="btn btn-info" onClick={this.login}> Login </button>
                    <button className="btn btn-danger" onClick={this.cerrarSesion}> Cerrar Sesion </button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td > { employee.name} </td>   
                                             <td> {employee.address}</td>
                                             <td> {employee.phone}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
