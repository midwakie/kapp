/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { useState } from 'react';

import { Dimensions } from 'react-native';
import BubbleSelect, {
  Bubble,
  BubbleProps,
} from '@vahesaroyan/react-native-bubble-select';

const createEmptyBounce = ({ key, width }: { key: number; width: number }) => ({
  id: '',
  text: '',
  borderColor: '#fff',
  borderWidth: 2,
  selectedColor: 'red',
  radius: width / 2,
  image: '',
  key: `K_${key}`,
  marginScale: 1.3,
});

const fakeData: (BubbleProps & { key?: string })[] = [
  {
    id: '1',
    text: 'Routes',
    borderWidth: 11,
    image: 'https://picsum.photos/200/300',
    radius: 55,
  },
  createEmptyBounce({ key: 3, width: 73 }),
  {
    id: '2',
    text: 'Parties',
    borderWidth: 6,
    image: 'https://picsum.photos/200/300',
    radius: 60,
  },
  {
    id: '3',
    text: 'Beach',
    borderWidth: 3,
    image: 'https://picsum.photos/200/300',
    radius: 60,
  },
  createEmptyBounce({ key: 4, width: 92 }),
  {
    id: '4',
    text: 'Food&Drinks',
    borderWidth: 9,
    image: 'https://picsum.photos/200/300',
    radius: 60,
  },
  {
    id: '5',
    text: 'With Kids',
    borderWidth: 7,
    image: 'https://picsum.photos/200/300',
    radius: 60,
  },
  createEmptyBounce({ key: 5, width: 95 }),
  {
    id: '6',
    text: 'Nature',
    borderWidth: 7,
    image: 'https://picsum.photos/200/300',
    radius: 44,
  },
  {
    id: '7',
    text: 'Culture',
    borderWidth: 6,
    image: 'https://picsum.photos/200/300',
    radius: 55,
  },
  createEmptyBounce({ key: 6, width: 90 }),
  {
    id: '8',
    text: 'Parties',
    borderWidth: 6,
    image: 'https://picsum.photos/200/300',
    radius: 41,
  },
  {
    id: '9',
    text: 'Romantic',
    borderWidth: 3,
    image: 'https://picsum.photos/200/300',
    radius: 41,
  },
  {
    id: '10',
    text: 'Urban',
    borderWidth: 11,
    image: 'https://picsum.photos/200/300',
    radius: 49,
  },
];

export const getCategory = (id: number | string) =>
  fakeData.find(item => item.id === id.toString());

const exampleData: BubbleProps[] = fakeData.map(item => ({
  borderColor: '#fff',
  selectedColor: '#fff',
  key: item.id || item.key,
  marginScale: 1.3,
  color: '#19de19',
  ...item,
  id: item.id.toString(),
}));
const TestHardness: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <BubbleSelect
      onSelect={bubble => {
        setSelected([...selected, bubble.id]);
      }}
      onDeselect={bubble => {
        setSelected(selected.filter(item => item !== bubble.id));
      }}
      width={Dimensions.get('window').width}
      height={Dimensions.get('window').height}
      borderColor="#fff"
      bubbleSize={7}>
      {exampleData.map(item => (
        <Bubble {...item} />
      ))}
    </BubbleSelect>
  );
};

export default TestHardness;
