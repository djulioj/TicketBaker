const {Schema,model}=require("mongoose");


const eventSchema=new Schema({
    name:{type: String, require:true},
    date:{type: Date, require:true},
    price:{type: Number, require:true},
    place:{type: String, require:true},
    imgDir:{type: String, require:true},
});

module.exports=model("Event",eventSchema);