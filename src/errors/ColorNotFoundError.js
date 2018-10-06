class ColorNotFoundError extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, ColorNotFoundError)
    }
}


module.exports=ColorNotFoundError;