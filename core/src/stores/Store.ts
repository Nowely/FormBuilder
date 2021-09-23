import {action, computed, makeObservable, observable} from "mobx";
import {Input} from "../models/Input/Input";
import {Header} from "../models/Header/Header";
import AbstractModel from "../models/AbstractModel";
import {Button} from "../models/Button/Button";
import {Dropdown} from "../models/Dropdown/Dropdown";
import {TextArea} from "../models/TextArea/TextArea";
import {Control, key, TypeToClass} from "../utils/constants";
import toModel from "../utils/toModel";
import {Container} from "../models/Container/Container";


class Store {
    readonly ModelType: TypeToClass = {
        Input: Input,
        Button: Button,
        Header: Header,
        TextArea: TextArea,
        Dropdown: Dropdown,
        Container: Container
    }

    models: AbstractModel[] = []

    get components() {
        console.log("Computing...")
        return this.models.map(value => value.getComponent());
    }

    get keys(): key[] {
        return this.models.map(value => {
            return  getKeys(value)
        });

        function getKeys(model: AbstractModel): key {
            if (model.children?.length) {
                return {key: model.key, children: model.children.map(getKeys)}
            }
            return model.key
        }
        //return this.models.map(value => value.key);
    }

    //TODO add more easy way to get all keys and their model
    //TODO nested model
    getModel(key: string):AbstractModel | null {
        let model = this.models.find(value => value.key == key);
        if (model) return model
        return null;
    }

    constructor() {
        makeObservable(this, {
            models: observable,
            components: computed,
            keys: computed,
            download: action.bound,
            upload: action.bound,
            clear: action.bound,
            fillFormModel: action.bound,
            add: action.bound
        })
    }

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

            const target = e.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];

            // setting up the reader
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            // here we tell the reader what to do when it's done reading...
            reader.onload = readerEvent => {
                var content: string = readerEvent.target?.result as string ?? ""; // this is the content!

                this.setModelSnapshot(content)
            }

        }

        input.click();
    }

    clear() {
        this.models = [];
    }

    getModelSnapshot() {
        return JSON.stringify(this.models, null, 2)
    }

    setModelSnapshot(jsonString: string) {
        let json = JSON.parse(jsonString);
        this.models = json.map(toModel)
    }

    add(type: string){
        console.log(type)
        //console.log(Control[Control[type]])
        let modelType = this.ModelType[type as any];
        let key = (Math.random() + 1).toString(36).substring(7);
        let model = new modelType(key)
        this.models.push(model)
    }


    //TODO Test section
    fillFormModel(code: string, getForm: (code: string) => any[]) {
        //this.model = getForm(code);
        if (this.models.length > 0) return

        let header = new Header("header 1")
        header.main.content = "Application Form"
        header.main.subheader = "Make it easier"
        this.models.push(header);

        let title = new Input("title")
        title.main.label = "Title"
        this.models.push(title)

        let nameContainer = new Container("name container")
        this.models.push(nameContainer)

        let firstName = new Input("first name")
        firstName.main.label = "First Name"
        nameContainer.children.push(firstName)

        let lastName = new Input("last name")
        lastName.main.label = "Last Name"
        nameContainer.children.push(lastName)

        let type = new Dropdown("type")
        type.main.label = "Type"
        type.main.data.push(
            {label: "Internal", value: "Internal"},
            {label: "External", value: "External"},
            {label: "Direct", value: "Direct"})
        type.design.block = true
        this.models.push(type)

        let comment = new TextArea("comment");
        comment.main.label = "Comment"
        comment.main.rows = 5
        this.models.push(comment)

        let buttonContainer = new Container("button container")
        this.models.push(buttonContainer)

        let saveButton = new Button("save")
        saveButton.main.content = "Save"
        saveButton.main.appearance = "primary"
        buttonContainer.children.push(saveButton);

        let cancelButton = new Button("cancel")
        cancelButton.main.content = "Cancel"
        buttonContainer.children.push(cancelButton);

    }
}

export const store = new Store()