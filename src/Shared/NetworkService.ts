import axios from 'axios';
export const BASE_URL = 'http://localhost:3009';

export const API_ENDPOINTS = {
    ROOT: BASE_URL,
    GET_SENSOR: '/sensor',
    GET_SENSOR_STATS: '/sensor/stats',
    GET_SENSOR_STATS_WEEKLY: '/stats/weekly',
    GET_SENSOR_STATS_WEEKLY_AVG: '/stats/weekly_avg',
    GET_SENSOR_LOGS: '/logs',
    GET_SENSOR_EVENTS: '/events',
};

export const getRequest = async (url: string, params?: any) => {
    const { data } = await axios.get(API_ENDPOINTS.ROOT + url, {
        params,
    });
    return data;
};

export const postRequest = async (url: string, body?: any, params?: any) => {
    const { data } = await axios.post(API_ENDPOINTS.ROOT + url, body, {
        params,
    });
    return data;
};

export const putRequest = async (url: string, body?: any, params?: any) => {
    const { data } = await axios.put(API_ENDPOINTS.ROOT + url, body, {
        params,
    });
    return data;
};

export const deleteRequest = async (url: string, params?: any) => {
    const { data } = await axios.delete(API_ENDPOINTS.ROOT + url, {
        params,
    });
    return data;
};