import { modelStore } from "../../settings";
import { ALL_MODEL_TYPES } from "../models/modelsProps";

export default () => {
    window.addEventListener("DOMContentLoaded", () => {
        ALL_MODEL_TYPES.map((m) => {
            const $model = document.getElementById(`${m}-model`);

            if ($model instanceof HTMLElement) {
                $model.onclick = () => {
                    const $selectTools = document.getElementById(
                        `${modelStore.selected}-model`
                    );

                    $model.style.backgroundColor = "#646cff";

                    if ($selectTools instanceof HTMLElement) {
                        $selectTools.style.backgroundColor = "";
                    }
                    modelStore.selected = m;
                };
            }
        });
    });
};
