import {ProductRequest} from '../product-request/product-request';

export interface Status {
  name: string;
  description: string;
  color: string;

  productRequests?: ProductRequest[];
}

export const statuses: Status[] = [
  // {
  //   name: 'Suggestion',
  //   description: '',
  //   color: ''
  // },
  {
    name: 'Planned',
    description: 'Ideas prioritized for research',
    color: '#F49F85'
  },
  {
    name: 'In-Progress',
    description: 'Features currently being developed',
    color: '#AD1FEA'
  },
  {
    name: 'Live',
    description: 'Released features',
    color: '#62BCFA'
  }
]
