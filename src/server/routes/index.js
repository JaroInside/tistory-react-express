import express from 'express';

const router = express.Router();

const testData = {
    name: 'jaro',
    project: 'react'
}

router.get('/', (req,res) => {
    res.json(testData);
});

export default router;