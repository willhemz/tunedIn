import { useNavigate } from 'react-router-dom';
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Devices, Icon, data, plans } from './data';
import { checkPlan, fetchPlan } from '../../features/User/Userslice';
import { addData, useAppDispatch, useAppSelector } from '../../features';

const Planform = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { email, plan } = useAppSelector((state) => state.user);
  const [selectId, setSelectId] = useState<number>(1);

  useEffect(() => {
    const index: number = selectId - 1;
    dispatch(fetchPlan(plans[index]));
    dispatch(checkPlan());
  }, [selectId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addData(email as string, plan, navigate);
  };

  const navigate = useNavigate();
  const {
    identifier,
    monthlyPrice,
    videoQuality,
    resolution,
    watchDevices,
    spatialAudio,
    deviceQty,
    triangle,
  } = data;
  return (
    <section className="w-4/5">
      <header className="text-black mt-5 w-full">
        <small>
          STEP <span className="font-semibold">2</span> OF{' '}
          <span className="font-semibold">3</span>
        </small>
        <p className="font-semibold text-2xl mb-3">
          Choose your plan that's right for you.
        </p>
        <div className="text-left grid gap-1">
          <p className="flex gap-2">
            <span>✓</span> Watch all you want. Ad-free.
          </p>
          <p className="flex gap-2">
            <span>✓</span> Recommendations just for you.
          </p>
          <p className="flex gap-2">
            <span>✓</span> Change or cancel your plan anytime.
          </p>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <section className="w-full">
          <table className="w-full border-separate border-spacing-8 ">
            <thead>
              <tr>
                {identifier.map((item, index) => (
                  <th
                    onClick={() => index !== 0 && setSelectId(index)}
                    className={`${
                      index !== 0 &&
                      'w-[17%] h-20 bg-[#b38f00] relative cursor-pointer'
                    } ${
                      index === selectId ? 'bg-opacity-100' : 'bg-opacity-50'
                    } `}
                    key={index}
                  >
                    {item}
                    {index === selectId && (
                      <span className="absolute -bottom-4 text-2xl left-1/2 -translate-x-1/2 text-[#b38f00]">
                        {triangle}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                {monthlyPrice.map((item, index) => (
                  <td
                    className={`${index !== 0 && 'text-center'} ${
                      index === selectId && 'text-[#b38f00]'
                    }`}
                    key={index}
                  >
                    {item}
                  </td>
                ))}
              </tr>
              <tr>
                {videoQuality.map((item, index) => (
                  <td
                    className={`${index !== 0 && 'text-center'} ${
                      index === selectId && 'text-[#b38f00]'
                    }`}
                    key={index}
                  >
                    {item}
                  </td>
                ))}
              </tr>
              <tr>
                {resolution.map((item, index) => (
                  <td
                    className={`${index !== 0 && 'text-center'} ${
                      index === selectId && 'text-[#b38f00]'
                    }`}
                    key={index}
                  >
                    {item}
                  </td>
                ))}
              </tr>
              <tr>
                {watchDevices.map((item: Devices, index: number) => {
                  if (index === 0) return <td key={index}>{item as string}</td>;
                  return (
                    <td
                      className={`${index === selectId && 'text-[#b38f00]'}`}
                      key={index}
                    >
                      {Array.isArray(item) &&
                        item.map((itemProp: Icon, itemIndex: number) => (
                          <div
                            className="flex flex-col items-center mb-4"
                            key={itemIndex}
                          >
                            <p>{itemProp.icon}</p>
                            <p>{itemProp.title}</p>
                          </div>
                        ))}
                    </td>
                  );
                })}
              </tr>
              <tr>
                {spatialAudio.map((item, index) => (
                  <td
                    className={`${index === selectId && 'text-[#b38f00]'}`}
                    key={index}
                  >
                    <p className={`${index !== 0 && 'flex justify-center'}`}>
                      {item}
                    </p>
                  </td>
                ))}
              </tr>
              <tr>
                {deviceQty.map((item, index) => (
                  <td
                    className={`${index !== 0 && 'text-center'} ${
                      index === selectId && 'text-[#b38f00]'
                    }`}
                    key={index}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
        <section className="text-black text-sm">
          <span className="opacity-50">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our
          </span>
          <button className="mx-1 text-blue-700 border-b hover:border-opacity-100 border-opacity-0 border-blue-700 transition-all duration-500">
            terms of use
          </button>
          <span className="opacity-50">for more details.</span>
          <p className="opacity-50 mt-2">
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
        </section>
        <section className="text-center">
          <button type="submit" className="btn--variant mt-5 w-1/4">
            Next
          </button>
        </section>
      </form>
    </section>
  );
};

export default Planform;
