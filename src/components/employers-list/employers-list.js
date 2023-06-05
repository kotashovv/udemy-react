import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data, onDelete, onToggleFavorite, onToggleIncrease})=>{
    const elems  = data.map((item)=>{
        const {id} = item;
        return(
            <EmployersListItem
                {...item}
                key={id}
                onDelete={onDelete}
                onToggleFavorite={onToggleFavorite(id)}
                onToggleIncrease={onToggleIncrease}
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