module.exports = function (app) {
    app.post('/login', (req, res) => {
        /*  #swagger.tags = ['Authentication']
            #swagger.summary = 'Авторизация пользователя'
            #swagger.description = 'Эндпоинт для авторизации пользователя с использованием имени пользователя и пароля.' */

        /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Данные для авторизации пользователя.',
                required: true,
                schema: { $ref: '#/definitions/LoginRequest' }
            }
        */

        /*  #swagger.responses[200] = {
                description: 'Успешная авторизация.',
                schema: { $ref: '#/definitions/LoginResponse' }
            }
        */

        /*  #swagger.responses[401] = {
                description: 'Неверное имя пользователя или пароль.',
                schema: { $ref: '#/definitions/UnauthorizedError' }
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
