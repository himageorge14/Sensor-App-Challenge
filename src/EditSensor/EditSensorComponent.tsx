import { Formik, Field } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { EDIT_SENSOR } from "../Shared/Constants";
import { State } from "../Shared/Types";
import { fetchSensorDetailsAction, deleteSensorAction, updateSensorAction } from "../Store/Actions";
import { AppDispatch } from "../Store/Store";

const EditSensorComponent = () => {

  const { sensorId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { sensorDetails } = useSelector((state: State) => state);

  useEffect(() => {
    if (sensorId) {
      dispatch(fetchSensorDetailsAction(sensorId));
    }
  }, [sensorId]);

  const deleteSensor = () => {
    dispatch(deleteSensorAction(sensorDetails?.device_id));
    navigate('/');
  };

  return (
    <Formik
      initialValues={{
        sensorId: sensorDetails?.device_id,
        location: sensorDetails?.location,
        minTempThreshold: '',
        maxTempThreshold: '',
        monitorMinTemp: false,
        monitorMaxTemp: false,
      }}
      enableReinitialize={true}
      validate={() => { }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(
          updateSensorAction({
            device_id: values.sensorId,
            company_website: values.sensorId,
            max_temp_limit: Number(values.maxTempThreshold),
            min_temp_limit: Number(values.minTempThreshold),
            monitor_max_temp: values.monitorMaxTemp,
            monitor_min_temp: values.monitorMinTemp,
          }),
        );
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-row gap-14'>
            <div className='w-3/5'>
              <h1 className=' border-b-2 pb-5 text-3xl font-thin'>
                {EDIT_SENSOR.EDIT_SENSOR}
              </h1>
              <div className=' mt-5 flex w-1/2 flex-col gap-5'>
                <h1
                  id='sensorId'
                  className='text-2xl font-semibold'
                >
                  {sensorDetails?.device_id}
                </h1>

                <Field
                  type='text'
                  name='location'
                  id='location'
                  className='w-full flex-1 appearance-none rounded-lg border border-transparent 
                                border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm'
                  placeholder='Location'
                />

                <Field
                  name='customer'
                  as='select'
                  className='h-full rounded-lg border border-gray-300 border-transparent 
                                bg-transparent py-3 px-4 pl-2 pr-7 text-gray-500'
                >
                  <option value='red'>Customer 1</option>
                </Field>
              </div>
            </div>

            <div className='grow'>
              <h1 className='border-b-2 pb-5 text-3xl font-thin'>
                Alerts
              </h1>
              <div className=' mt-5 flex w-2/3 flex-col gap-5'>
                <Field
                  type='text'
                  name='minTempThreshold'
                  id='minTempThreshold'
                  className='w-full flex-1 appearance-none rounded-lg border border-transparent 
                                border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm'
                  placeholder='Min Temp. Threshold'
                />

                <label className='mb-3 flex items-center space-x-3'>
                  <Field
                    type='checkbox'
                    name='monitorMinTemp'
                    className=' 
                             bg-check h-6 w-6 rounded-md border border-gray-300 bg-white 
                             checked:border-transparent checked:bg-gray-500 focus:outline-none'
                  />
                  <span className='font-normal text-gray-700'>
                    Monitor Min Temprature
                  </span>
                </label>

                <Field
                  type='text'
                  name='maxTempThreshold'
                  id='maxTempThreshold'
                  className='w-full flex-1 appearance-none rounded-lg border border-transparent 
                                border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm'
                  placeholder='Max Temp. Threshold'
                />

                <label className='mb-3 flex items-center space-x-3'>
                  <Field
                    type='checkbox'
                    name='monitorMaxTemp'
                    id='monitorMaxTemp'
                    className=' 
                             bg-check h-6 w-6 rounded-md border border-gray-300 bg-white 
                             checked:border-transparent checked:bg-gray-500 focus:outline-none'
                  />
                  <span className='font-normal text-gray-700'>
                    Monitor Max Temprature
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-row gap-6 border-t-2 pt-6'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='flex w-52 items-center justify-center rounded-lg  
                    bg-gray-600 py-2 px-4 text-center 
                    text-base font-normal text-white shadow-md'
            >
              {EDIT_SENSOR.UPDATE_SENSOR}
            </button>

            <button
              type='submit'
              onClick={deleteSensor}
              className='flex w-52 items-center justify-center rounded-lg  
                    bg-gray-600 py-2 px-4 text-center 
                    text-base font-normal text-white shadow-md'
            >
              {EDIT_SENSOR.DELETE_SENSOR}
            </button>

            <Link
              to='/'
              type='button'
              className='flex w-52 items-center justify-center rounded-lg  
                    bg-gray-200 py-2 px-4 text-center 
                     text-base font-normal text-gray-600 shadow-md'
            >
              Cancel
            </Link>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default EditSensorComponent;
