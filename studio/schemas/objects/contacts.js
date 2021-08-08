export default {
  name: 'contacts',
  type: 'object',
  Title: 'Contacts',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'phoneNumber',
      type: 'object',
      title: 'Phone Number',
      fields: [
        {
          name: 'placeholder',
          type: 'string',
          title: 'Phone Number placeholder',
          description: 'This field carries a decorative load'
        },
        {
          name: 'number',
          type: 'string',
          title: 'Phone Number',
          description: 'This is the number by which you can be contacted'
        },
        {
          name: 'numberText',
          type: 'string',
          title: 'Phone Number header text',
          description: 'this is the text before the phone number in the navigation'
        }
      ]
    },
    {
      name: 'email',
      type: 'object',
      title: 'Email',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        {
          name: 'text',
          type: 'string',
          title: 'Email Text',
          description: 'this is the text before the email in the navigation'
        }
      ]
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          name: 'socialsItem',
          type: 'object',
          title: 'Socials Item',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Socials Item Image'
            },
            {
              name: 'link',
              type: 'string',
              title: 'Socials Item link'
            }
          ],
          preview: {
            select: {
              title: 'link'
            }
          }
        }
      ]
    }
  ]
}
