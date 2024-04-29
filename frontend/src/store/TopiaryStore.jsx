import {makeAutoObservable} from 'mobx';
import mother_work from "../img/mother_work.png";

export default class TopiaryStore {
    constructor() {
        this._topiares = []
        makeAutoObservable(this);
    }

    setTopiares(topiares) {
        this._topiares = topiares;
    }

    get topiares() {
        return this._topiares;
    }

    getTopiaryById(id) {
        return this._topiares.find(topiary => topiary.id === id);
    }
}