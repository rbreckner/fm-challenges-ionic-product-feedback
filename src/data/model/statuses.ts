export interface Status {
  name: string;
  description: string;
  color: string;

  amount?: number;
}

export const statuses: Status[] = [
  {
    name: 'Planned',
    description: 'Ideas prioritized for research',
    color: '#F49F85',
  },
  {
    name: 'In-Progress',
    description: 'Features currently being developed',
    color: '#AD1FEA',
  },
  {
    name: 'Live',
    description: 'Released features',
    color: '#62BCFA',
  }
]
