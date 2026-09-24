# Aarohan IT Hub Website

A professional Jekyll website for **Aarohan IT Hub** - a technology company based in Kathmandu, Nepal, dedicated to delivering exceptional IT services to businesses of all sizes.

## Overview

This website provides a comprehensive showcase of our services, projects, and company information, designed to attract and engage potential clients.

## Features

- **Responsive Design** - Works flawlessly on all devices (desktop, tablet, mobile)
- **Modern UI** - Clean, professional design with a blue tech color scheme
- **Service Showcase** - Detailed presentation of our technology services
- **Project Portfolio** - Case studies of completed projects
- **Blog/News** - Technical articles and company updates
- **Contact Form** - Lead generation with Formspree integration
- **GitHub Pages Ready** - Easy deployment via GitHub Actions

## Technology Stack

- **Jekyll** (static site generator)
- **Minima** (theme framework)
- **HTML5, CSS3, JavaScript**
- **SVG graphics** (scalable icons and illustrations)

## Services

1. Web Development (React, Vue, Angular, Node.js)
2. Cloud Solutions (AWS, Azure, GCP)
3. IT Consulting
4. Cybersecurity
5. Mobile App Development (iOS & Android)

## Getting Started Locally

### Prerequisites

- Ruby (2.7.0 or higher)
- Bundler gem

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

Visit `http://localhost:4000` to view the site locally.

## Deployment to GitHub Pages

### Method 1: GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages on every push to the `main` branch.

To set this up:

1. Push the code to a GitHub repository (e.g., `aarohanithub/aarohan-it-hub`)
2. Go to **Settings > Pages** in your repository
3. Under **Source**, select **GitHub Actions**
4. The site will be automatically deployed from the workflow

### Method 2: Manual GitHub Pages

1. Push the code to the `gh-pages` branch:
```bash
git checkout -b gh-pages
git push origin gh-pages
```
Or configure in **Settings > Pages** to deploy from the `gh-pages` or `main`/docs branch.

## Configuration

Key configuration is in `_config.yml`:

```yaml
# Update these for your organization
title: Aarohan IT Hub
url: "https://aarohanithub.github.io"
baseurl: "/aarohan-it-hub"   # Remove or set to "" if using a custom domain
```

## Customization

### Content
- Edit pages in `_pages/` directory
- Blog posts in `_posts/` (format: `YYYY-MM-DD-title.md`)
- Projects in `_projects/` directory
- Header/footer in `_includes/`

### Styling
- Custom CSS in `assets/css/style.scss`
- Override Minima theme colors and variables at the top of the file

### Logo
- Replace `assets/images/aarohan-logo.svg` with your logo

## Formspree Contact Form

The contact form uses [Formspree](https://formspree.io/) for email notifications.

1. Sign up at [formspree.io](https://formspree.io/)
2. Get your form ID
3. Replace `your-form-id` in `_pages/contact.html`:
```html
action="https://formspree.io/f/your-form-id"
```

## Project Structure

```
aarohan-it-hub/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page layouts
│   └── default.html
├── _includes/               # Reusable components
│   ├── header.html
│   └── footer.html
├── _pages/                  # Website pages
│   ├── about.html
│   ├── services.html
│   ├── projects.md
│   └── contact.html
├── _posts/                  # Blog posts
├── _projects/               # Project portfolio items
├── blog/                    # Blog index
│   └── index.html
├── assets/
│   ├── css/
│   │   └── style.scss       # Main stylesheet
│   ├── js/
│   │   └── main.js          # JavaScript
│   └── images/
│       └── aarohan-logo.svg # Logo
├── Gemfile                  # Ruby dependencies
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions deployment
```

## GitHub Pages URL

After deployment, the site will be available at:
```
https://aarohanithub.github.io/aarohan-it-hub
```

## License

This project is open source and available under the MIT License.

---

**Aarohan IT Hub** - Empowering businesses with innovative technology solutions.
