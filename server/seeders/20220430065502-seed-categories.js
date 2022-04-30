'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let data = require('../dummy/categories.json')
    data.forEach(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()

    })
    await queryInterface.bulkInsert('Categories', data, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});
  }
};
