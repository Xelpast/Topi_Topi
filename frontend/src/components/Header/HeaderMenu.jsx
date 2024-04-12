export default function HeaderMenu({title, image_header}) {
    return (
        <li>
            <img src={image_header} alt="HeaderImage" />
            <p>{title}</p>
        </li>
    );
}