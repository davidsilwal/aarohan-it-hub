---
layout: page
title: Our Projects
permalink: /projects/
excerpt: "A showcase of technology solutions we've built for our clients."
---

<div class="container">
  <h2 class="section-title">Our Work</h2>
  <p class="section-subtitle">A selection of projects we've delivered across various industries</p>

  <div class="projects-container">

    {% for project in site.projects %}
    {% if forloop.first %}
    <div class="project-card-detailed">
      <div class="project-image">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="360" height="260" rx="15" fill="none" stroke="#007acc" stroke-width="2" opacity="0.3"/>
          <rect x="60" y="60" width="280" height="60" rx="8" fill="#007acc" opacity="0.15"/>
          <circle cx="120" cy="160" r="25" fill="#007acc" opacity="0.25"/>
          <circle cx="200" cy="160" r="25" fill="#007acc" opacity="0.25"/>
          <circle cx="280" cy="160" r="25" fill="#007acc" opacity="0.25"/>
        </svg>
      </div>
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        {% if project.meta %}
          {% if project.meta.client %}
            <p><strong>Client:</strong> {{ project.meta.client }}</p>
          {% endif %}
          {% if project.meta.date %}
            <p><strong>Date:</strong> {{ project.meta.date }}</p>
          {% endif %}
          {% if project.meta.technologies %}
            <p><strong>Technologies:</strong> {{ project.meta.technologies }}</p>
          {% endif %}
        {% endif %}
        {{ project.content | truncate: 300 }}
        <a href="{{ project.url }}" class="btn btn-primary" style="margin-top: 1rem;">View Project</a>
      </div>
    </div>
    {% else %}
    <div class="project-card-detailed {% if forloop.index0 == 1 or forloop.index0 == 3 %}reverse{% endif %}">
      <div class="project-image">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="360" height="260" rx="15" fill="none" stroke="#007acc" stroke-width="2" opacity="0.3"/>
          <rect x="80" y="60" width="240" height="180" rx="10" fill="#007acc" opacity="0.2"/>
          <rect x="120" y="100" width="160" height="30" rx="5" fill="#fff" opacity="0.7"/>
          <rect x="120" y="150" width="160" height="30" rx="5" fill="#fff" opacity="0.7"/>
        </svg>
      </div>
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        {% if project.meta %}
          {% if project.meta.client %}
            <p><strong>Client:</strong> {{ project.meta.client }}</p>
          {% endif %}
          {% if project.meta.date %}
            <p><strong>Date:</strong> {{ project.meta.date }}</p>
          {% endif %}
          {% if project.meta.technologies %}
            <p><strong>Technologies:</strong> {{ project.meta.technologies }}</p>
          {% endif %}
        {% endif %}
        {{ project.content | truncate: 300 }}
        <a href="{{ project.url }}" class="btn btn-primary" style="margin-top: 1rem;">View Project</a>
      </div>
    </div>
    {% endif %}
    {% endfor %}

  </div>
</div>
