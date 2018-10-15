'use strict'

const mongoose = require('mongoose');
const Index = mongoose.model('Index');
const repository = require('../repositories/index-repository');

exports.get = (req, res, next) => {
    repository
        .getAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    repository
        .create(req.body)
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
    repository
        .updateById(req.params.id, req.body)
        .then((x) => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!' 
            });
        })
        .catch((e) => {
            res.status(400).send({ 
                message: 'Falha ao atualizar o produto!',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    repository
        .deleteById(req.params.id)
        .then((x) => {
            res.setHeader('location', 'www.google.com');
            res.status(200).send({
                message: 'Produto excluído com sucesso!' 
            });
        })
        .catch((e) => {
            res.status(400).send({ 
                message: 'Falha ao excluir o produto!',
                data: e
            });
        });
}