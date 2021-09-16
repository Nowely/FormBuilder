import {makeAutoObservable} from "mobx";
import {InputStore} from "./InputStore";
import {HeaderStore} from "./HeaderStore";


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
        //this.model = getForm(code);
        let header = new HeaderStore("header 1")
        header.primary.content = "Application Form"
        header.primary.subheader = "Make it easier"

        let a = new InputStore("asdasd")
        this.model.push(a) //For testing
    }
}