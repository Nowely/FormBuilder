import {store} from "../stores/Store";

/**
 * Initialize models from json (any) object
 */
export default (obj: any) => {
    if (!obj.type)
        throw new Error("Don't find type of control!")

    let modelType = store.ModelType[obj.type];

    //TODO improve: new object without create empty object with key
    let model = new modelType("")
    Object.assign(model, obj);
    return model;
}