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

<br>

Currently conducting research at NCC Lab under the supervision of Associate Professor [Quanying Liu](https://scholar.google.com/citations?user=UpP9hJ8AAAAJ&hl=zh-CN&oi=ao).


{% comment %}
My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
{% endcomment %}

# 🔥 News
- *2025.11*: &nbsp;🎉🎉 Our project "Foundation Model-Aligned Chinese Semantic Decoding from Brain Signals" reward by the University Scholars Innovation Technology Fund (Climb Program) of Guangdong Province

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
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2024.08 - Present*, Undergraduate, College of Engineering, [Southern University of Science and Technology](https://sustech.edu.cn/), Shenzhen
- *2021.09 - 2024.06*, High School Diploma, [Attached Middle School to Jiangxi Normal University](http://www.jxsdfz.com/), Nanchang

# 🔬 Research Experience
- *2024.09 - Present*, **Neural Computing and Control Lab (NCC Lab)**, SUSTech,  
  Supervisor: Associate Professor [Quanying Liu](https://scholar.google.com/citations?user=UpP9hJ8AAAAJ&hl=zh-CN&oi=ao)
  - **Multimodal Neural Encoding & Decoding**: 
    - *Visual*: High-Fidelity EEG Visual Decoding (EEG-to-Image) & Visual Encoding (Image-to-EEG)
    - *Auditory & Language Processing*: Foundation Model-Aligned Chinese Semantic Decoding
    - *Multimodal Decoding*: Generalizable Brain-to-Concept Translation via Adaptive Multimodal Routing
  - **Cross-Modal BCI Systems & Intelligent Control**:
    - *Computer Vision*: Multi-View 3D Reconstruction System for EEG Electrode Localization
  - **Neural Modulation for Emotion & Cognition**:
    - *Real-Time System*: EEG-Guided Brain Modulation using Closed-loop Visual Stimulation Optimization
