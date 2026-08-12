---
# Display name
title: Bingbing Wen

# Name pronunciation (optional)
name_pronunciation: ''

# Full name (for SEO)
first_name: Bingbing
last_name: Wen

# Pronouns (optional)
pronouns: ''

# Status emoji
status:
  icon: 🎓

# Is this the primary user of the site?
superuser: true

# Highlight the author in author lists? (true/false)
highlight_name: true

# Role/position/tagline
role: ''

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: University of Washington
    url: https://www.washington.edu/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:bingbw@uw.edu'
    label: E-mail Me
  - icon: brands/x
    url: https://twitter.com/bingbingwen1
  - icon: academicons/google-scholar
    url: https://scholar.google.com/citations?user=Jt0E6FEAAAAJ&hl=en

interests:
  - Developing data‑ and compute‑efficient methods that enable foundation models to learn, adapt, and allocate resources optimally across tasks and data sources—from training through inference

education:
  - area: PhD in Information Science (Natural Language Processing)
    institution: University of Washington
    icon: ""
    date_start: 2020-09-01
    date_end: ''
    summary: |
      Advisors: [Prof. Lucy Lu Wang](https://www.llwang.net/) and [Prof. Bill Howe](https://faculty.washington.edu/billhowe/). Also working closely with [Prof. Yulia Tsvetkov](https://homes.cs.washington.edu/~yuliats/).
  - area: MS in Computational Science & Engineering (Artificial Intelligence)
    institution: University of Hong Kong
    icon: ""
    date_start: 2016-09-01
    date_end: 2018-06-30
    summary: |
      Specialized in Artificial Intelligence and Computational Science.
  - area: BS in Control Science & Engineering (Robotics)
    institution: Zhejiang University
    icon: ""
    date_start: 2012-09-01
    date_end: 2016-06-30
    summary: |
      Focused on Robotics and Control Systems.

work:
  - position: Research Intern
    company_name: Apple
    company_url: 'https://www.apple.com/'
    icon: ''
    date_start: 2025-06-01
    date_end: 2025-09-30
    summary: |
      Research on MLLM Midtraining. Mentors: Manjot Bilkhu, Javier Movellan.
  - position: Research Intern
    company_name: OPPO Research
    company_url: 'https://www.oppo.com/'
    icon: ''
    date_start: 2023-06-01
    date_end: 2023-09-30
    summary: |
      Research on Storyboard LLM. Mentors: Ziwei Xuan, Guo-Jun Qi.
  - position: Research Intern
    company_name: Microsoft Cloud AI
    company_url: 'https://www.microsoft.com/'
    icon: ''
    date_start: 2022-06-01
    date_end: 2022-09-30
    summary: |
      Research on InfoVisDial. Mentors: Zhengyuan Yang, Jianfeng Wang, Zhe Gan, Lijuan Wang.
  - position: Applied Research Scientist
    company_name: Tencent
    company_url: 'https://www.tencent.com/'
    icon: ''
    date_start: 2018-05-01
    date_end: 2020-05-31
    summary: |
      Search/Ranking Model Training: Developed query-document semantic matching models and wide and deep CTR/CVR prediction models in QQ browser. Mentors: Tong Zhou, Bowei Long.

# Research Areas
research_areas:
  - name: Data Efficiency & Curation
    description: 'Optimizing data mixtures and fine-grained preference signals'
    percent: 95
    icon: chart-bar
  - name: Model Efficiency & Modular Architectures
    description: 'Mixture-of-LoRA experts and routing mechanisms'
    percent: 90
    icon: cpu-chip
  - name: Evaluation for Reliability
    description: 'Abstention and confidence-based evaluation frameworks'
    percent: 85
    icon: user-group
  - name: Reinforcement Learning
    description: 'Dynamic compute allocation and model collaboration'
    percent: 80
    icon: code-bracket

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Technical Skills
    items:
      - name: Programming Languages
        description: 'Python, C++/C, SQL, R, Matlab'
        percent: 95
        icon: code-bracket
      - name: Machine Learning Frameworks
        description: 'PyTorch, TensorFlow, Spark, Hive, OpenCV'
        percent: 90
        icon: cpu-chip
      - name: Data Processing
        description: 'SQL, Spark, Hive for large-scale data processing'
        percent: 85
        icon: chart-bar
      - name: Computer Vision
        description: 'OpenCV, image processing and analysis'
        percent: 80
        icon: camera

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: HKU Chinese Post Graduate Scholarship
    url: https://www.hku.hk/
    date: '2018-01-01'
    awarder: University of Hong Kong
    icon: hero/academic-cap
    summary: |
      Scholarship for postgraduate studies at University of Hong Kong.
  - title: Excellent Graduation Thesis
    url: https://www.zju.edu.cn/
    date: '2016-06-01'
    awarder: Zhejiang University
    icon: hero/document-text
    summary: |
      Recognized for outstanding graduation thesis at Zhejiang University.
  - title: Scholarship for Academic Excellence
    url: https://www.zju.edu.cn/
    date: '2015-09-01'
    awarder: Zhejiang University
    icon: hero/trophy
    summary: |
      Awarded for academic excellence during undergraduate studies.
  - title: University-level Outstanding Student Cadres
    url: https://www.zju.edu.cn/
    date: '2015-09-01'
    awarder: Zhejiang University
    icon: hero/user-group
    summary: |
      Recognized for outstanding leadership and student service.
---


I am a final-year Ph.D. candidate at the University of Washington, advised by [Prof. Bill Howe](https://faculty.washington.edu/billhowe/) and [Prof. Lucy Lu Wang](https://www.llwang.net/). I am a member of the UW RAISE Center and collaborate with [Prof. Yulia Tsvetkov](https://homes.cs.washington.edu/~yuliats/).

My research builds closed loops for data-model co-evolution: models expose capability gaps, those gaps drive new training data, learning produces stronger models, and rigorous evaluation verifies the gains.

* **Evolve Data:** Use model feedback to optimize data mixtures and generate tasks, datasets, and reasoning traces near the model's capability frontier. ([MixAtlas](https://openreview.net/forum?id=67r0Aq1XWL), [AutoScale](https://arxiv.org/abs/2407.20177), [STOP](https://arxiv.org/abs/2605.13165))
* **Evolve Models:** Train models and agents to learn from evolving experience through reinforcement learning, modular architectures, model merging, and efficient adaptation. ([Agentic Abstention](https://arxiv.org/abs/2606.28733), [Clarify or Answer](https://arxiv.org/abs/2601.16400), [MARVEL](https://openreview.net/forum?id=EQIBB1BA6Y), [Know Your Limits](https://aclanthology.org/2025.tacl-1.26/))
* **Verify Progress:** Test calibration, abstention, robustness, safety, and evaluation quality to distinguish real gains from overconfidence, shortcuts, and flawed measurement. ([Confidence calibration](https://arxiv.org/abs/2506.00582), [ScienceQA Abstention](https://arxiv.org/abs/2404.12452), [SusBench](https://arxiv.org/abs/2510.11035))
