import style_spiner from '../../css/spinner.module.css';

export default function Spinner() {
    return (
        <div className={style_spiner.main_spinner}>
            <div className={style_spiner.loader}>
                <div className={`${style_spiner.inner} ${style_spiner.one}`}></div>
                <div className={`${style_spiner.inner} ${style_spiner.two}`}></div>
                <div className={`${style_spiner.inner} ${style_spiner.three}`}></div>
            </div>
        </div>
    );
}