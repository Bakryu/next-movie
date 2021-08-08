export default {
  name: 'connectWithUs',
  type: 'object',
  title: 'Connect with us Form',
  fields: [
    {
      name: 'formTitle',
      type: 'string',
      title: 'Form Title'
    },
    {
      name: 'formDescription',
      type: 'string',
      title: 'Form Description'
    },
    {
      name: 'inputList',
      type: 'object',
      title: 'Fields List',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Field Name',
          description: 'enter placeholder'
        },
        {
          name: 'email',
          type: 'string',
          title: 'Field Email',
          description: 'enter placeholder'
        },
        {
          name: 'phoneNumber',
          type: 'string',
          title: 'Field phone number',
          description: 'enter placeholder'
        },
        {
          name: 'zipCode',
          type: 'string',
          title: 'Field zip code',
          description: 'enter placeholder'
        }
      ]
    },
    {
      name: 'agreements',
      type: 'string',
      title: 'Form Agreements text'
    },
    {
      name: 'privacyPolicy',
      type: 'string',
      title: 'Privacy Policy'
    },

    {
      name: 'termsOfUse',
      type: 'string',
      title: 'Terms Of Use'
    },
    {
      name: 'formEndPoint',
      type: 'string',
      title: 'enter End Points Url'
    }
  ]
}
