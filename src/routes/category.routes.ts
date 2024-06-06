import express from "express"
import { createCategories, deleteCategory, getAllCategories, updateCategory } from "../controller/category-controller"
import { authentcationMiddleware } from "../middleware"
const categoryRoutes = express.Router()
categoryRoutes.use(authentcationMiddleware)
categoryRoutes.route("/").get(getAllCategories)
categoryRoutes.route("/create").post(createCategories)
categoryRoutes.route("/:id").delete(deleteCategory)
categoryRoutes.route("/update").put(updateCategory)
export default categoryRoutes