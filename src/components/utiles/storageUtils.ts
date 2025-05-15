import { AnyModel } from "../models/modelsProps";
import { deserializeModels } from "../models/serializers";

/*
 * CanvasModels - Contains all models
 */
export const saveModelToLocalStorage = (model: AnyModel) => {
    const allModels = JSON.parse(localStorage.getItem("CanvasModels") ?? "[]");
    localStorage.setItem("CanvasModels", JSON.stringify([...allModels, model]));
}

export const getAllModelsFromLocalStorage = (): AnyModel[] => {
    const raw: AnyModel[] = JSON.parse(localStorage.getItem("CanvasModels") ?? "[]");
    return deserializeModels(raw);
}