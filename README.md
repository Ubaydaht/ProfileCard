# Profile Card

A responsive, accessible profile card web application that displays user information with real-time updates and smooth interactions.

## Overview

This project is a single-page profile card showcasing personal information including bio, hobbies, dislikes, and social media links. It features a modern, dark-themed design with accessibility features and interactive elements.

## Features

✨ **Key Features:**
- **Profile Display** - User avatar, name, title, and biography
- **Real-time Clock** - Live display of current time in milliseconds, updating every second
- **Hobbies & Dislikes** - Lists of personal interests and preferences
- **Social Links** - Quick access to GitHub, LinkedIn, Twitter, and email
- **Responsive Design** - Adapts to different screen sizes
- **Animations** - Smooth slide-in animation on page load
- **Accessibility** - ARIA labels, keyboard navigation, and screen reader support

## Project Structure

```
ProfileCard/
├── index.html      # HTML structure and semantic markup
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
├── ludo.PNG        # Profile photo
└── README.md       # This file
```

## File Descriptions

### index.html
- Semantic HTML5 structure with proper accessibility attributes
- Profile sections: avatar, header, bio, hobbies, dislikes, current time, and social links
- Data-testid attributes for testing purposes

### style.css
- Dark theme color scheme (dark blue background with white text)
- Responsive layout with flexbox
- Slide-in animation for the profile card
- Hover effects on avatar and social links
- Mobile-friendly padding and sizing

### script.js
- **updateCurrentTime()** - Fetches and displays current time in milliseconds
- **addSmoothScrollBehavior()** - Enables smooth scrolling for internal navigation
- **enhanceAccessibility()** - Improves keyboard navigation and screen reader compatibility
- Automatic time updates every 1 second
- Visibility change detection for performance optimization

## How to Use

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **View** the profile card with all information and interactive elements

### Customization

To personalize the profile card:
- Update user information in the HTML sections (name, bio, hobbies, etc.)
- Replace `ludo.PNG` with your own profile photo
- Modify social media links in the `<nav>` section with your actual profiles
- Customize colors in the CSS file by changing the background and text colors

## Browser Compatibility

This project works on all modern browsers that support:
- ES6 JavaScript
- CSS Flexbox
- HTML5 semantic elements

## Accessibility Features

- ♿ **ARIA Labels** - All interactive elements have descriptive labels
- ⌨️ **Keyboard Navigation** - Fully navigable with keyboard
- 🔊 **Screen Reader Support** - Live region announcements for time updates
- 📱 **Responsive Design** - Works on mobile and desktop devices

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox and animations
- **JavaScript (Vanilla)** - No dependencies, pure JavaScript

## Performance

- Lightweight implementation with no external libraries
- Optimized animations using CSS transitions
- Performance optimization - time updates pause when tab is not visible

## Testing

The HTML includes `data-testid` attributes for automated testing:
- `test-profile-card` - Main card container
- `test-user-avatar` - Avatar section
- `test-user-name` - User name
- `test-user-bio` - Biography text
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list
- `test-user-time` - Current time display
- `test-user-social-links` - Social links container
- `test-user-social-github`, `test-user-social-linkedin`, etc. - Individual social links

## License

This is a portfolio/internship project. Feel free to use and modify as needed.

## Author

**Olasunkanmi Ubaydah** - Full Stack Developer

---

*Last updated: April 2026*
