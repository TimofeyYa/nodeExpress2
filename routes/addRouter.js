const {Router} = require('express');
const router = Router();
const Course = require('../modules/curses');

router.get('/', (req,res)=>{
    res.render('add', {
        title: 'Add Courses',
        isAdd: true
    })
})

router.post('/', async (req,res)=>{
    console.log(req.body.name, req.body.cost, req.body.img);
    const course = new Course(req.body.name, req.body.cost, req.body.img);
    await course.save();
    res.redirect('/curses');
})
module.exports = router;