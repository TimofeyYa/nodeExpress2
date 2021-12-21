const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Course{
    constructor(title, price, img){
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = uuidv4();
    }

    toJSON(){
        return{
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }
    async save(){
        const coursesAll = await Course.getAll();

        coursesAll.push(this.toJSON());
        fs.writeFile(path.join(__dirname, '..','data','courses.json'),
        JSON.stringify(coursesAll),
        (err)=>{
            if (err) throw err
        })
        console.log(coursesAll);
    }

    static getAll(){
        return new Promise((resolve,reject)=>{
            fs.readFile(path.join(__dirname, '..','data','courses.json'),
            'utf-8',
            (err, data) =>{
                if (err){
                    reject(err)
                } else {
                    resolve(JSON.parse(data))
                }
            })
        })
    }
}

module.exports = Course;