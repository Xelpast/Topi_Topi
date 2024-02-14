import topi_logo from '../img/logo_topi.png';
import { header_arr } from '../data';
import Header_menu from './Header_menu';

export default function Header() {
    return (
        <header>
            <img src={topi_logo} alt="" />
            <ul>
                <Header_menu title={header_arr[0].title} />
                <Header_menu title={header_arr[1].title} />
                <Header_menu title={header_arr[2].title} />
                <Header_menu title={header_arr[3].title} />
                <Header_menu title={header_arr[4].title} />
            </ul>
        </header>
    );
}