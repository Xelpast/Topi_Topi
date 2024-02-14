import topi_logo from '../img/logo_topi.png';
import { header_arr } from '../data';
import Header_menu from './Header_menu';
import Test_button from './test_button';

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
            <Test_button>Привет</Test_button>
            <Test_button>Пока</Test_button>
            <Test_button>Как дела?</Test_button>
        </header>
    );
}