export default function Header_menu({title, image_header}) {
    return (
        <li>
            <img src={image_header} alt="image" />
            <p>{title}</p>
        </li>
    );
}