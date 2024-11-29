module.exports = function (app) {
    app.delete('/templates/delete/:id', (req, res) => {
        /*  #swagger.tags = ['Templates']
            #swagger.summary = 'Удаление шаблона'
            #swagger.description = 'Эндпоинт для удаления шаблона с указанным идентификатором.' */

        /*  #swagger.parameters['id'] = {
                in: 'path',
                description: 'ID шаблона, который нужно удалить.',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        */

        /*  #swagger.responses[204] = {
                description: 'Шаблон успешно удалён. Нет содержимого в ответе.'
            }
        */
        /*  #swagger.responses[404] = {
                description: 'Шаблон не найден.',
                schema: { $ref: '#/definitions/NotFoundError' }
            }
        */
        /*  #swagger.responses[500] = {
                schema: { $ref: '#/definitions/InternalServerError' }
            }
        */
        res.status(501).send(); // Абстрактный метод не реализован
    });
};
