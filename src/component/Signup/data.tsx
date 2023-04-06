import { IconType } from 'react-icons/lib';
import { MdLaptopMac, MdTabletMac, MdPhoneAndroid } from 'react-icons/md';
import { FaDesktop } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';
import { GoTriangleDown } from 'react-icons/go';
import { ReactElement, ReactNode } from 'react';

type Identifier = '' | 'Mobile' | 'Basic' | 'Standard' | 'Premium';

type MonthlyPrice = string[];
type VideoQuality = string[];
type Resolution = string[];
export type Icon = { icon: ReactNode; title: string };
export type Devices = string | Icon[];
type SpatialAudio = (string | ReactElement)[];

type IdentifierArray = Identifier[];
export type WatchDevices = Devices[];

type DeviceQty = (string | number)[];

type Triangle = ReactNode;

const handleCurrency = (val: number): string =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
    val
  );

export interface ItemProps {
  identifier: IdentifierArray;
  monthlyPrice: MonthlyPrice;
  videoQuality: VideoQuality;
  resolution: Resolution;
  watchDevices: WatchDevices;
  spatialAudio: SpatialAudio;
  deviceQty: DeviceQty;
  triangle: Triangle;
}

const identifier: IdentifierArray = [
  '',
  'Mobile',
  'Basic',
  'Standard',
  'Premium',
];

const monthlyPrice: MonthlyPrice = [
  'Monthly Price',
  handleCurrency(1200),
  handleCurrency(2900),
  handleCurrency(3600),
  handleCurrency(4400),
];

const videoQuality: VideoQuality = [
  'Video Quality',
  'Good',
  'Good',
  'Better',
  'Best',
];

const resolution: Resolution = [
  'Resolution',
  '480p',
  '720p',
  '1080p',
  '4K + HDR',
];

const phone: Icon = { icon: <MdPhoneAndroid />, title: 'Phone' };
const tablet: Icon = { icon: <MdTabletMac />, title: 'Tablet' };
const computer: Icon = { icon: <MdLaptopMac />, title: 'Computer' };
const television: Icon = { icon: <FaDesktop />, title: 'TV' };

const watchDevices: WatchDevices = [
  'Devices you can use to watch',
  [phone, tablet],
  [phone, tablet, computer, television],
  [phone, tablet, computer, television],
  [phone, tablet, computer, television],
];

const spatialAudio: SpatialAudio = [
  'Spatial Audio',
  <HiXMark />,
  <HiXMark />,
  <HiXMark />,
  <AiOutlineCheck />,
];

const deviceQty: DeviceQty = ['Number of devices for downloads', 1, 1, 2, 6];

const triangle: Triangle = <GoTriangleDown />;

export const data: ItemProps = {
  identifier,
  monthlyPrice,
  videoQuality,
  resolution,
  watchDevices,
  spatialAudio,
  deviceQty,
  triangle,
};

export const paymentImages: ReactNode = (
  <div className="flex gap-1">
    <img
      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
      alt="visa"
    />
    <img
      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
      alt="mastercard"
    />
    <img
      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VERVE.png"
      alt="verve"
    />
  </div>
);

export interface DataType {
  id?: string;
  name: string;
  value: string;
  errorMessage: string;
}

export type Data = DataType[];

export const user: Data = [
  {
    id: 'firstName',
    name: 'firstName',
    value: 'First name',
    errorMessage: 'Please enter a first name.',
  },
  {
    id: 'lastName',
    name: 'lastName',
    value: 'Last name',
    errorMessage: 'Please enter a last name.',
  },
  {
    id: 'cardNumber',
    name: 'cardNumber',
    value: 'Card number',
    errorMessage: 'Please enter a card number.',
  },
  {
    id: 'expirationDate',
    name: 'expirationDate',
    value: 'Expiration date (MM/YY)',
    errorMessage: 'Please enter an expiration date.',
  },
  {
    id: 'securityCode',
    name: 'securityCode',
    value: 'Security code (CVV)',
    errorMessage: 'Please enter a security code (CVV)',
  },
];

export const obj = [];
