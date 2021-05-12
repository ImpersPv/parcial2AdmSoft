import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            <a class="navbar-brand text-white" href="#"><i class="fa fa-graduation-cap fa-lg mr-2"></i>ADMINISTRADOR DE PERFILES</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="nvbCollapse">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item pl-1">
                                        <a class="nav-link" href="/"><i class="fa fa-home fa-fw mr-1"></i>Opcion 1</a>
                                    </li>
                                    <li class="nav-item active pl-1">
                                        <a class="nav-link" href="/"><i class="fa fa-th-list fa-fw mr-1"></i>Opcion 2</a>
                                    </li>
                                    <li class="nav-item pl-1">
                                        <a class="nav-link" href="/"><i class="fa fa-info-circle fa-fw mr-1"></i>Opcion 3</a>
                                    </li>
                                    <li class="nav-item pl-1">
                                        <a class="nav-link" href="/"><i class="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Opcion 4</a>
                                    </li>
                                    <li class="nav-item pl-1">
                                        <a class="nav-link" href="/"><i class="fa fa-user-plus fa-fw mr-1"></i>NombreUsuario</a>
                                    </li>
                                    <li class="nav-item pl-1">
                                        <a class="nav-link" href="/"><i class="fa fa-sign-in fa-fw mr-1"></i>Opcion 6</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
