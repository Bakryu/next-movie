import CATEGORIES from '../../constants/CATEGORIES'
export default {
  name: 'postCategoriesType',
  type: 'document',
  title: 'Type Item',

  initialValue: {
    groupName: CATEGORIES.TYPE
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
