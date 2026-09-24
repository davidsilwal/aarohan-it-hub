---
layout: page
title: "Projects & Case Studies"
badge: "Portfolio"
permalink: /projects/
excerpt: "A selection of production systems, cloud platforms, and enterprise software engineered for our partners."
---

<!-- Projects Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

  {% for project in site.projects %}
  <article class="flex flex-col p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300">
    
    <div class="flex items-center justify-between gap-2 mb-4">
      <span class="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
        {{ project.meta.domain | default: "Enterprise Solution" }}
      </span>
      <span class="text-xs font-mono text-slate-400 font-medium">{{ project.meta.date | default: "2024" }}</span>
    </div>

    <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 mb-2">
      <a href="{{ project.url | relative_url }}" class="hover:text-sky-600 transition-colors">{{ project.title }}</a>
    </h2>

    {% if project.meta.client %}
      <p class="text-xs font-semibold text-slate-500 mb-3">
        Client: <span class="text-slate-800">{{ project.meta.client }}</span>
      </p>
    {% endif %}

    <p class="text-sm text-slate-600 leading-relaxed mb-6 grow">
      {{ project.description | default: project.content | strip_html | truncate: 180 }}
    </p>

    {% if project.meta.technologies %}
      <div class="flex flex-wrap gap-1.5 mb-6">
        {% assign tech_items = project.meta.technologies | split: ", " %}
        {% for t in tech_items %}
          <span class="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200">{{ t }}</span>
        {% endfor %}
      </div>
    {% endif %}

    <div class="pt-5 border-t border-slate-100">
      <a href="{{ project.url | relative_url }}" class="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 group">
        <span>Read Full Case Study</span>
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </a>
    </div>

  </article>
  {% endfor %}

</div>

<!-- Bottom Consultation Card -->
<div class="mt-16 p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
  <div>
    <h3 class="text-xl font-bold tracking-tight text-slate-950 mb-1">Need custom software engineered for your organization?</h3>
    <p class="text-sm text-slate-600">We partner with startups and enterprises to build resilient, scalable technology.</p>
  </div>
  <a href="{{ '/contact/' | relative_url }}" class="shrink-0 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-all">
    Start a Project Discussion
  </a>
</div>
