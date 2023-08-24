import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Балчуг-тех',
    siteUrl: 'https://balchug-tech.ru/',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/app/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: './src/images/' },
      __key: 'images',
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Open Sans',
            file: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
          },
          {
            name: 'Roboto',
            file: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500&display=swap',
          },
          {
            name: 'Inter',
            file: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500&display=swap',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}

export default config
