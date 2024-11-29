const parameters = require('./path-to-parameters');

module.exports = function (app) {
    app.get('/templates/:id/details', (req, res) => {
        /*  #swagger.tags = ['Templates']
            #swagger.summary = 'Получение шаблона по ID'
            #swagger.description = 'Эндпоинт для получения информации о конкретном шаблоне по его идентификатору.' */

        /*  #swagger.parameters['id'] = { $ref: '#/parameters/TemplateIdParameter' } */

        /*  #swagger.responses[200] = {
                description: 'Шаблон успешно получен.',
                schema: { $ref: '#/definitions/TemplateCreatedResponse' }
            }
        */
        /*  #swagger.responses[404] = {
                description: 'Шаблон не найден.',
                schema: { $ref: '#/definitions/NotFoundError' }
            }
        */
        /*  #swagger.responses[500] = {
                description: 'Ошибка сервера.',
                schema: { $ref: '#/definitions/InternalServerError' }
            }
        */
        res.status(501).send(); // Абстрактный метод не реализован
    });
};
