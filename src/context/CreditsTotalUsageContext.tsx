'use client';
import { USAGE_STATE_TYPE } from "@/utils/types";
import { createContext } from "react";

export const CreditsUsageContext = createContext<any>(0);


export const initialState: USAGE_STATE_TYPE = { totalUsage: 0 };

export function reducer(state: USAGE_STATE_TYPE, action: any) {
    switch (action.type) {
        case 'INCREASE_CREDITS':
            return { count: state.totalUsage + action.payload };
        case 'DECREASE_CREDITS':
            return { count: state.totalUsage - 1 };
        default:
            return state;
    }
}