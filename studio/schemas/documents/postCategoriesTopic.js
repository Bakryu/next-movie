export default {
  name: 'postCategoriesDate',
  type: 'document',
  title: 'date Item',
  initialValue: {
    groupName: 'date'
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
