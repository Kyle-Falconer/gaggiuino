export const tableColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'profile', headerName: 'Profile', width: 130 },
  { field: 'score', headerName: 'Score', width: 130 },
  {
    field: 'time', headerName: 'Time', type: 'number', width: 90,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export const tableRows = [
  {
    id: 1, profile: 'Blooming', score: 'Shit', time: 35,
  },
  {
    id: 2, profile: 'Classic Lever', score: 'Better', time: 42,
  },
  {
    id: 3, profile: 'Classic Nine', score: 'Better shit', time: 45,
  },
  {
    id: 4, profile: 'Turbo', score: 'Complete shit', time: 16,
  },
  {
    id: 5, profile: 'Filter 2.0', score: 'OK', time: null,
  },
  {
    id: 6, profile: 'Blooming 2.0', score: null, time: 150,
  },
  {
    id: 7, profile: 'Straight 7', score: 'Meh', time: 44,
  },
  {
    id: 8, profile: '(shrug)', score: 'Ooof', time: 36,
  },
  {
    id: 9, profile: 'Used randomiser', score: 'I touched god', time: 65,
  },
];
