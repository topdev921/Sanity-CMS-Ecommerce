export default {
  name: 'masthead',
  type: 'document',
  title: 'Masthead',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'imageDescription',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
    },
  ],
}
