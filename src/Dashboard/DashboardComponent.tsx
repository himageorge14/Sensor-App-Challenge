import { Container } from "@mui/material";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { SENSOR_DASHBOARD } from "../Shared/Constants";
import { getRandomColor } from "../Shared/RandomColors";
import { State } from "../Shared/Types";
import { fetchSensorListAction, fetchSensorStatsAction } from "../Store/Actions";
import { AppDispatch } from "../Store/Store";
import TimelineIcon from '@mui/icons-material/Timeline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

const DashboardComponent = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { sensorList, sensorStats } = useSelector((state: State) => state);
  const sesnorListRef = useRef<any>();

  useEffect(() => {
    dispatch(fetchSensorListAction(undefined));
    dispatch(fetchSensorStatsAction());
  }, []);

  const loadPage = (page: number) => {
    dispatch(fetchSensorListAction(page));
    sesnorListRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=' flex flex-1 justify-center'>
      <div className='flex w-3/4 flex-col justify-center gap-6'>
        <div className=' flex flex-row gap-6'>
          <div className='h-32 w-1/3 border-2 border-solid p-4'>
            <div className='flex flex-row'>
              <div className='flex flex-1 cursor-pointer select-none items-center p-4'>
                <div className='mr-16 flex-1 pl-1'>
                  <div className='font-medium'>
                    {SENSOR_DASHBOARD.TOTAL_SENSORS}
                  </div>
                  <div className='text-sm text-gray-600'>
                    <span id='totalSensors'>182</span>
                  </div>
                </div>
                <div className='text-gray-600'>
                  <div className='h-12 w-12'>
                    <TimelineIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-32 w-1/3 border-2 border-solid p-4'>
            <div className='flex flex-row'>
              <div className='flex flex-1 cursor-pointer select-none items-center p-4'>
                <div className='mr-16 flex-1 pl-1'>
                  <div className='font-medium'>
                    {SENSOR_DASHBOARD.OPEN_ALERTS}
                  </div>
                  <div className='text-sm text-gray-600'>
                    <span id='openAlerts'>2</span>
                  </div>
                </div>
                <div className='text-gray-600'>
                  <div className='h-12 w-12'>
                    <NotificationsIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-32 w-1/3 border-2 border-solid p-4'>
            <div className='flex flex-row'>
              <div className='flex flex-1 cursor-pointer select-none items-center p-4'>
                <div className='mr-16 flex-1 pl-1'>
                  <div className='font-medium'>
                    {SENSOR_DASHBOARD.TOTAL_CUSTOMERS}
                  </div>
                  <div className='text-sm text-gray-600'>
                    <span id='totalCustomers'>14</span>
                  </div>
                </div>
                <div className='text-gray-600'>
                  <div className='h-12 w-12'>
                    <GroupIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex h-96 w-full flex-col border-2 border-solid'>
          <div className=' flex flex-row justify-between p-5'>
            <p className='text-xl font-semibold text-gray-600'>
              SENSOR TEMPRATURES
            </p>
            <button
              type='button'
              className='
        flex h-6 w-6  
        items-center justify-center rounded-lg 
        bg-gray-300 text-center text-base font-semibold 
        text-gray-700 shadow-md'
            >
              <SettingsIcon />
            </button>
          </div>
          <div className='h-full w-full pr-10 pb-5'>
            <ResponsiveContainer
              width='100%'
              height='100%'
              id='sensorTempratureChart'
            >
              <LineChart data={sensorStats?.statsList}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis tickFormatter={(tick) => tick + ' ºC'} />
                <Tooltip />
                <Legend />
                {sensorStats?.sensorIds?.map((data, i) => (
                  <Line
                    key={i}
                    type='monotone'
                    dataKey={data}
                    stroke={getRandomColor()}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div ref={sesnorListRef} id='sensorList'>
          <div className=' flex flex-row justify-between p-2'>
            <p className='text-xl font-semibold text-gray-600'>
              SENSOR LIST
            </p>
            <button
              type='button'
              className='
                    flex h-6 w-6  
                    items-center justify-center rounded-lg 
                    bg-gray-300 text-center text-base font-semibold 
                    text-gray-700 shadow-md'
            >
              <SettingsIcon />
            </button>
          </div>

          <div className='w-full border-2 border-solid'>
            {sensorList?.results?.map((data, i) => (
              <div
                key={i}
                id='sensorListRow'
                className=' flex flex-row p-5 even:bg-slate-100'
              >
                <div className='w-1/6 font-semibold text-gray-700'>
                  {data?.device_id}
                </div>
                <div className='w-1/6 text-gray-600'>
                  <div className='block'>
                    {data?.last_online}
                  </div>
                  <div className='block text-sm'>
                    Last Online
                  </div>
                </div>
                <div className='w-1/6 text-gray-600'>
                  <div className='block'>
                    {data?.last_temp}
                  </div>
                  <div className='block text-sm'>Temp</div>
                </div>
                <div className='w-1/6 text-gray-600'>
                  <div className='block'>
                    {data?.location}
                  </div>
                  <div className='block text-sm'>
                    Location
                  </div>
                </div>
                <div className='w-1/6'>
                  <Link
                    to={'/edit-sensor/' + data.device_id}
                    type='button'
                    id='options'
                    className='flex w-10/12 items-center justify-center rounded-lg bg-gray-200 py-2 px-4 text-center text-base font-normal text-gray-600 shadow-md'
                  >
                    Options
                  </Link>
                </div>
                <div className='w-1/6'>
                  <Link
                    to={'/sensor-detail/' + data.device_id}
                    type='button'
                    className='flex w-10/12 items-center justify-center rounded-lg bg-gray-600 py-2 px-4 text-center text-base font-normal text-gray-100 shadow-md'
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-end gap-2'>
          {sensorList?.paging?.pages?.map((data, i) => (
            <button
              onClick={() => loadPage(data)}
              key={i}
              className='flex h-10 w-10 items-center justify-center bg-gray-200 text-gray-500'
            >
              {data}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;