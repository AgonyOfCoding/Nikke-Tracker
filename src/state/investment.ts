import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nikke } from "../types";
import axios from "axios";

export interface NikkeInvestments {
    investments: Nikke[];
    temp_skill_1: number;
    temp_skill_2: number;
    temp_skill_B: number;
}

const initialState: NikkeInvestments = {
    investments: [],
    temp_skill_1: 1,
    temp_skill_2: 1,
    temp_skill_B: 1
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
        initializeInvestments: (state, action: PayloadAction<Nikke[]>) => {
            state.investments = action.payload;
        },
        addNikke: (state, action: PayloadAction<string>) => {
            const new_nikke: Nikke = {
                id: action.payload,
                core: 0,
                bond: 0,
                equipment: {
                    helm: undefined,
                    gloves: undefined,
                    chest: undefined,
                    boots: undefined
                },
                skill_levels: [1, 1, 1],
                collection_item: undefined,
                favorite: false
            };
            state.investments.push(new_nikke);
            saveInvestments(state.investments)
        },
        modifyInvestment: (state, action: PayloadAction<Nikke>) => {
            const new_investments: Nikke[] = state.investments.filter(nikke => nikke.id !== action.payload.id);
            new_investments.push(action.payload);
            state.investments = new_investments;
            saveInvestments(new_investments);
        },
        setTempSkill1: (state, action: PayloadAction<number>) => {
            state.temp_skill_1 = action.payload;
        },
        setTempSkill2: (state, action: PayloadAction<number>) => {
            state.temp_skill_2 = action.payload;
        },
        setTempSkillB: (state, action: PayloadAction<number>) => {
            state.temp_skill_B = action.payload;
        }
    }
})

export const {
    initializeInvestments,
    addNikke,
    modifyInvestment,
    setTempSkill1,
    setTempSkill2,
    setTempSkillB
} = investmentSlice.actions
export default investmentSlice.reducer