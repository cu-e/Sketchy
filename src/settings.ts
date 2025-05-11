import modelsProps from "./components/models/modelsProps";

class ModelStore {
    #modelSelected: modelsProps = null;

    get selected() {
        return this.#modelSelected;
    }
    set selected(value) {
        this.#modelSelected = value;
    }
}
export const modelStore = new ModelStore();
