process.env.NODE_ENV = 'test';

import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server'

chai.use(chaiHttp)

describe('User', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done()
    })

    describe('/GET ', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/user')
                .end((err, res) => {
                    expect(res.status).to.eq(200, "Status code should be 200")
                    expect(res.body).to.be.a('object')
                    expect(res.body.status).to.be.eq('ok', "Response status should be ok")
                    expect(res.body.data).to.be.a('array', "Response status should be ok")
                    done();
                });
        });
    });
});