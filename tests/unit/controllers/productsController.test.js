const sinon = require('sinon');
const { expect } = require('chai');
const productsController = require('../../../controllers/productsControllers');
const productsService = require('../../../services/productsService');

describe('When calling the function, returns the data', () => {
  const payloadProducts = [
    { "id": 1, "name": "Martelo de Thor" },
    { "id": 2, "name": "Traje de encolhimento" },
    { "id": 3, "name": "Escudo do Capitão América" }
  ];
  const res = {};
  const req = {};
  const next = () => { };

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves(payloadProducts);
  });

  afterEach(() => {
    productsService.getAll.restore();
  });

  it('if its calling the status with the code 200', async () => {
    await productsController.getAll(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('if the "json" method is called passing an array', async () => {
    await productsController.getAll(req, res, next);
    expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    expect(res.json.getCall(0).args[0]).to.be.deep.equal([
      { "id": 1, "name": "Martelo de Thor" },
      { "id": 2, "name": "Traje de encolhimento" },
      { "id": 3, "name": "Escudo do Capitão América" }
    ]);
  });
});