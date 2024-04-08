export default function Burger_menu({title, image_header_bm}) {
    return (
        <li>
            <img src={image_header_bm} alt="burger_image" />
            <p>{title}</p>
        </li>
    );
}