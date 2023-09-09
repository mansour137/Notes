const Notes = require('../Models/notesModel')
const catchAsync = require('../utilis/catchAsync');
const AppError = require('../utilis/appError');
exports.allNotes = catchAsync(async (req,res,next)=>{

    const notes = await Notes.find({createdBy:req.user.id}).sort({'createdAt':req.query.sort})
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
exports.note = catchAsync(async (req,res,next)=>{
    const note = await Notes.findById(req.params.id);
    if(!note){
        return next(new AppError(`there's no note with this TITLE: ${req.body.title}` , 404));
    }
    res.status(200).json({
        status:'success',
        note
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
    await Notes.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status:'DELETED'
    })
})
