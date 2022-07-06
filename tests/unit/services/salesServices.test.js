const sinon = require('sinon');
const { expect } = require('chai');
const salesModels = require('../../../models/salesModels');
const salesService = require('../../../services/salesService');


describe('Testing function getAll', () => {
  describe('If theres nothing, return an empty array', () => {
    const payloadSales = []
    
    beforeEach(async () => {
      sinon.stub(salesModels, 'getAll').resolves(payloadSales);
    });

    afterEach(async () => {
      salesModels.getAll.restore();
    });

    it('Should return an array of sales', () => {
      const saleResult = [
        {
          "saleId": 1,
          "date": "2022-07-06T22:06:50.000Z",
          "productId": 1,
          "quantity": 5
        },
        {
          "saleId": 1,
          "date": "2022-07-06T22:06:50.000Z",
          "productId": 2,
          "quantity": 10
        },
        {
          "saleId": 2,
          "date": "2022-07-06T22:06:50.000Z",
          "productId": 3,
          "quantity": 15
        }
      ]

      beforeEach(() => {
        sinon.stub(salesModels, 'getAll').resolves(saleResult);
      });

      // afterEach(() => {
      //   salesModels.getAll.restore();
      // });
      
      it('should returns an array', async () => {
        const result = await salesService.getAll();
        expect(result).to.be.an('array');
      });

      it.only('the objects should be have the keys', async () => {
        const [result] = await productsService.getAll();
        expect(result).to.includes.all.keys('saleId', 'date', 'productId', 'quantity');
      });
    });
  });
});