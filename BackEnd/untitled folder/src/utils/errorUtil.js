export const getErrorMessage = (err) => {

    console.log(err.name);

    switch (err.name) {
        case 'ValidationError':
            return Object.values(err.errors).at(0).message;
        case 'CastError':
            return new Error('Please select Cast');
        case 'MongooseError':
            return new Error('Server is busy, please try again later!')
        default:
            return err.message;
    }
};