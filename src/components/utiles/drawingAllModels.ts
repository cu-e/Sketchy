import { getAllModelsFromLocalStorage } from "./storageUtils"

export default (ctx : CanvasRenderingContext2D) => {
    getAllModelsFromLocalStorage().map(e  => {
        e.drawing(ctx)
    })
}