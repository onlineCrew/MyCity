import DamageImage from 'assets/icons/damage.png';
import IciclesImage from 'assets/icons/icicles.png';
import OtherImage from 'assets/icons/other.png';
import PawImage from 'assets/icons/paw.png';
import RoadImage from 'assets/icons/road.png';
import SnowyRoadImage from 'assets/icons/snowy-road.png';
import TrafficLightsImage from 'assets/icons/traffic-lights.png';
import TrashImage from 'assets/icons/trash.png';

const imagesArr = [
  {
    image: RoadImage,
    name: 'road',
    title: 'Uszkodzona jezdnia',
  },
  {
    image: SnowyRoadImage,
    name: 'snowyRoad',
    title: 'Zaśnieżona droga',
  },
  {
    image: IciclesImage,
    name: 'icicles',
    title: 'Sople lodu',
  },
  {
    image: TrafficLightsImage,
    name: 'trafficLights',
    title: 'Uszkodzony sygnalizator świetlny',
  },
  {
    image: TrashImage,
    name: 'trash',
    title: 'Pełen kosz',
  },
  {
    image: PawImage,
    name: 'wildAnimal',
    title: 'Dzikie zwierzęta',
  },
  {
    image: DamageImage,
    name: 'damage',
    title: 'Uszkodzenie, dewastacja',
  },
  {
    image: OtherImage,
    name: 'other',
    title: 'Inne',
  },
];

export default imagesArr;
