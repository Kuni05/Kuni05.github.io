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

Hi! I'm a sophomore undergraduate student in Engineering at Southern University of Science and Technology（SUSTech）, intending to major in EE/BME. Strong interests in neuroscience and BCI, with with goals to explore the mysteries of the brain and develop innovative brain-computer interface technologies. 

Currently conducting research at NCC Lab under the supervision of Associate Professor [Quanying Liu](https://scholar.google.com/citations?user=UpP9hJ8AAAAJ&hl=zh-CN&oi=ao).


{% comment %}
My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
{% endcomment %}

# 🔥 News
- *2025.12*: &nbsp;🎉🎉 Our project "Foundation Model-Aligned Chinese Semantic Decoding from Brain Signals" was supported by the Special Funds for the Cultivation of Guangdong College Students' Scientific and Technological Innovation. ("Climbing Program" Special Funds.)

{% comment %}
# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**
{% endcomment %}


# 🎖 Honors and Awards
- *2026.05*, **College Students' Innovative Entrepreneurial Training Plan Program**.
  <details class="honor-details">
    <summary>Project details</summary>
    <div class="honor-content" markdown="1">
    - Project with a grant of CN¥20,000: *Opti-Rhythm：基于生理拓扑的脑体耦合基础模型的数字睡眠调控系统*.
    </div>
  </details>
- *2025.12*, **Special Funds for the Cultivation of Guangdong College Students' Scientific and Technological Innovation. ("Climbing Program" Special Funds.)**.
  <details class="honor-details">
    <summary>Project details</summary>
    <div class="honor-content" markdown="1">
    - Project with a grant of CN¥20,000: *Foundation Model-Aligned Chinese Semantic Decoding from Brain Signals*.
    </div>
  </details>
- *2025.11*, **Award of Excellence (Poster Presentation)**, The 6th SUSTech BME Research Day.
  <details class="honor-details">
    <summary>Project details</summary>
    <div class="honor-content" markdown="1">
    - Project: *MindPilot: EEG-guided Brain Modulation using Closed-loop Visual Stimulation Optimization*.
    </div>
  </details>

# 📖 Educations
- *2024.08 - Present*, Undergraduate, College of Engineering, [Southern University of Science and Technology](https://sustech.edu.cn/), Shenzhen
- *2021.09 - 2024.06*, High School Diploma, [Attached Middle School to Jiangxi Normal University](http://www.jxsdfz.com/), Nanchang

# 🔬 Research Experience

<div class="research-item">
  <div class="research-header">
    <span><em>2024.09 - Present</em>, <strong>Neural Computing and Control Lab (NCC Lab)</strong>, SUSTech</span>
    <span class="research-supervisor">Supervisor: A.P. <a href="https://scholar.google.com/citations?user=UpP9hJ8AAAAJ&hl=zh-CN&oi=ao">Quanying Liu</a></span>
  </div>
  <details class="research-details">
    <summary>Undergraduate Researcher focusing on BCI, CHI, and NeuroAI.</summary>
    <div class="research-content">
      <ul>
        <li><strong>Multimodal Neural Encoding & Decoding</strong>:
          <ul>
            <li><em>Visual</em>: High-Fidelity EEG Visual Decoding (EEG-to-Image) & Visual Encoding (Image-to-EEG)</li>
            <li><em>Auditory & Language Processing</em>: Foundation Model-Aligned Chinese Semantic Decoding</li>
            <li><em>Multimodal Decoding</em>: Generalizable Brain-to-Concept Translation via Adaptive Multimodal Routing</li>
          </ul>
        </li>
        <li><strong>Cross-Modal BCI Systems & Intelligent Control</strong>:
          <ul>
            <li><em>Computer Vision</em>: Multi-View 3D Reconstruction System for EEG Electrode Localization</li>
          </ul>
        </li>
        <li><strong>Neural Modulation for Emotion & Cognition</strong>:
          <ul>
            <li><em>Real-Time System</em>: EEG-Guided Brain Modulation using Closed-loop Visual Stimulation Optimization</li>
          </ul>
        </li>
        <li><strong>EEG Foundation Models </strong>:
          <ul>
            <li><em>Sleep</em>: Post-training and Adaptation of EEG Foundation Models for Sleep Analysis</li>
          </ul>
        </li>
      </ul>
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
        <li><strong>Role</strong>: Team Leader &amp; Advisor. <strong>Topic</strong>: <em>Artemis's Choice: Chariot or Elevator?</em>.</li>
      </ul>
    </li>
    <li><em>2025.12</em>, <strong>Winning Prize</strong>, The 6th "Greater Bay Area Cup" Financial Mathematical Modeling Contest.
      <ul>
        <li><strong>Role</strong>: Team Leader. <strong>Topic</strong>: <em>Comprehensive Evaluation and Development Analysis of Stablecoins</em>.</li>
        <li>Hosted by Guangdong Society for Industrial and Applied Mathematics & Guangdong-Hong Kong-Macau Center for Applied Mathematics (Sun Yat-sen University).</li>
      </ul>
    </li>
    <li><em>2025.05</em>, <strong>Honorable Mention (H Award)</strong>, Mathematical Contest in Modeling (MCM/ICM).
      <ul>
        <li><strong>Role</strong>: Solo Participant. <strong>Topic</strong>: <em>Cybersecurity Analysis Based on the Global Cybersecurity Index (GCI)</em>.</li>
      </ul>
    </li>
    <li><em>2023.07</em>, <strong>National Second Prize</strong>, The 3rd China High School Mathematical Contest in Modeling.
      <ul>
        <li><strong>Role</strong>: Solo Participant. <strong>Topic</strong>: <em>Game Theoretic Analysis of Medical Resource Runs During the COVID-19 Pandemic</em>.</li>
        <li>Hosted by Beijing Normal University.</li>
      </ul>
    </li>
  </ul>
</div>
</details>

# ⚒️ Skill
- **Programming**: Python, C, Java, MATLAB, LATEX
- **Frameworks**: PyTorch, NumPy, MNE
- **Tools**: Git, Docker, Jupyter
- **Languages**: Chinese (Native), English (Fluent, CET-4)


# 🤝 Social Work & Services
- **Southern University of Science and Technology Red Cross Youth Chapter**: Certified First Aider by Shenzhen Red Cross Society. The chapter was recognized as a *National Red Cross Model Unit* by the Red Cross Society of China (2025).
- **Mental Health First Aider (MHFAider)**: Standard Course Certificate of Completion issued by The Mental Health Association of Hong Kong (authorized by MHFA International).
- **Excellent Dormitory Manager** of Southern University of Science and Technology, Zhicheng College.
