import {makeAutoObservable} from 'mobx';

export default class TopiaryStore {
    constructor() {
        this._topiares = [];
        this._filteredTopiares = [];
        makeAutoObservable(this);
    }
    
    setTopiares(topiares) {
        this._topiares = topiares;
    }
    setFilteredTopiares(topiares) {
        this._filteredTopiares = topiares;
    }

    getTopiaryById(id) {
        return this._topiares.find(topiary => topiary.id === id);
    }

    get topiares() {
        return this._topiares;
    }
    
    get filteredTopiares() {
        return this._filteredTopiares;
    }
}