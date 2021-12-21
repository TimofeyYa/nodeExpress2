const {Router} = require('express');
const router = Router();
const Course = require('../modules/curses')

router.get('/', async (req,res)=>{
    let curses = await Course.getAll();

    res.render('curses', {
        title: 'Courses',
        isCourses: true,
        curses: curses
    })
})

module.exports = router;