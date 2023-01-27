const Todo = require("../modal/modal");
const router = require("express").Router()


router.get("/list" , async (req , res)=>{
    try{
        const list = await Todo.find()

        return res.status(200).json({
            "list":list
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})

router.post("/add" , (req,res)=>{
    try{
        const {item} = req.body
        if(!item){
            return res.status(400).send("No Data To Add")
        }

        const todo = new Todo({
            item:item
        })
        todo.save().then(async()=>{
        const list = await Todo.find()
            return res.status(200).json({
                "list" : list
            })
        })

    }catch(e){
    return res.status(400).json({
        message:e.message
    })
    }
})

router.delete("/delete/:id" , async(req ,res)=>{
    try{
        const _id = req.params.id
        const DeleteTodo = await Todo.findByIdAndDelete(_id)

        const list = await Todo.find()

        return res.status(200).json({
            "list":list
        })

    }catch(e){
        return res.status(400).json({
            "Message":e.message
        })
    }
})
router.put("/update/:id" , async(req ,res)=>{
    try{
        const _id = req.params.id
        const {item} = req.body
        const updateInfo = {item:item}
        const UpdateTodo = await Todo.findByIdAndUpdate(_id , updateInfo, {
            new: true,
            useFindAndModity: false
          })
        const list = await Todo.find()

        return res.status(200).json({
            "list":list
        })

    }catch(e){
        return res.status(400).json({
            "Message":e.message
        })
    }
})

module.exports = router