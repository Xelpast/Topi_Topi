import admin_style from '../../css/admin.module.css';
import AdminPopUp from './AdminPopUp';
import close_x from '../../img/close_x.png';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { addTopiary, addTopiaryInfo } from '../../http/topiaryApi';

export default function AdminForm({ modalActiveAdmin, setModalActiveAdmin }) {
    const [formData, setFormData] = useState({
        name: '',
        price_default: '',
        price: '',
        manufacturer: '',
        material: '',
        size: '',
        weight: '',
        category: ''
    });

    const handleClose_admin = () => {
        setModalActiveAdmin(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            selectedFile: file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleClose_admin();
        try {
            const { name, price_default, price, selectedFile } = formData;
            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('price_default', price_default);
            formDataToSend.append('price', price);
            formDataToSend.append('img', selectedFile); // Передача файла
            const topiary = await addTopiary(formDataToSend); // Отправка данных на сервер
    
            const { manufacturer, material, size, weight, category } = formData;
            const infoToSend = {
                manufacturer,
                material,
                size,
                weight,
                category
            };

            if (topiary && topiary.id) {
                await addTopiaryInfo(topiary.id, infoToSend);
            } else {
                throw new Error('Ошибка: отсутствует идентификатор товара');
            }
            window.location.reload();
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };
    return (
        <>
            <AdminPopUp modalActiveAdmin={modalActiveAdmin} setModalActiveAdmin={setModalActiveAdmin}>
                <div className={admin_style.admin_form}>
                    <form action="">
                        <div className={admin_style.close_form}>
                            <p>Окно добавления товара</p>
                            <img src={close_x} alt="CloseX" onClick={handleClose_admin} />
                        </div>
                        <div className={admin_style.form_input_admin}>
                            <input
                                type="text"
                                placeholder="Название топиария"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Цена (без скидки)"
                                name="price_default"
                                value={formData.price_default}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Цена (скидочная)"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Производитель"
                                name="manufacturer"
                                value={formData.manufacturer}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Материал"
                                name="material"
                                value={formData.material}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Размер, см."
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Вес, кг."
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Категория"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            />
                            <input
                                type="file"
                                className={admin_style.inputFile}
                                onChange={handleFileChange}
                            />
                        </div>
                        <button onClick={handleSubmit} className={admin_style.btn_admin}>Добавить товар</button>
                    </form>
                </div>
            </AdminPopUp>
        </>
    );
}