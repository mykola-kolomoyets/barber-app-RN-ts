import { DropDownItem } from '@Utils/common';

export const periods = ['Morning', 'Afternoon', 'Evening'];

export const availableSlots = {
  Morning: ['7:00', '8:00', '9:00', '10:00', '11:00', '11:30'],
  Afternoon: ['12:00', '13:00', '14:00', '15:00', '16:00', '16:30'],
  Evening: ['17:00', '18:00', '19:00', '20:00', '21:00', '21:30']
};

export const timeZones: DropDownItem[] = [
  {
    id: 1,
    name: 'Central Time - US & Canada'
  },
  {
    id: 2,
    name: 'Atlantic Standard Time'
  },
  {
    id: 3,
    name: 'Eastern Standard Time'
  },
  {
    id: 4,
    name: 'Central Standard Time'
  },
  {
    id: 5,
    name: 'Hawaii-Aleutian Standard Time'
  }
];
