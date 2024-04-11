import {makeAutoObservable} from 'mobx';
import mother_work from "../img/mother_work.png";

export default class TopiaryStore {
    constructor() {
        this._hits = [
            {id: 1, name: "Топиарии Хиты"},
            {id: 2, name: "Популярные топиарии"}
        ]
        this._category = [
            {id: 1, name: "Лиственные деревья"},
            {id: 2, name: "Лего-деревья"},
            {id: 3, name: "Декоративные деревья"}
        ]
        this._topiares = [
            {id: 1, name: "Мамины труды", price: 8999, price_default: 7999, img: mother_work, rating: 5, hitId: 1, categoryId: 3, description: "Прекрасные топиарии, сделанные с любовью."},
            {id: 2, name: "Весеннее чудо", price: 7999, price_default: 5555, img: mother_work, rating: 5, hitId: 1, categoryId: 3, description: "Прекрасные топиарии, сделанные с любовью." },
            {id: 3, name: "Зимняя сказка", price: 5699, price_default: 4222, img: mother_work, rating: 5, hitId: 2, categoryId: 2, description: "Прекрасные топиарии, сделанные с любовью." },
            {id: 4, name: "Летний урожай", price: 7699, price_default: 6666, img: mother_work, rating: 5, hitId: 1, categoryId: 2, description: "Прекрасные топиарии, сделанные с любовью." },
            {id: 5, name: "Летняя пора", price: 8699, price_default: 7777, img: mother_work, rating: 5, hitId: 2, categoryId: 3, description: "Прекрасные топиарии, сделанные с любовью." }
        ]
        makeAutoObservable(this);
    }

    setHites(hites) {
        this._hites = hites;
    }

    setCategores(categores) {
        this._categores = categores;
    }

    setTopiares(topiares) {
        this._topiares = topiares;
    }

    get hites() {
        return this._hites;
    }

    get categores() {
        return this._categores;
    }

    get topiares() {
        return this._topiares;
    }

    getTopiaryById(id) {
        return this._topiares.find(topiary => topiary.id === id);
    }
}