const Notes = require('../Models/notesModel')
const catchAsync = require('../utilis/catchAsync');
const AppError = require('../utilis/appError');

exports.allNotes = catchAsync(async (req,res,next)=>{
    if(req.params.id){
        const note = await Notes.findById(req.params.id);
        if(!note){
            return next(new AppError(`there's no note with this ID: ${req.params.id}` , 404));
        }
        res.status(200).json({
            status:'success',
            note
        })
    }
    const lists = (req.query.sort ? req.query.sort : -1);
    const notes = await Notes.find({createdBy:req.user.id}).sort({'createdAt': lists });
    const msg = (notes.length === 0 ? 'Create New Note':undefined);
    res.status(200).json({
        status:'success',
        msg,
        notes
    })
})
exports.createNote = catchAsync(async (req,res,next)=>{
    const {title , content} = req.body;
    const id = req.user.id;
    const newNote = await Notes.create({
        title,
        content,
        createdBy:id
    });
    res.status(200).json({
        status:'success',
        newNote
    })
})

exports.updateNote = catchAsync(async (req,res,next)=>{
    const note = await Notes.findOneAndUpdate({_id:req.params.id} , {title:req.body.title , content:req.body.content},  { new: true } );
    if(!note){
        return next(new AppError(`there's no note with this id: ${req.body['_id']}` , 404));
    }
    res.status(200).json({
        status:'success',
        note
    })
})
exports.deleteNote = catchAsync(async (req,res,next)=>{
    const note = await Notes.findByIdAndDelete(req.params.id);
    if(!note ){
        res.status(404).json({
            status:'Deleted before'
        })
    }
    res.status(200).json({
        status:'DELETED'
    })
})
