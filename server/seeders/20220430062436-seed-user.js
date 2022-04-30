'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    let data = require('../dummy/user.json');
    const { createHashPassword } = require('../helpers/helper');
    data.forEach(el => {
      delete el.id
      el.password = createHashPassword(el.password)
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
