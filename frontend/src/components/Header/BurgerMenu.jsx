export default function BurgerMenu({title, image_header_bm}) {
    return (
        <li>
            <img src={image_header_bm} alt="burgerImage" />
            <p>{title}</p>
        </li>
    );
}