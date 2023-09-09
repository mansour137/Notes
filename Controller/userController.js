const Users = require('../Models/userModel')
const catchAsync = require('../utilis/catchAsync');
const AppError = require('../utilis/appError');

exports.allusers = catchAsync(async(req,res,next)=>{
    const users = await Users.find();
    res.status(200).json({
        status:'success',
        data:users
    })
})

exports.user = catchAsync(async(req,res,next)=>{
    const user = await Users.findById(req.params.id);
    if(!user){
        return next(new AppError(`There\'s no user with this ID: ${req.params.id}`));
    }
    res.status(200).json({
        status: 'success',
        user
    })
})


exports.deleteUser = catchAsync(async(req,res,next)=>{
    res.status(404).json({
        message:'use other route to make your action'
    })
})

exports.updateUser = catchAsync(async(req,res,next)=>{
    res.status(404).json({
        message:'use other route to make your action'
    })
})