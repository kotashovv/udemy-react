
import './app-info.css';

const AppInfo = ()=>{
    const appInfoTitle = 'Учет сотрудников в компании'
    return(
        <div className={'app-info'}>
            <h1>
                {appInfoTitle}
            </h1>
            <h2>
                Общее число сотрудников
            </h2>
            <h2>
                Премию получат:
            </h2>
        </div>
    )
};

export default AppInfo;