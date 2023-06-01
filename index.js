console.log('Loading function');

exports.handler = async (event, context) => {
    console.log({
        event,
        context
    })
    return ({
        hi:"hellu",
    }); 
};
