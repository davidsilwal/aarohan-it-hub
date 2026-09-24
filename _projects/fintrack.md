---
layout: project
title: "FinTrack — SME Financial Analytics & Cash Flow Engine"
description: "A real-time financial intelligence dashboard providing automated bookkeeping reconciliation, expense categorization, cash-flow forecasting, and predictive analytics for commercial businesses."
meta:
  client: "SME Banking & Commerce Solutions"
  date: "2024"
  domain: "Financial Technology"
  technologies: "Next.js, Python, FastAPI, PostgreSQL, Plotly.js, Docker"
---

### Project Overview

Small and medium-sized enterprises (SMEs) frequently struggle with delayed financial visibility and inaccurate cash-flow projections. Aarohan IT Hub was commissioned to design and engineer FinTrack: an enterprise financial intelligence tool that aggregates bank feeds, categorizes operating expenses in real time, and leverages predictive analytics to forecast working capital requirements.

### Core Challenges

- **Heterogeneous Banking Data:** Normalizing varied bank transaction formats, CSV statements, and payment processor receipts into a consistent ledger structure.
- **Low-Latency Analytical Visualizations:** Rendering interactive multi-year cash flow waterfall charts and scenario simulations without frontend sluggishness.
- **Strict Financial Data Security:** Enforcing AES-256 bank-grade encryption at rest and in transit, accompanied by strict tamper-evident transaction logs.

### Architectural Solution

- **Frontend Interface:** Next.js application leveraging Plotly.js for interactive financial charting and dynamic scenario modeling.
- **Analytics Engine:** Python FastAPI service executing statistical forecasting models (ARIMA & exponential smoothing) for cash flow trajectory projections.
- **Database Architecture:** PostgreSQL with TimescaleDB extension for optimized time-series transaction storage and high-speed aggregation queries.
- **Containerized Deployment:** Dockerized multi-stage containers deployed behind an NGINX reverse proxy with TLS 1.3 termination.

### Key Capabilities

- **Automated Ledger Categorization:** Rule-based and pattern-matched transaction categorization with custom chart of accounts mapping.
- **Predictive Cash Runway Modeling:** 30/60/90-day cash projection curves accounting for pending vendor payables and expected invoice receivables.
- **Multi-Entity & Multi-Currency:** Consolidated financial reporting across multiple subsidiary business entities and localized exchange rate adjustments.
- **One-Click Regulatory Exports:** Standardized VAT, Tax, and P&amp;L balance sheet generation exported directly to PDF and Excel formats.

### Measurable Impact

- **15+ hours saved weekly** per accounting team on routine manual bank reconciliations.
- **98.4% accuracy** in automated expense classification across recurring commercial vendor accounts.
- **Over 40 businesses** actively monitoring real-time liquidity and working capital.
