import {makeAutoObservable} from 'mobx';

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
        this._topiary = [
            {id: 1, name: "Мамины труды", price: 8999, img: "5927f47d-8f4b-4702-a183-db92b71013a2.png", rating: 5, hitId: 1, categoryId: 3},
            {id: 2, name: "Весна", price: 7999, img: "b66a2606-b544-4fd3-b691-01da4e2e0458.png", rating: 5, hitId: 1, categoryId: 3},
            {id: 3, name: "Зима", price: 5699, img: "18e2db11-4953-48ac-9c7e-6167bbaf2447.png", rating: 5, hitId: 2, categoryId: 2},
            {id: 4, name: "Лето", price: 7699, img: "2f5d9c38-7a31-44bc-99d4-9c60c141a078.png", rating: 5, hitId: 1, categoryId: 2},
            {id: 5, name: "Летняя пора", price: 8699, img: "98a488b6-cccb-4abd-a93d-36d226bff732.png", rating: 5, hitId: 2, categoryId: 3}
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
}