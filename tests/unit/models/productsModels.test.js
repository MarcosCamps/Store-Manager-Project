const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productsModels = require('../../../models/productsModels');

describe('Testing something about products', () => {
  describe('Testing about getAll', () => {
    beforeEach(async () => {
      const payloadProducts = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
        {
          "id": 2,
          "name": "Traje de encolhimento"
        },
        {
          "id": 3,
          "name": "Escudo do Capitão América"
        }
      ]
      sinon.stub(connection, 'execute').resolves(payloadProducts)
    });
    afterEach(async () => {
      sinon.execute.restore();
    });
    it('must return an array', async () => {
      const response = await productsModels.getAll();
      expect(response).to.be.a('array');
    });
    it('must return an array of products', async () => {
      const response = await productsModels.getAll();
      expect(response).to.be.deep.equal(payloadProducts);
    });
  });
});