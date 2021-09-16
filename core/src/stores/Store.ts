import {makeAutoObservable} from "mobx";


export class Store {
    constructor() {
        makeAutoObservable(this)
    }

    //Interface with typeControl and key? instead any type. Or create abstract (base) ComponentStore
    model: any[] = []

    downloadModel() {

    }

    uploadModel() {

    }

    fillFormModel(code: string, getForm: (code: string) => any[]) {
        this.model = getForm(code);
    }
}