var BookSchema = new mongoose.Schema({
    id: String,
    title: String,  
}); 



module.exports = mongoose.model("Book", BookSchema);