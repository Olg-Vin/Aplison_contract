module.exports = function (app) {
    app.post('/templates/add', (req, res) => {
        /*  #swagger.tags = ['Templates']
        #swagger.summary = 'Создание нового шаблона'
        #swagger.description = 'Эндпоинт для создания нового шаблона с заданным именем и содержимым.' */

        /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Данные для создания шаблона.',
                required: true,
                schema: { $ref: '#/definitions/TemplateData' }
            }
        */

        /*  #swagger.responses[201] = {
                description: 'Шаблон успешно создан.',
                schema: { $ref: '#/definitions/TemplateCreatedResponse' }
            }
        */
        /*  #swagger.responses[400] = {
                description: 'Пользователь не существует.',
                schema: { $ref: '#/definitions/BadRequestError' }
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
