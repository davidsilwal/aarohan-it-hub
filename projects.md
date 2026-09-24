---
layout: page
title: "Projects & Case Studies"
badge: "Portfolio"
permalink: /projects/
excerpt: "A selection of production systems, cloud platforms, and enterprise software engineered for our partners."
---

<div class="container projects-page-container">
  <div class="projects-showcase-grid">

    {% for project in site.projects %}
    <article class="project-showcase-card">
      <div class="showcase-card-header">
        <span class="showcase-tag">{{ project.meta.domain | default: "Enterprise Solution" }}</span>
        <span class="showcase-date">{{ project.meta.date | default: "2024" }}</span>
      </div>

      <div class="showcase-card-body">
        <h2 class="showcase-title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h2>

        {% if project.meta.client %}
          <p class="showcase-client"><strong>Client:</strong> {{ project.meta.client }}</p>
        {% endif %}

        <p class="showcase-desc">
          {{ project.description | default: project.content | strip_html | truncate: 180 }}
        </p>

        {% if project.meta.technologies %}
          <div class="showcase-tech-stack">
            {% assign tech_items = project.meta.technologies | split: ", " %}
            {% for t in tech_items %}
              <span class="tech-pill">{{ t }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>

      <div class="showcase-card-footer">
        <a href="{{ project.url | relative_url }}" class="inline-arrow-link">
          Read Full Case Study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </article>
    {% endfor %}

  </div>

  <!-- Bottom CTA -->
  <div class="page-bottom-cta">
    <div class="cta-inner">
      <div>
        <h3>Need custom software engineered for your organization?</h3>
        <p>We work with startups and established enterprises to build resilient, scalable technology.</p>
      </div>
      <div>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Start a Project</a>
      </div>
    </div>
  </div>
</div>
