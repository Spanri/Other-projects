"use strict";
import path from 'path';
import express from 'express';
import About from '../models/about';
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const about = await About.findOne({ fetch: req.body.fetch }).exec();
        if (!about) return res.status(400).send({
            status: 'error',
            message: 'Fetch is not found'
        });
        about.desc = req.body.desc;
        await about.save();
        return res.status(200).send({
            status: 'ok',
            message: `About successfuly changed on fetch ${req.body.fetch}`
        });
    } catch (err) {
        return res.status(400).send({
            status: 'error',
            message: err.name
        });
    }
});

router.get('/', async (req, res, next) => {
    try {
        let about = await About.find({}).exec();
        if (!about) return res.status(400).send({
            status: 'error',
            message: 'About`s is not found'
        });
        return res.status(200).send({
            status: 'ok',
            message: 'About successfuly found',
            about: about
        });
    } catch (err) {
        return res.status(400).send({
            status: 'error',
            message: err.name
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const about = await About.findOne({ fetch: req.params.id }).exec();
        if (!about) return res.status(400).send({
            status: 'error',
            message: 'Fetch is not found'
        });
        return res.status(200).send({
            status: 'ok',
            message: 'About successfuly found',
            about: about
        });
    } catch (err) {
        return res.status(400).send({
            status: 'error',
            message: err.name
        });
    }
});

export default router;