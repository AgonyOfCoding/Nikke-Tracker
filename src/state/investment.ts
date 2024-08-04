import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nikke } from "../types";
import axios from "axios";

export interface NikkeInvestments {
    investments: Nikke[];
}

const initialState: NikkeInvestments = {
    investments: []
}

const saveInvestments = async (investments: Nikke[]) => {
    try {
        const response = await axios.post('/api/save-investments', investments);
        console.log('Investments saved successfully:', response.data);
    } catch (error) {
        console.error('Error saving investments:', error);
    }
};

export const investmentSlice = createSlice({
    name: "nikkeInvestments",
    initialState,
    reducers: {
        setInvestments: (state, action: PayloadAction<Nikke[]>) => {
            state.investments = action.payload;
        },
        addNikke: (state, action: PayloadAction<string>) => {
            state.investments.push({
                id: action.payload,
                core: 0,
                equipment: {
                    helm: undefined,
                    gloves: undefined,
                    chest: undefined,
                    boots: undefined
                },
                skill_levels: [1, 1, 1],
                collection_item: undefined
            })
        },
        modifyInvestment: (state, action: PayloadAction<Nikke>) => {
            const new_investments: Nikke[] = state.investments.filter(nikke => nikke.id !== action.payload.id);
            new_investments.push(action.payload);
            state.investments = new_investments;
            saveInvestments(new_investments);
        }
    }
})

export const { setInvestments, addNikke, modifyInvestment } = investmentSlice.actions
export default investmentSlice.reducer