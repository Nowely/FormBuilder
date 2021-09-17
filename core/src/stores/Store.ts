import {makeAutoObservable} from "mobx";
import {InputStore} from "./InputStore";
import {HeaderStore} from "./HeaderStore";
import AbstractStore from "./AbstractStore";
import {ButtonStore} from "./ButtonStore";
import {DropdownStore} from "./DropdownStore";


export class Store {
    constructor() {
        makeAutoObservable(this)
    }

    //Interface with typeControl and key? instead any type. Or create abstract (base) ComponentStore
    model: AbstractStore[] = []

    downloadModel() {

    }

    uploadModel() {

    }

    //TODO Test section
    fillFormModel(code: string, getForm: (code: string) => any[]) {
        //this.model = getForm(code);
        let header = new HeaderStore("header 1")
        header.primary.content = "Application Form"
        header.primary.subheader = "Make it easier"
        this.model.push(header);

        let title = new InputStore("title")
        title.primary.label = "Title"
        this.model.push(title)

        let firstName = new InputStore("first name")
        firstName.primary.label = "First Name"
        this.model.push(firstName)

        let lastName = new InputStore("last name")
        lastName.primary.label = "Last Name"
        this.model.push(lastName)

        let type = new DropdownStore("type")
        type.primary.label = "Type"
        type.primary.data.push(
            {label: "Internal", value: "Internal"},
            {label: "External", value: "External"},
            {label: "Direct", value: "Direct"})
        type.design.block = true
        this.model.push(type)


        let saveButton = new ButtonStore("save")
        saveButton.primary.content = "Save"
        saveButton.primary.appearance = "primary"
        this.model.push(saveButton);

        let cancelButton = new ButtonStore("cancel")
        cancelButton.primary.content = "Cancel"
        this.model.push(cancelButton);

    }
}