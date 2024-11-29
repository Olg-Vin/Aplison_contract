module.exports = function (app) {
    app.delete('/publish_requests/delete/:id', (req, res) => {
        /*  #swagger.tags = ['PublishRequests']
            #swagger.summary = 'Удалить запрос публикации'
            #swagger.description = 'Эндпоинт для удаления запроса публикации по его идентификатору.' */

        /*  #swagger.parameters['id'] = {
                $ref: '#/definitions/PublishIdParameter'
            } */

        /*  #swagger.responses[204] = {
                description: 'Запрос публикации успешно удалён.'
            }
        */

        /*  #swagger.responses[404] = {
                description: 'Запрос публикации не найден.',
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
