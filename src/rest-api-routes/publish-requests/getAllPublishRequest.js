module.exports = function (app) {
    app.get('/publish_requests', (req, res) => {
        /*  #swagger.tags = ['PublishRequests']
            #swagger.summary = 'Получить список запросов публикации'
            #swagger.description = 'Эндпоинт для получения списка всех запросов публикации.' */

        /*  #swagger.responses[200] = {
                description: 'Список запросов публикации успешно получен.',
                schema: { $ref: '#/definitions/PublishListResponse' }
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
