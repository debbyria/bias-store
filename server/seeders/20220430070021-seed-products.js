'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let data = require('../dummy/products.json')
    data.forEach(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Products', data, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
