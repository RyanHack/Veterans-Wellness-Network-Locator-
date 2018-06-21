const express = require('express')
const router = express.Router()

const queries = require('./queries')


router.get("/", (request, response, next) => {
    queries.list().then(practitioners => {
        response.json({ practitioners });
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(practitioner => {
        practitioner
            ? response.json({ practitioner })
            : response.sendStatus(404)
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(practitioner => {
        response.status(201).json({ practitioner: practitioner });
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(practitioner => {
        response.json({ practitioner: practitioner[0] });
    }).catch(next);
});

module.exports = router
