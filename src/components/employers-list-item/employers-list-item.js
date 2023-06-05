import {Component} from "react";

import './employers-list-item.css';

const EmployersListItem = (props)=> {

        const {name, salary, onDelete, id, onToggleProp, increase, favorite} = props;

        let classNames = 'list-group-item d-flex justify-content-between'
        if (increase){
            classNames += ' increase';
        }
        if (favorite) {
            classNames += ' like';
        }

        return(
            <li className={classNames}>
                <span onClick={onToggleProp} data-toggle='favorite' className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            data-toggle="increase"
                            onClick={onToggleProp}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button onClick={()=>onDelete(id)} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

}

export default EmployersListItem;