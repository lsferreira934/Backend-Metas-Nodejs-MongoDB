const Meta = require('../models/Metas');

module.exports = {
  async Index(req, res) {
    try {
      const allMeta = await Meta.find();
      return res.json({ erro: false, metas: allMeta });
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: 'Erro: Nenhuma Meta cadastrada!',
        err: `${err}`,
      });
    }
  },
  async Create(req, res) {
    await sleep(3000);

    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    try {
      const createMeta = await Meta.create(req.body);
      return res.json({
        error: false,
        message: 'Meta cadastrada com sucesso!',
        meta: createMeta,
      });
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: 'Erro: Meta não pode ser cadastrada',
        err: `${err}`,
      });
    }
  },
};
