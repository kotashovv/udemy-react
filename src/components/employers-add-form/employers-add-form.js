import {Component} from "react";

import './Empoyers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0,
        }
    }

    onValueChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


   render(){
        const {addItem} = this.props;
        const {name, salary} = this.state;
       return(
           <div className="app-add-form">
               <h3>Добавьте нового сотрудника</h3>
               <form
                   className="add-form d-flex">
                   <input type="text"
                          className="form-control new-post-label"
                          placeholder="Как его зовут?"
                          onChange={this.onValueChange}
                          name='name'
                          value={name}
                   />
                   <input type="number"
                          className="form-control new-post-label"
                          placeholder="З/П в $?"
                          onChange={this.onValueChange}
                          name='salary'
                          value={salary}
                   />

                   <button onClick={(e)=>addItem(e, name, salary)} type="submit"
                           className="btn btn-outline-light">Добавить
                   </button>
               </form>
           </div>
       )
   }
}

export default EmployersAddForm;