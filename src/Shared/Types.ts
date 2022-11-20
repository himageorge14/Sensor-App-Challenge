export interface State {
    toggleDrawer: boolean;
    isLoading: boolean;
    sensorList: SensorListType;
    sensorStats: SensorStatsType;
    sensorDetails: SensorDetailsType;
    sensorWeeklyStats: StatsListType[];
    sensorWeeklyAvgStats: SensorStatsType;
    sensorLogs: SensorLog[];
    sensorEvents: SensorEvent[];
}

export type SensorStatsType = {
    sensorIds: string[];
    statsList: StatsListType[];
};

export type StatsListType = {
    date: string;
    [sensorId: string]: number | string;
};

export type SensorStatsPayloadType = {
    stats: { time: string; temp: number }[];
    device_id: string;
};

export type SensorWeeklyPayloadType = {
    time: string;
    temp: number;
};

export type SensorWeeklyAvgPayloadType = {
    stats: { time: string; temp: number }[];
    sensor_id: string;
};

export type SensorListType = {
    results?: SensorType[];
    paging?: PagingType;
};

export type SensorType = {
    device_id: string;
    last_online: string;
    last_temp: number;
    customer: string;
    location: string;
};

export type PagingType = {
    count: number;
    currentPage: number;
    nextPage: number;
    pageSize: number;
    pages: number[];
    previousPage: number;
};

export type SensorDetailsType = {
    device_id: string;
    last_online: string;
    last_temp: number;
    customer: string;
    location: string;
    overview: {
        total_messages: number;
        down_time: number;
        alerts: number;
    };
};

export type SensorLog = {
    time: string;
    description: string;
};

export type SensorEvent = {
    event_name: string;
    description: string;
    time: string;
};

export type AddSensorPayloadType = {
    device_id: string;
    company_website: string;
    min_temp_limit: number;
    monitor_min_temp: boolean;
    max_temp_limit: number;
    monitor_max_temp: boolean
};