"use strict";
import path from 'path';
import express from 'express';
import Comment from '../models/comments';
const router = express.Router();

router.post('/', async (req, res, next) => {
    const comToCreate = {
        username: req.body.username,
        comment: req.body.comment
    };
    try {
        const com = await Comment.create(comToCreate);
        return res.status(200).send({
            status: 'ok',
            message: 'Comment successfuly created'
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
        let com = await Comment.find({}).exec();
        if (!com) return res.status(400).send({
            status: 'error',
            message: 'Comment`s not found'
        });
        return res.status(200).send({
            status: 'ok',
            message: 'Comment successfuly found',
            comments: com
        });
    } catch (err) {
        return res.status(400).send({
            status: 'error',
            message: err.name,
            desc: err
        });
    }
});

export default router;