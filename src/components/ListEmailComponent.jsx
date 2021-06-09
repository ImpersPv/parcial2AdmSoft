import React, { Component } from 'react'
import EmailService from '../services/EmailService'

class ListEmailComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        
        this.login = this.login.bind(this);
        this.imc = this.imc.bind(this);

        this.cerrarSesion = this.cerrarSesion.bind(this);

    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    componentDidMount(){
        //localStorage.setItem('token', null);

        EmailService.getEmployees().then((res) => {
             console.log(res.people.content);
            this.setState({ employees: res.people.content});
        });
    }

    imc(){
        this.props.history.push('/add-imc/_add');
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
                 <h2 className="text-center">Emails</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.phone}</td>
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

export default ListEmailComponent
