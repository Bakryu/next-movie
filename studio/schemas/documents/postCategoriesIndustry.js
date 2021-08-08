import CATEGORIES from '../../constants/CATEGORIES'
export default {
  name: 'postCategoriesIndustry',
  type: 'document',
  title: 'Type Item',
  initialValue: {
    groupName: CATEGORIES.INDUSTRY
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
