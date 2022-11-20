import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../Shared/Constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../Shared/NetworkService";
import { AddSensorPayloadType } from "../Shared/Types";
import { tranformStatsForChart, tranformWeeklyStatsForChart, tranformWeeklyAvgStatsForChart, Logger } from "../Shared/Utils";

export const setToggleDrawerAction = createAction(
    'sensor/setToggleDrawerAction',
);

export const fetchSensorListAction = createAsyncThunk(
    'sensor/fetchSensorListAction',
    async (page?: number) => {
        try {
            const result = await getRequest(API_ENDPOINTS.GET_SENSOR, {
                page,
            });
            return result;
        } catch (e) {
            Logger('fetchSensorListAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const fetchSensorStatsAction = createAsyncThunk(
    'sensor/fetchSensorStatsAction',
    async () => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR_STATS,
            );
            return tranformStatsForChart(results);
        } catch (e) {
            Logger('fetchSensorStatsAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const fetchSensorDetailsAction = createAsyncThunk(
    'sensor/fetchSensorDetailsAction',
    async (deviceId: string) => {
        try {
            const { result } = await getRequest(
                API_ENDPOINTS.GET_SENSOR + '/' + deviceId,
            );
            return result;
        } catch (e) {
            Logger('fetchSensorDetailsAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const fetchSensorWeeklyStatsAction = createAsyncThunk(
    'sensor/fetchSensorWeeklyStatsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_STATS_WEEKLY,
            );
            return tranformWeeklyStatsForChart(results);
        } catch (e) {
            Logger('fetchSensorWeeklyStatsAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const fetchSensorWeeklyAvgStatsAction = createAsyncThunk(
    'sensor/fetchSensorWeeklyAvgStatsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_STATS_WEEKLY_AVG,
            );
            return tranformWeeklyAvgStatsForChart(results);
        } catch (e) {
            Logger('fetchSensorWeeklyAvgStatsAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const fetchSensorLogsAction = createAsyncThunk(
    'sensor/fetchSensorLogsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_LOGS,
            );
            return results;
        } catch (e) {
            Logger('fetchSensorLogsAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const fetchSensorEventsAction = createAsyncThunk(
    'sensor/fetchSensorEventsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_EVENTS,
            );
            return results;
        } catch (e) {
            Logger('fetchSensorEventsAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const addSensorAction = createAsyncThunk(
    'sensor/addSensorAction',
    async (payload: AddSensorPayloadType) => {
        try {
            const { results } = await postRequest(
                API_ENDPOINTS.GET_SENSOR,
                payload,
            );
            return results;
        } catch (e) {
            Logger('addSensorAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const updateSensorAction = createAsyncThunk(
    'sensor/updateSensorAction',
    async (payload: AddSensorPayloadType) => {
        try {
            const { results } = await putRequest(
                API_ENDPOINTS.GET_SENSOR + '/' + payload.device_id,
                payload,
            );
            return results;
        } catch (e) {
            Logger('updateSensorAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);

export const deleteSensorAction = createAsyncThunk(
    'sensor/deleteSensorAction',
    async (deviceId: string) => {
        try {
            const { results } = await deleteRequest(
                API_ENDPOINTS.GET_SENSOR + '/' + deviceId,
            );
            return results;
        } catch (e) {
            Logger('updateSensorAction:: ' + JSON.stringify(e));
            throw e
        }
    },
);