import {action, makeAutoObservable} from "mobx";
import {InputStore} from "../models/Input/InputStore";
import {HeaderStore} from "../models/Header/HeaderStore";
import AbstractStore from "../models/AbstractStore";
import {ButtonStore} from "../models/Button/ButtonStore";
import {DropdownStore} from "../models/Dropdown/DropdownStore";
import {TextAreaStore} from "../models/TextArea/TextAreaStore";


export class Store {
    constructor() {
        makeAutoObservable(this, {
            download: action.bound,
            upload: action.bound,
            clear: action.bound,
        })
    }

    //Interface with typeControl and key? instead any type. Or create abstract (base) ComponentStore
    model: AbstractStore[] = []

    download() {
        var data = "data:text/json;charset=utf-8," + encodeURIComponent(this.getModelSnapshot());

        const link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', "form.json");
        document.body.appendChild(link);
        link.onclick = () => {
            document.body.removeChild(link);
        };
        link.click();
    }

    upload() {
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = e => {

            const target= e.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];

            // setting up the reader
            var reader = new FileReader();
            reader.readAsText(file,'UTF-8');

            // here we tell the reader what to do when it's done reading...
            reader.onload = readerEvent => {
                var content: string = readerEvent.target?.result as string ?? ""; // this is the content!

                this.setModelSnapshot(content)
            }

        }

        input.click();
    }

    clear () {
        this.model = [];
    }

    getModelSnapshot() {
        return JSON.stringify(this.model, null, 2)
    }

    setModelSnapshot(jsonString: string) {
        let json = JSON.parse(jsonString);
        this.model = json.map(AbstractStore.castToStore)
    }


    //TODO Test section
    fillFormModel(code: string, getForm: (code: string) => any[]) {
        //this.model = getForm(code);
        let header = new HeaderStore("header 1")
        header.main.content = "Application Form"
        header.main.subheader = "Make it easier"
        this.model.push(header);

        let title = new InputStore("title")
        title.main.label = "Title"
        this.model.push(title)

        let firstName = new InputStore("first name")
        firstName.main.label = "First Name"
        this.model.push(firstName)

        let lastName = new InputStore("last name")
        lastName.main.label = "Last Name"
        this.model.push(lastName)

        let type = new DropdownStore("type")
        type.main.label = "Type"
        type.main.data.push(
            {label: "Internal", value: "Internal"},
            {label: "External", value: "External"},
            {label: "Direct", value: "Direct"})
        type.design.block = true
        this.model.push(type)

        let comment = new TextAreaStore("comment");
        comment.main.label = "Comment"
        comment.main.rows = 5
        this.model.push(comment)

        let saveButton = new ButtonStore("save")
        saveButton.main.content = "Save"
        saveButton.main.appearance = "primary"
        this.model.push(saveButton);

        let cancelButton = new ButtonStore("cancel")
        cancelButton.main.content = "Cancel"
        this.model.push(cancelButton);

    }
}