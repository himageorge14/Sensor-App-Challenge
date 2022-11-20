import { SensorStatsPayloadType, SensorStatsType, StatsListType, SensorWeeklyPayloadType, SensorWeeklyAvgPayloadType } from "./Types";

export const tranformStatsForChart = (
    sensorRowData: SensorStatsPayloadType[],
): SensorStatsType => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];

    sensorRowData?.map((result) => {
        const deviceId = result.device_id || 'Unknown';
        sensorIds.push(deviceId);
        result.stats.sort((a, b) => Number(a.time) - Number(b.time));
        result.stats.map((statsRowData: { time: string; temp: number }) => {
            const date = new Date(Number(statsRowData?.time));
            const dateFormated =
                date.getMonth() +
                1 +
                '/' +
                date.getFullYear().toString().substr(2, 2);
            const index = statsList.findIndex(
                (data) => data?.date === dateFormated,
            );
            if (index >= 0) {
                statsList[index] = {
                    ...statsList[index],
                    [deviceId]: statsRowData?.temp,
                };
            } else {
                statsList.push({
                    date: dateFormated,
                    [deviceId]: statsRowData?.temp,
                });
            }
        });
    });

    return { sensorIds, statsList };
};

export const tranformWeeklyStatsForChart = (
    sensorRowData: SensorWeeklyPayloadType[],
) => {
    const statsList: StatsListType[] = [];
    sensorRowData?.sort((a, b) => Number(a.time) - Number(b.time));
    sensorRowData?.map((result) => {
        const date = new Date(Number(result?.time));
        const dateFormated =
            date.getDate() +
            1 +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear().toString().substr(2, 2);
        const index = statsList.findIndex(
            (data) => data?.date === dateFormated,
        );
        if (index >= 0) {
            statsList[index] = {
                ...statsList[index],
                sensor: result?.temp,
            };
        } else {
            statsList.push({
                date: dateFormated,
                sensor: result?.temp,
            });
        }
    });
    return statsList;
};

export const tranformWeeklyAvgStatsForChart = (
    sensorRowData: SensorWeeklyAvgPayloadType[],
) => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];

    sensorRowData?.map((result) => {
        const deviceId = result.sensor_id || 'Unknown';
        sensorIds.push(deviceId);
        result.stats.sort((a, b) => Number(a.time) - Number(b.time));
        result.stats.map((statsRowData: { time: string; temp: number }) => {
            const date = new Date(Number(statsRowData?.time));
            const dateFormated =
                date.getMonth() +
                1 +
                '/' +
                date.getFullYear().toString().substr(2, 2);
            const index = statsList.findIndex(
                (data) => data?.date === dateFormated,
            );
            if (index >= 0) {
                statsList[index] = {
                    ...statsList[index],
                    [deviceId]: statsRowData?.temp,
                };
            } else {
                statsList.push({
                    date: dateFormated,
                    [deviceId]: statsRowData?.temp,
                });
            }
        });
    });

    return { sensorIds, statsList };
};

export const Logger = (error: any) => {
}