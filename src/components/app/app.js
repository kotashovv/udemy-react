import {Component} from "react";
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [
                {
                    name: 'John',
                    salary: '500',
                    increase: false,
                    id: 1,
                },
                {
                    name: 'Ivan',
                    salary: '1300',
                    increase: true,
                    id: 2,
                },
                {
                    name: 'Hanna',
                    salary: '800',
                    increase: false,
                    id: 3,
                },
            ]
        }
    }

    addItem = (e, name, salary) =>{
        e.preventDefault();
        const newEmploye = {
            name: name,
            salary: salary,
            increase: false,
            id: this.getMaxId() + 1,
        }

        this.setState((prevState)=>({
            data: [...prevState.data, newEmploye]
        }))
    };

    onToggleProp = (id, prop) => {

        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    onToggleFavorite = (id) =>{
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id === id);
            const old = data[index];
            const newItem = {...old, favorite: !old.favorite};
            const newArr = [...data.slice(0 , index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr,
            }
        })
    }

    getMaxId = () =>{
        const {data} = this.state;
        if (data.length == 0) {
            return 0;
        }

        const maxId = data[data.length - 1].id;
        return maxId;
    }

    onDelete = (id) =>{
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            //
            // const newArr = [...before, ...after];
            return{
                // data: newArr
                data: data.filter(item => item.id !==id)
            }
        })
    }

    render() {

        const employers = this.state.data.length;
        const increased = this.state.data.filter(item=>item.increase === true).length;

        return(
            <div className='app'>
                <AppInfo employers={employers} increased={increased}/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList
                    onDelete={this.onDelete}
                    data={this.state.data}
                    onToggleProp={this.onToggleProp}
                />
                <EmployersAddForm
                    addItem={this.addItem}
                />
            </div>
        );
    }

}

export  default  App;