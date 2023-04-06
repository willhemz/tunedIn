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
