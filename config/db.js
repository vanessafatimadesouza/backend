if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://vanessadsouza:Vacojo.02@cluster0.yfwve3c.mongodb.net/?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}

