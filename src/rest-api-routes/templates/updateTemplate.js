module.exports = function (app) {
    app.put('/templates/update/:id', (req, res) => {
        /*  #swagger.tags = ['Templates']
            #swagger.summary = 'Обновление шаблона по ID'
            #swagger.description = 'Эндпоинт для обновления шаблона с заданным ID.
            Шаблон будет обновлен с новыми значениями имени и содержимого.'
        */

        /*  #swagger.parameters['id'] = { $ref: '#/parameters/TemplateIdParameter' } */

        /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Данные для обновления шаблона.',
                required: true,
                schema: { $ref: '#/definitions/TemplateData' }
            }
        */

        /*  #swagger.responses[200] = {
                description: 'Шаблон успешно обновлен.',
                schema: { $ref: '#/definitions/TemplateResponse' }
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
