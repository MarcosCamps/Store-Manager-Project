const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productsModels = require('../../../models/productsModels');

describe('Testing function getAll', () => {
  describe('If theres nothing, return an empty array', () => {
    const payloadProducts = [[]]
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(payloadProducts)
    });
    afterEach(async () => {
      sinon.restore();
    });
    it('must return an empty array', async () => {
      const response = await productsModels.getAll();
      expect(response).to.be.an('array');
      expect(response).to.be.empty;
    });
    it('must return an array of products', async () => {
      const payloadProducts = [[
        { "id": 1, "name": "Martelo de Thor" },
        { "id": 2, "name": "Traje de encolhimento" },
        { "id": 3, "name": "Escudo do Capitão América" }
      ]];

      beforeEach(() => {
        sinon.stub(connection, 'execute').resolves(payloadProducts);
      });

      afterEach(() => {
        sinon.restore();
      });

      it('should returns an array', async () => {
        const result = await productsModels.getAll();
        expect(result).to.be.an('array');
      });

      it('should returns an array with 3 positions', async () => {
        const result = await productsModels.getAll();
        expect(result.length).to.be.equal(3);
      })
      
      it('the objects should be have the keys id and name', async () => {
        const [result] = await productsModels.getAll();
        expect(result).to.includes.all.keys('id', 'name');
      })
    });
  });
});