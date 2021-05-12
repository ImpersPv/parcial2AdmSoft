import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.login = this.login.bind(this);
        this.imc = this.imc.bind(this);

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

    login(){
        this.props.history.push('/login/_add');
    }

    cerrarSesion(){
        localStorage.setItem('token', null);
        alert('Sesion cerrada');
    }

    render() {
        return (
            <div>  
                <h1> </h1> 
                 <h2 className="text-center">Administrador</h2>
                 
                 <div className = "text-right" >
                    <button className="btn btn-info" onClick={this.addEmployee} > Agregar Usuario</button>
                    <button className="btn btn-danger" onClick={this.cerrarSesion}> Cerrar Sesion </button>
                 </div>
                


                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Nombre </th>
                                    <th> E-mail </th>
                                    <th> Dirección </th>
                                    <th> Telefono </th>
                                    <th> Acción </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.id} </td>   
                                             <td> {employee.idestado}</td>
                                             <td> {employee.estado}</td>
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
