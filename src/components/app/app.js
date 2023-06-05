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
                    favorite: true,
                },
                {
                    name: 'Ivan',
                    salary: '1300',
                    increase: true,
                    id: 2,
                    favorite: false,
                },
                {
                    name: 'Hanna',
                    salary: '800',
                    increase: false,
                    id: 3,
                    favorite: false,
                },
            ]
        }
    }

    addItem = (event ,name, salary) =>{
        event.preventDefault();
        const newEmploye = {
            name: name,
            salary: salary,
            increase: false,
            favorite: false,
            id: this.getMaxId() + 1,
        }

        this.setState((prevState)=>({
            data: [...prevState.data, newEmploye]
        }))
    };

    getMaxId = () =>{
        const {data} = this.state;
        if (data.length == 0) {
            return 0;
        }

        const maxId = data[data.length - 1].id;
        return maxId;
    }

    onToggleIncrease = (id)=>{
        console.log(`this Increase ${id}`);
    }
    onToggleFavorite = (id)=>{
        console.log(`this Favorite ${id}`);
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
        return(
            <div className='app'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList
                    onDelete={this.onDelete}
                    data={this.state.data}
                    onToggleIncrease = {this.onToggleIncrease}
                    onToggleFavorite = {this.onToggleFavorite}
                />
                <EmployersAddForm
                    addItem={this.addItem}
                />
            </div>
        );
    }

}

export  default  App;