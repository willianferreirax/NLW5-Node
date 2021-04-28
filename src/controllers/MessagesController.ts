import { Request, Response} from   "express" 
import { MessagesService } from "../services/MessagesService"


class MessagesController{

    async create(request:Request, response:Response){
        const messageService = new MessagesService();
        const {admin_id, text, user_id} = request.body

        const message = await messageService.create({
            admin_id,
            text,
            user_id
        })

        return response.json(message)
    }

    async showByUser(request:Request, response:Response){
        const {id} = request.params
        const messageService = new MessagesService();

        const list = await messageService.listByUser(id)

        return response.json(list)
    }
}

export {MessagesController}