import { Controller } from "../../../type/general";

export const getAllUsers: Controller = (req, res) => {
    res.status(200).json({
        status: 'ok',
        data: []
    })
}