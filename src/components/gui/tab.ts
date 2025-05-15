import { allModelTypes } from "../models/modelsProps";

export default () => {
    window.addEventListener("DOMContentLoaded", () => {
        allModelTypes.map((m) => {
            const $model = document.getElementById(`${m}-model`);

            if ($model instanceof HTMLElement) {
                $model.onclick = () => {
                    const $selectTools = document.getElementById(
                        `${selectTools}-model`
                    );

                    $model.style.backgroundColor = "#646cff";

                    if ($selectTools instanceof HTMLElement) {
                        $selectTools.style.backgroundColor = "";
                    }
                    selectTools = m;
                };
            }
        });
    });
};
