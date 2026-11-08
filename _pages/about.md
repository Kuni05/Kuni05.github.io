---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! I'm a third-year Automation student in the College of Engineering at Southern University of Science and Technology (SUSTech). I'm interested in how brain signals encode information and how we can use them to build brain-computer interfaces.

I study neural encoding and decoding at NCC Lab with Associate Professor [Quanying Liu](https://scholar.google.com/citations?user=UpP9hJ8AAAAJ&hl=zh-CN&oi=ao). I'm also a research intern at [Omni-Intelligence](https://omni-intel.cn/), where I work on aligning generative models with human preferences during post-training.


{% comment %}
My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
{% endcomment %}

# 🔥 News
- *2025.12*: &nbsp;🎉🎉 Our project "Foundation Model-Aligned Chinese Semantic Decoding from Brain Signals" was supported by the Special Funds for the Cultivation of Guangdong College Students' Scientific and Technological Innovation. ("Climbing Program" Special Funds.)

{% include publications.html %}


# 🎖 Honors and Awards
<div class="honors-list">
  <details class="honor-details">
    <summary><span class="honor-line"><span class="honor-date">2026.05</span>, <strong>College Students' Innovative Entrepreneurial Training Plan Program</strong></span></summary>
    <div class="honor-content">
      <ul>
        <li>Project with a grant of CNY 20,000: <em>Opti-Rhythm: A Digital Sleep Modulation System Based on a Physiological-Topology Brain-Body Coupling Foundation Model</em></li>
      </ul>
    </div>
  </details>

  <details class="honor-details">
    <summary><span class="honor-line"><span class="honor-date">2025.12</span>, <strong>Special Funds for the Cultivation of Guangdong College Students' Scientific and Technological Innovation</strong> <span class="honor-note">("Climbing Program" Special Funds)</span></span></summary>
    <div class="honor-content">
      <ul>
        <li>Project with a grant of CNY 20,000: <em>Foundation Model-Aligned Chinese Semantic Decoding from Brain Signals</em></li>
      </ul>
    </div>
  </details>

  <details class="honor-details">
    <summary><span class="honor-line"><span class="honor-date">2025.11</span>, <strong>Award of Excellence (Poster Presentation)</strong>, The 6th SUSTech BME Research Day</span></summary>
    <div class="honor-content">
      <ul>
        <li>Project: <em>MindPilot: EEG-guided Brain Modulation using Closed-loop Visual Stimulation Optimization</em></li>
      </ul>
    </div>
  </details>
</div>

# 📖 Educations
- *2024.08 - Present*, BEng in Automation (in progress), College of Engineering, [Southern University of Science and Technology](https://sustech.edu.cn/), Shenzhen
- *2021.09 - 2024.06*, High School Diploma, [Attached Middle School to Jiangxi Normal University](http://www.jxsdfz.com/), Nanchang

<div class="education-logos">
  <img src="{{ "/images/sustech_logo.png" | relative_url }}" alt="Southern University of Science and Technology" class="education-logo education-logo--sustech">
  <img src="{{ "/images/jxsdfz_logo.png" | relative_url }}" alt="Attached Middle School to Jiangxi Normal University" class="education-logo education-logo--jxsdfz">
</div>

# 🔬 Research Experience

<div class="research-item">
  <div class="research-header">
    <span><em>2026.06 - Present</em>, <strong><a href="https://omni-intel.cn/">Omni-Intelligence</a></strong>, Shenzhen</span>
    <span class="research-supervisor">Supervisors: <a href="https://hedges0-0.github.io/">Dr. Chen Wei</a> &amp; <a href="https://dongyangli.site/">Mr. Dongyang Li</a></span>
  </div>
  <details class="research-details">
    <summary>Research Intern working on human preference-aligned post-training for generative models.</summary>
    <div class="research-details-body">
      <div class="research-content">
        <ul>
          <li><strong>Human Preference-Aligned Generative Model Post-Training</strong></li>
        </ul>
      </div>
      <div class="research-logo-panel research-logo-panel--wide">
        <img src="{{ "/images/omni_intelligence.png" | relative_url }}" alt="Omni-Intelligence" class="research-logo research-logo--wide">
      </div>
    </div>
  </details>
</div>

<div class="research-item">
  <div class="research-header">
    <span><em>2024.09 - Present</em>, <strong>Neural Computing and Control Lab (NCC Lab)</strong>, SUSTech</span>
    <span class="research-supervisor">Supervisor: A.P. <a href="https://scholar.google.com/citations?user=UpP9hJ8AAAAJ&hl=zh-CN&oi=ao">Quanying Liu</a></span>
  </div>
  <details class="research-details">
    <summary>Undergraduate Researcher focusing on BCI, CHI, and NeuroAI.</summary>
    <div class="research-details-body">
      <div class="research-content">
        <ul>
          <li><strong>Multimodal Neural Encoding & Decoding</strong></li>
          <li><strong>Cross-Modal BCI Systems & Intelligent Control</strong></li>
          <li><strong>Neural Modulation for Emotion & Cognition</strong></li>
          <li><strong>Foundation Models</strong></li>
        </ul>
      </div>
      <div class="research-logo-panel">
        <img src="{{ "/images/ncc_lab.png" | relative_url }}" alt="Neural Computing and Control Lab" class="research-logo">
      </div>
    </div>
  </details>
</div>


<span class='anchor' id='competitions'></span>
# 🏆 Competitions

<details class="competition-details">
<summary><strong>Mathematical Modeling</strong></summary>
<div class="competition-content">
  <ul>
    <li><em>2026.05</em>, <strong>Finalist (About Top1%)</strong>, Mathematical Contest in Modeling (MCM/ICM).
      <ul>
        <li>Role: <strong>Team Leader &amp; Advisor</strong>. Topic: <strong><em>Artemis's Choice: Chariot or Elevator?</em></strong>.</li>
      </ul>
    </li>
    <li><em>2025.12</em>, <strong>Winning Prize</strong>, The 6th "Greater Bay Area Cup" Financial Mathematical Modeling Contest.
      <ul>
        <li>Role: <strong>Team Leader</strong>. Topic: <strong><em>Comprehensive Evaluation and Development Analysis of Stablecoins</em></strong>.</li>
        <li>Hosted by Guangdong Society for Industrial and Applied Mathematics & Guangdong-Hong Kong-Macau Center for Applied Mathematics (Sun Yat-sen University).</li>
      </ul>
    </li>
    <li><em>2025.05</em>, <strong>Honorable Mention (H Award)</strong>, Mathematical Contest in Modeling (MCM/ICM).
      <ul>
        <li>Role: <strong>Solo Participant</strong>. Topic: <strong><em>Cybersecurity Analysis Based on the Global Cybersecurity Index (GCI)</em></strong>.</li>
      </ul>
    </li>
    <li><em>2023.07</em>, <strong>National Second Prize</strong>, The 3rd China High School Mathematical Contest in Modeling.
      <ul>
        <li>Role: <strong>Solo Participant</strong>. Topic: <strong><em>Game Theoretic Analysis of Medical Resource Runs During the COVID-19 Pandemic</em></strong>.</li>
        <li>Hosted by Beijing Normal University.</li>
      </ul>
    </li>
  </ul>
</div>
</details>

<details class="competition-details">
<summary><strong>Data Science &amp; Machine Learning</strong></summary>
<div class="competition-content">
  <ul>
    <li><em>2026.07.16</em>, <strong>Bronze Medal</strong> (193rd of 3,061), <a href="https://www.kaggle.com/competitions/neurogolf-2026"><strong>The 2026 NeuroGolf Championship</strong></a>, Kaggle.
      <ul>
        <li>Role: <strong>Solo Participant</strong>. Task: <em>Design the smallest neural networks to solve ARC-AGI image transformations</em>.</li>
      </ul>
    </li>
  </ul>
</div>
</details>

<details class="section-details" id="-skill">
  <summary><h1>⚒️ Skill</h1></summary>
  <ul>
    <li><strong>Programming</strong>: Python, C, Java, MATLAB, LaTeX</li>
    <li><strong>Frameworks</strong>: PyTorch, NumPy, MNE</li>
    <li><strong>Tools</strong>: Git, Docker, Jupyter</li>
    <li><strong>Languages</strong>: Chinese (Native), English (Fluent, CET-4)</li>
  </ul>
</details>

<details class="section-details" id="-social-work--services">
  <summary><h1>🤝 Social Work &amp; Services</h1></summary>
  <ul>
    <li><strong>Southern University of Science and Technology Red Cross Youth Chapter</strong>: Certified First Aider by Shenzhen Red Cross Society. The chapter was recognized as a <em>National Red Cross Model Unit</em> by the Red Cross Society of China (2025).</li>
    <li><strong>Mental Health First Aider (MHFAider)</strong>: Standard Course Certificate of Completion issued by The Mental Health Association of Hong Kong (authorized by MHFA International).</li>
    <li><strong>Excellent Dormitory Manager</strong> of Southern University of Science and Technology, Zhicheng College.</li>
  </ul>
</details>
