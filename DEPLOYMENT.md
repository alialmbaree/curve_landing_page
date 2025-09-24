# Curve Ads Website - Hostinger Deployment Guide

## 🚀 Deployment Instructions

### 1. File Structure
Upload these files to your Hostinger public_html directory:

```
public_html/
├── index.html          # Main website file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
├── .htaccess           # Server configuration
├── site.webmanifest    # PWA manifest
├── robots.txt          # SEO robots file
├── 404.html           # Custom error page
└── images/             # Create this folder for images
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    ├── og-image.jpg
    └── twitter-image.jpg
```

### 2. Required Images
Create these favicon and social media images:

**Favicon Files:**
- `favicon.ico` (32x32px)
- `favicon-16x16.png` (16x16px)
- `favicon-32x32.png` (32x32px)
- `apple-touch-icon.png` (180x180px)
- `android-chrome-192x192.png` (192x192px)
- `android-chrome-512x512.png` (512x512px)

**Social Media Images:**
- `og-image.jpg` (1200x630px) - For Facebook/LinkedIn sharing
- `twitter-image.jpg` (1200x600px) - For Twitter sharing

### 3. Domain Configuration

**Update these URLs in index.html:**
- Line 17: `https://yourdomain.com` → Your actual domain
- Line 18: `https://yourdomain.com/images/og-image.jpg` → Your actual domain
- Line 24: `https://yourdomain.com/images/twitter-image.jpg` → Your actual domain

**Update robots.txt:**
- Line 3: `https://yourdomain.com/sitemap.xml` → Your actual domain

### 4. SSL Certificate
1. Enable SSL certificate in Hostinger control panel
2. Uncomment the HTTPS redirect lines in `.htaccess` (lines 25-28)
3. Update all URLs to use `https://`

### 5. Performance Optimization

**Enable these in Hostinger:**
- Gzip compression (already configured in .htaccess)
- Browser caching (already configured in .htaccess)
- CDN (optional, for better global performance)

### 6. SEO Setup

**Google Search Console:**
1. Add your domain to Google Search Console
2. Verify ownership
3. Submit sitemap.xml (create one if needed)

**Google Analytics:**
1. Add Google Analytics tracking code to index.html
2. Place before closing `</head>` tag

### 7. Contact Form Setup

**Current Setup:**
- Form uses JavaScript simulation
- No backend processing

**For Production:**
- Set up PHP mail handler or use form service like:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Custom PHP script

### 8. Testing Checklist

**Before Going Live:**
- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Contact form functions
- [ ] Mobile responsiveness
- [ ] Page speed test (Google PageSpeed Insights)
- [ ] SSL certificate active
- [ ] Meta tags display correctly
- [ ] Social media sharing works

### 9. Post-Deployment

**Monitor:**
- Website uptime
- Page load speeds
- Contact form submissions
- Search engine indexing
- Social media sharing

**Maintenance:**
- Regular backups
- Update content as needed
- Monitor analytics
- Keep dependencies updated

## 📞 Support

For deployment issues:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Verify file permissions (644 for files, 755 for directories)

## 🔧 Customization

**Brand Colors:**
- Primary: #667eea
- Secondary: #764ba2
- Accent: #f093fb

**Fonts:**
- Inter (Google Fonts) - already loaded

**Responsive Breakpoints:**
- Desktop: 1024px+
- Tablet: 768px-1024px
- Mobile: 480px-768px
- Small Mobile: <480px
