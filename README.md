# Aarohan IT Hub

Official production website for **Aarohan IT Hub** — an engineering and cloud infrastructure studio based in Kathmandu, Nepal.

Designed with an ultra-clean, minimalist tech aesthetic ("less is more"), optimized for speed, clarity, accessibility, and zero-maintenance static deployment.

## Production URL

- **Custom Domain:** [https://aarohanithub.com.np](https://aarohanithub.com.np)

## Architecture & Technology

- **Framework:** [Jekyll](https://jekyllrb.com/) (Static Site Generation)
- **Deployment:** GitHub Pages via GitHub Actions CI/CD
- **Typography & Styling:** Plus Jakarta Sans / System font stack, CSS custom properties, responsive grid, zero external CSS framework bloat
- **Scripting:** Pure vanilla JavaScript (zero dependencies, accessible mobile menu, clipboard copy)
- **SEO & Social:** OpenGraph tags, Twitter Cards, dynamic sitemap, semantic HTML5

## Pages & Sections

1. **Home (`index.html`)** — Value proposition, live metrics, core capabilities overview, selected case studies, engineering principles, and direct call to action.
2. **Services (`services.html`)** — In-depth breakdown of software engineering, cloud architecture, DevOps, IT consulting, cybersecurity, and mobile solutions.
3. **Projects (`projects.md` & `_projects/*`)** — Production case studies (ShopEase, MediCore, EduManage, FinTrack) featuring client context, architectural solutions, and measurable impact.
4. **About (`about.html`)** — Origins of Aarohan ("Ascent"), engineering principles, technical stack matrix, and studio location.
5. **Contact (`contact.html`)** — Minimalist direct communication channels (email, telephone, office headquarters, GitHub) with one-click copy and rapid SLA.
6. **404 (`404.md`)** — Minimalist error page with swift navigation.

## Local Development

### Prerequisites

- Ruby (3.0+)
- Bundler

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build production distribution
bundle exec jekyll build
```

## Directory Structure

```
aarohan-it-hub/
├── _config.yml              # Jekyll configuration & company metadata
├── _layouts/                # Templates
│   ├── default.html         # Base HTML5 layout with SEO tags
│   ├── page.html            # Standard page layout with hero
│   ├── project.html         # Case study layout with tech pills & meta
│   └── home.html            # Home page layout
├── _includes/               # Reusable partials
│   ├── header.html          # Sticky header with navigation & mobile toggle
│   └── footer.html          # Footer with direct contacts & copyright
├── _projects/               # Portfolio case studies
│   ├── shopease.md
│   ├── medicore.md
│   ├── edumanage.md
│   └── fintrack.md
├── index.html               # Home page
├── services.html            # Services & capabilities page
├── projects.md              # Projects showcase page
├── about.html               # About & company profile page
├── contact.html             # Direct contact channels
├── 404.md                   # 404 error page
├── assets/
│   ├── css/
│   │   └── style.scss       # Modern SCSS stylesheet
│   ├── js/
│   │   └── main.js          # Accessible vanilla JavaScript
│   └── images/
│       ├── aarohan-logo.svg # Brand logo mark
│       └── favicon.svg      # Favicon mark
├── CNAME                    # Custom domain mapping (aarohanithub.com.np)
├── Gemfile                  # Gem dependencies
└── .github/workflows/
    └── deploy.yml           # Automated GitHub Pages CI/CD workflow
```

## License

Copyright &copy; Aarohan IT Hub. All rights reserved.
