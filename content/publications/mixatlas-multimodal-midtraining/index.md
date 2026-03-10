---
title: "MixAtlas: Uncertainty-aware Data Mixture Optimization for Multimodal LLM Midtraining"

authors:
  - admin
  - Sirajul Salekin
  - Feiyang Kang
  - Bill Howe
  - Lucy Lu Wang
  - Javier Movellan
  - Manjot Bilkhu

publication_types: ["1"]

publication: "ICLR 2026 Workshop DATA-FM"
publication_short: "ICLR 2026 DATA-FM"

abstract: "Principled domain reweighting can substantially improve sample efficiency and downstream generalization; however, data-mixture optimization for multimodal pretraining remains underexplored. We introduce MixAtlas, a principled framework for compute-efficient multimodal mixture optimization via systematic domain decomposition and smaller proxy models, factorizing training data along image concepts and task supervision axes."

summary: "Uncertainty-aware data mixture optimization for multimodal LLM midtraining via interpretable domain decomposition."

doi: ""

featured: true

tags:
  - Multimodal
  - Midtraining
  - Data Mixture
  - Uncertainty
  - MLLM

projects: []
slides: ""

url_pdf: "https://openreview.net/forum?id=67r0Aq1XWL"
url_code: ""
url_dataset: ""
url_poster: ""
url_project: ""
url_slides: ""
url_video: ""
url_source: ""

image:
  caption: ""
  focal_point: ""
  preview_only: false

date: 2026-03-02T00:00:00Z

header:
  image: ""
  caption: ""

categories: []
---

We introduce MixAtlas, a principled framework for compute-efficient multimodal mixture optimization via systematic domain decomposition and smaller proxy models. MixAtlas factorizes training data along two interpretable axes—image concepts and task supervision—enabling interpretable mixture control. Using small proxy models and a Gaussian-process surrogate, we explore the mixture space at ~1/100th the cost of full-scale training, yielding up to 3× faster convergence and consistent gains of 2–5% across diverse benchmarks.
