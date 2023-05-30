import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data})=>{
    const elems  = data.map((item)=>{
        return(
            <EmployersListItem {...item}/>
        )
    })
    return(
        <ul className='app-list list-group'>
            {elems}
        </ul>
    )
};

export default EmployersList;