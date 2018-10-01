'use strict'

const mongoose = require('mongoose');
const Index = mongoose.model('Index');

exports.get = (req, res, next) => {
    Index.find(
            { active: true }, 
            'title price slug'
        )
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    Index.findOne(
            { 
                slug: req.params.slug,
                active: true
            }, 
            'title description price slug tags'
        )
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    const index = new Index(req.body);
    index.save()
        .then((x) => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!' 
            });
        })
        .catch((e) => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar o produto!',
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.setHeader('location', 'www.google.com');
    res.status(200).send(req.body);
}