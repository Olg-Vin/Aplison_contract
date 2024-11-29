module.exports = function (app) {
    app.post('/publish_requests/add', (req, res) => {
        /*  #swagger.tags = ['PublishRequests']
            #swagger.summary = 'Создание запроса на публикацию'
            #swagger.description = 'Эндпоинт для создания нового запроса на публикацию для указанного шаблона.'
        */

        /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Данные для создания запроса на публикацию.',
                required: true,
                schema: { $ref: '#/definitions/PublishRequest' }
            }
        */

        /*  #swagger.responses[201] = {
                description: 'Запрос на публикацию успешно создан.',
                schema: { $ref: '#/definitions/PublishRequestResponse' }
            }
        */

        /*  #swagger.responses[404] = {
                description: 'Указанный шаблон не найден.',
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
