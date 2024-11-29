module.exports = function (app) {

    app.get('/templates', (req, res) => {
        /*  #swagger.tags = ['Templates']
        #swagger.summary = 'Получить список всех шаблонов'
        #swagger.description = 'Возвращает список всех доступных шаблонов с ссылками на их ресурсы.' */
        /*  #swagger.responses[200] = {
                description: 'Список шаблонов успешно получен.',
                schema: { $ref: '#/definitions/TemplatesResponse' }
            }
        */
        /*  #swagger.responses[500] = {
                schema: { $ref: '#/definitions/InternalServerError' }
            }
        */
        res.status(501).send(); // Абстрактный метод не реализован
    });
};
