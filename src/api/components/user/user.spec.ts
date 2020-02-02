import request from 'supertest'

import { UserModel, User } from './model'
import server from '../../server'

describe('User', () => {
    beforeEach(async () => {
        let user = new UserModel({
            name: "Duy Nguyen",
        } as User)

        await user.save()
    })

    afterEach(async () => {
        await UserModel.deleteMany({})
    })

    describe('/GET ', () => {
        it('it should GET all the users', (done) => {
            request(server).get('/user', (err, res) => {
                expect(res.status).toBe(200)
                expect(res.body).toMatchObject({ status: 'oke' })
                expect(res.body.data[0]).toMatchObject({ name: "Duy Nguyen" })
            })
            done()
        })
    })
})