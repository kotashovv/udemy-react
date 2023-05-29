import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const RenderElement = ()=> {
    return (
        <div className='container'>
            {Object.values(json).map(item => (
                <div
                    key={item.key}
                    style={{
                        width: `${item.width}px`,
                        height: `${item.height}px`,
                        left: `${item.x}px`,
                        top: `${item.y}px`,
                        visibility: item.visible ? 'visible' : 'hidden',
                    }}
                >
                    /* Сюда пишем другие свойства */
                </div>
            ))}
        </div>
    );
}

ReactDOM.render(<RenderElements />, document.getElementById('root'));

function App() {
    return(
        <div className='app'>
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList/>
            <EmployersAddForm/>
        </div>
    );
};

export  default  App;