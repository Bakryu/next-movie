
export default {
  name: 'postCategoriesGenres',
  type: 'document',
  title: 'Genres Item',

  initialValue: {
    groupName: 'Genres'
  },
  fields: [
    {
      name: 'groupName',
      type: 'string',
      title: 'Group Name',
      description: 'Change this field in all elements to change the group name'
    },
    { name: 'itemName', type: 'string', title: 'Item Name', description: 'enter category name' }
  ],
  preview: {
    select: {
      title: 'itemName'
    }
  }
}
