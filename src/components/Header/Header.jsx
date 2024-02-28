import { Link } from "react-router-dom";
import topi_logo from '../../img/logo_topi.png';
import { header_arr,  header_image_arr } from '../../data';
import '../../css/header.css';
import Header_search from './Header_search';
import Header_menu from './Header_menu';

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header_band">
                    <Link to="/"><img className="logo" src={topi_logo} alt="" /></Link>
                    <Header_search />
                    <div className="header_menu">
                        <ul>
                            <Link to="/like" className="link"><Header_menu image_header={header_image_arr[0].image_header} title={header_arr[0].title} /></Link>
                            <Header_menu image_header={header_image_arr[1].image_header} title={header_arr[1].title} />
                            <Header_menu image_header={header_image_arr[2].image_header} title={header_arr[2].title} />
                            <Header_menu image_header={header_image_arr[3].image_header} title={header_arr[3].title} />
                            <Header_menu image_header={header_image_arr[3].image_header} title={header_arr[4].title} />
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}