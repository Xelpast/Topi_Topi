export default function Test_button({children}) {
    function TestButtonClick() {
        console.log("Ты кликнул");
    }
    return <button onClick={TestButtonClick}>{children}</button>
}