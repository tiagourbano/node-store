'use strict'

const mongoose = require('mongoose');
const Index = mongoose.model('Index');

exports.getAll = () => {
    return Index
        .find(
            { active: true }, 
            'title price slug'
        );
}

exports.getBySlug = (slug) => {
    return Index
        .findOne(
        { 
            slug: slug,
            active: true
        }, 
        'title description price slug tags'
    )
}

exports.create = (data) => {
    const index = new Index(data);
    return index.save();
}

exports.updateById = (id, data) => {
    return Index
        .findByIdAndUpdate(
            id,
            {
                $set: {
                    title: data.title,
                    description: data.description,
                    price:  data.price
                }
            }
        );
}

exports.deleteById = (id) => {
    return Index.findOneAndRemove(id);
}