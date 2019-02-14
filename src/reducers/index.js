
const cards = [
  {
    id: 1,
    title: 'Do dishes',
    body: 'Make sure they sparkle',
    priority: 'Medium',
    assignedBy: 'Tiana',
    assignedTo: 'Brad',
    status: 'In Queue'
  },
  {
    id: 2,
    title: 'Eat Food',
    body: 'Eat a lot',
    priority: 'High',
    assignedBy: 'Brad',
    assignedTo: 'Brad',
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'Fix changes',
    body: 'Let us know if you have any questions',
    priority: 'Low',
    assignedBy: 'Jason',
    assignedTo: 'Brad',
    status: 'Done'
  },
];

const cardReducer = (state = cards, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cardReducer;