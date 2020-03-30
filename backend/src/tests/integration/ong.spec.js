const request = require('supertest');
const app = require('../../../src/app');
const connection = require('../../database/connection');

describe ('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    })

    it ('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Barbearia Tradicional", 
                email: "rccd75@gmail.com",
                whatsapp: "61981264932",  
                city:  "Brasilia",
                uf: "df"
            })

        console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});