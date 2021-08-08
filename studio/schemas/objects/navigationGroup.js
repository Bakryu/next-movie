export default {
  name: 'navigationGroup',
  title: 'Navigation Group ',
  type: 'object',
  fields: [
    {
      name: 'group',
      type: 'array',
      title: 'Navigation Item',
      validation: Rule => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items')
      ],
      of: [
        {
          type: 'navigationItem',
         
        },{

          name:'navigationGroup',
          type:'object',
          title:'Navigation Group',
          fields:[
            {
            name:'groupBoxName',
            title:'Group Name',
            type:'string'
        },{
          name:'groupList',
          type:'array',
          title:'Group List',
          of:[
            {type: 'navigationItem',}
          ]
        }
          ]

        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
