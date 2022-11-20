import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SensorDetailsType, SensorEvent, SensorListType, SensorLog, SensorStatsType, State, StatsListType } from "../Shared/Types";
import { addSensorAction, deleteSensorAction, fetchSensorDetailsAction, fetchSensorEventsAction, fetchSensorListAction, fetchSensorLogsAction, fetchSensorStatsAction, fetchSensorWeeklyAvgStatsAction, fetchSensorWeeklyStatsAction, setToggleDrawerAction, updateSensorAction } from "./Actions";

export const initialState: any = {
    toggleDrawer: false,
};

const slice = createSlice({
    name: 'MainReducer',
    initialState,
    reducers: {},
    extraReducers: {
        [setToggleDrawerAction.toString()]: (state: State) => {
            state.toggleDrawer = !state.toggleDrawer;
        },
        [fetchSensorListAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [fetchSensorListAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<SensorListType>,
        ) => {
            state.sensorList = action.payload;
            state.isLoading = false;
        },
        [fetchSensorListAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [fetchSensorStatsAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [fetchSensorStatsAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<SensorStatsType>,
        ) => {
            state.sensorStats = action.payload;
            state.isLoading = false;
        },
        [fetchSensorStatsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [fetchSensorDetailsAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [fetchSensorDetailsAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<SensorDetailsType>,
        ) => {
            state.sensorDetails = action.payload;
            state.isLoading = false;
        },
        [fetchSensorDetailsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [fetchSensorWeeklyStatsAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [fetchSensorWeeklyStatsAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<StatsListType[]>,
        ) => {
            state.sensorWeeklyStats = action.payload;
            state.isLoading = false;
        },
        [fetchSensorWeeklyStatsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [fetchSensorWeeklyAvgStatsAction.pending.toString()]: (
            state: State,
        ) => {
            state.isLoading = true;
        },
        [fetchSensorWeeklyAvgStatsAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<SensorStatsType>,
        ) => {
            state.sensorWeeklyAvgStats = action.payload;
            state.isLoading = false;
        },
        [fetchSensorWeeklyAvgStatsAction.rejected.toString()]: (
            state: State,
        ) => {
            state.isLoading = false;
        },
        [fetchSensorLogsAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [fetchSensorLogsAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<SensorLog[]>,
        ) => {
            state.sensorLogs = action.payload;
            state.isLoading = false;
        },
        [fetchSensorLogsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [fetchSensorEventsAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [fetchSensorEventsAction.fulfilled.toString()]: (
            state: State,
            action: PayloadAction<SensorEvent[]>,
        ) => {
            state.sensorEvents = action.payload;
            state.isLoading = false;
        },
        [fetchSensorEventsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [addSensorAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [addSensorAction.fulfilled.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [addSensorAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [updateSensorAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [updateSensorAction.fulfilled.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [updateSensorAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [deleteSensorAction.pending.toString()]: (state: State) => {
            state.isLoading = true;
        },
        [deleteSensorAction.fulfilled.toString()]: (state: State) => {
            state.isLoading = false;
        },
        [deleteSensorAction.rejected.toString()]: (state: State) => {
            state.isLoading = false;
        },
    }
});

const { reducer } = slice;
export default reducer;
