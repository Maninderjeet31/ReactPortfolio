import React from "react";
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menus() {
    return (
        <div className="container-fluid text-sm-center p-5 bg-light">
            <ListGroup flush>
                <Link className="list-group-item list-group-item-action" to="/home" tag="a" action>
                    Home
                </Link>
                <Link className="list-group-item list-group-item-action" to="/experience" tag="a" action>
                    Experience
                </Link>
                <Link className="list-group-item list-group-item-action" to="/education" tag="a" action>
                    Education
                </Link>
                <Link className="list-group-item list-group-item-action" to="/skills" tag="a" action>
                    Skills
                </Link>
                <Link className="list-group-item list-group-item-action" to="/projects" tag="a" action>
                    Projects
                </Link>
                <Link className="list-group-item list-group-item-action" to="/contact" tag="a" action>
                    Contact
                </Link>
            </ListGroup>        
        </div>
    );
}

export default Menus;