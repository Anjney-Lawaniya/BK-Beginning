// We can work in two ways. One in commented;

const asyncHandler = (requestHandler)=>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}

// const asyncHandler = (fn) => {async (req,res,next) => {   // Handling higher order functions;
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }}

export {asyncHandler}