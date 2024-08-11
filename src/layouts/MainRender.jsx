import BasicHeader from "../components/headers/BasicHeader";
import './assets/Layouts.css';

const MainRender = ({ children }) => {
    return (
        <div className='main-render'>
            <BasicHeader icon='🚀' title='MarketPlace' />
            {children}
        </div>
    )
}

export default MainRender;