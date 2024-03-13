var express = require('express');
var router = express.Router();

router.get('/:courseId/unit/:unitId', (req,res)=>{
    res.send('you are studying ' + req.params.courseId + ' unit ' + req.params.unitId);
});

module.exports = router;