import {Schema, model} from "mongoose";

const processosSchema = new Schema({
    assunto: {
        type: String,
        enum: ["Ressarcimento a Outros Órgãos", "Ressarcimento ao TJDFT", "PSSS", "Parcelamento de Débito"],
        default: "Parcelamento de Débito",
        required: true,
    },

    numero:{
        type: String,
        minLength: 12,
        required: true,
        unique: true,
    },

    mesLancamento:{
        type: String,
        minLength: 7,
        required: true,
        trim: true,
    },

    valorTotal: {
        type: Number,
        required: true,
    },

    valorLancamento:{
        type: Number,
        required: true,
    },

    saldo:{
        type: Number,
        default: 0,
    },

    dataFim: {
        type: Date,
    }
});

const ProcessosModel = model("Processos", processosSchema);

export default ProcessosModel;