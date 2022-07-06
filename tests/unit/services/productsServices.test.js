const sinon = require('sinon');
const { expect } = require('chai');
const productsModels = require('../../../models/productsModels');
const productsService = require('../../../services/productsService');

describe('Testing function getAll', () => {
  describe('If theres nothing, return an empty array', () => {
    const payloadProducts = []
    beforeEach(async () => {
      sinon.stub(productsModels, 'getAll').resolves(payloadProducts)
    });
    afterEach(async () => {
      productsModels.getAll.restore();
    });
    it('must return an empty array', async () => {
      const response = await productsService.getAll();

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
        sinon.stub(productsModels, 'getAll').resolves(payloadProducts);
      });

      // afterEach(() => {
      //   productsModels.getAll.restore();
      // });

      it('should returns an array', async () => {
        const result = await productsService.getAll();
        expect(result).to.be.an('array');
      });

      it('should returns an array with 3 positions', async () => {
        const result = await productsService.getAll();
        expect(result.length).to.be.equal(3);
      });

      it('the objects should be have the keys id and name', async () => {
        const [result] = await productsService.getAll();
        expect(result).to.includes.all.keys('id', 'name');
      });
    });
  });
});