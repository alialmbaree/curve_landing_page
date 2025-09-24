# Profico Academy - DEV & DESIGN INTERNSHIP Website

A modern, responsive website built with HTML5, CSS3, and JavaScript that replicates the Profico Academy design with pixel-perfect accuracy.

## 🚀 Features

- **Pixel-Perfect Design**: Exact replication of the provided design with dark theme, gradients, and glassmorphism effects
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations, hover effects, and interactive elements
- **3D Geometric Shapes**: Animated transparent 3D shapes with CSS clip-path
- **Glassmorphism Effects**: Modern frosted glass card effects with backdrop-filter
- **Interactive Elements**: Ripple effects, parallax scrolling, and smooth transitions
- **Mobile-First**: Optimized mobile experience with collapsible navigation

## 🛠️ Technology Stack

- **HTML5**: Semantic, SEO-friendly structure
- **CSS3**: Modern layout techniques (Grid, Flexbox), CSS Variables, Animations
- **JavaScript**: Vanilla JS for interactivity and animations
- **Fonts**: Inter font family from Google Fonts

## 📁 Project Structure

```
curve.ads/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Elements

### Color Palette
- **Primary Background**: #0A0A0A (Dark charcoal)
- **Secondary Background**: #1A1A1A (Lighter dark)
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: #CCCCCC (Light gray)
- **Text Muted**: #999999 (Gray)

### Gradients
- **Hero Background**: Red-pink to teal-cyan gradient
- **Cards Background**: Purple-pink to orange-yellow gradient

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300-900 (Light to Black)
- **Hierarchy**: Clear typography scale with proper contrast

## ✨ Key Features

### Hero Section
- Animated gradient orbs with floating animation
- Large typography with proper spacing
- Call-to-action button with hover effects

### Statistics Bar
- Four-column grid layout
- Clean typography hierarchy
- Responsive grid system

### Features Cards
- Glassmorphism effect with backdrop-filter
- 3D geometric shapes with CSS clip-path
- Hover animations and interactions
- Numbered cards with animated shapes

### Animations
- Scroll-triggered fade-in animations
- Parallax background effects
- Card hover transformations
- Button ripple effects
- Typing animation for hero title
- Counter animations for statistics

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **No build process required** - it's a static website

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Colors
Modify CSS variables in `:root` section of `styles.css`:
```css
:root {
    --bg-primary: #0A0A0A;
    --text-primary: #FFFFFF;
    /* ... other variables */
}
```

### Animations
Adjust animation durations and effects in `script.js`:
```javascript
// Modify animation timing
setTimeout(typeWriter, 1000); // Typing delay
animateCounter(target, 0, number, 2000); // Counter duration
```

### Responsive Design
Update breakpoints in `styles.css` media queries:
```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

## 🔧 Performance Optimizations

- **CSS Variables**: Efficient color and spacing management
- **Hardware Acceleration**: Transform animations use GPU
- **Intersection Observer**: Efficient scroll-triggered animations
- **Debounced Events**: Optimized scroll and resize handlers
- **Minimal Dependencies**: No external libraries except Google Fonts

## 📄 License

This project is created for educational and portfolio purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Built with ❤️ using modern web technologies**
