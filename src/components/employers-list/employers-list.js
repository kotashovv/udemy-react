import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data, onDelete, onToggleProp})=>{
    const elems  = data.map((item)=>{
        const {id} = item;
        return(
            <EmployersListItem
                {...item}
                key={id}
                onDelete={onDelete}
                onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })
    return(
        <ul className='app-list list-group'>
            {elems}
        </ul>
    )
};

export default EmployersList;