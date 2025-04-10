# ActionFigureAI.app

ActionFigureAI.app is a web application that offers AI-generated personalized action figures. This project uses Next.js 14 with App Router, Tailwind CSS, and TypeScript for a responsive, modern web experience with multiple language support.

## Features

- **AI Action Figure Generation**: Upload photos and get personalized action figures
- **Multiple Style Options**: Choose from various action figure styles including superhero, sci-fi, fantasy, and more
- **Interactive Creation Process**: Simple 3-step process to upload, customize, and generate your action figure
- **Image Preview and Sharing**: Preview your generated figure and easily share it with friends
- **Responsive Design**: Works on all devices from mobile to desktop
- **Multilingual Support**: Available in English, Chinese, Japanese, French, Spanish, and German
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Built-in SEO features for better search engine visibility
- **Performance Optimized**: Fast loading times with Next.js optimizations

## Technology Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-i18next
- **SEO**: Optimized meta tags and semantic HTML
- **Performance**: Optimized Core Web Vitals with Next.js Image component and SSG/SSR
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Image Processing**: Next.js Image Optimization

## Project Structure

```
/app
  /[locale] - Internationalization routes
    /(pages)
      /about - About page
      /gallery - Gallery page
      /create - Create action figure page
    /components - Reusable React components
      /ui - UI components (buttons, cards, etc.)
      /layout - Layout components
      /features - Feature-specific components
    /lib - Utility functions and hooks
      /i18n - Internationalization configuration
      /utils - Helper functions
    /styles - Global styles and Tailwind configuration
  /api - API routes for the backend
  /public
    /images - Static images for the site
    /locales - Translation files
```

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow Next.js 14 best practices
- Implement Server Components by default
- Use Client Components only when necessary
- Follow the Atomic Design methodology for components

### Performance
- Implement proper image optimization
- Use Next.js built-in caching mechanisms
- Optimize bundle size
- Implement proper code splitting
- Monitor Core Web Vitals

### SEO
- Implement proper meta tags
- Use semantic HTML
- Optimize for accessibility
- Implement proper sitemap
- Use structured data where appropriate

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.6.7 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/actionfigureai.app.git
cd actionfigureai.app
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Localization

The application supports the following languages:
- English (en) - Default
- Chinese (zh)
- Japanese (ja)
- French (fr)
- Spanish (es)
- German (de)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team. 