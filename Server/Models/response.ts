import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const responseDatabaseSchema = new Schema({
    response: String,
    res_s_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Survey'
    },
    q_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Survey'
    }
},
{
    collection: "response"
});

const Model = mongoose.model("response", responseDatabaseSchema);
export default Model;
