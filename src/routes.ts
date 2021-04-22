import {Router} from "express"
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de parametros
 * Route Params => parametros de rotas (//localhost:3333/settings/1)
 * Query Params => filtros e buscas (//localhost:3333/settings/1?search=algo)
 * body params => {
 *  JSON
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export {routes}