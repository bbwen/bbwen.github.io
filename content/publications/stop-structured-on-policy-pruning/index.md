---
title: "STOP: Structured On-Policy Pruning of Long-Form Reasoning in Low-Data Regimes"
authors:
  - Chenjun Xu
  - Zhennan Zhou
  - Zhan Su
  - Bill Howe
  - Lucy Lu Wang
  - admin
publication_types: ["1"]
publication: "EMNLP 2026"
publication_short: "EMNLP 2026"
abstract: "We introduce STOP, an on-policy approach to reducing redundant reasoning when fine-tuning with limited data. STOP organizes a model's own reasoning traces into structured nodes and prunes each trace after its earliest correct answering conclusion. Across two DeepSeek-R1 distilled models and three mathematical reasoning benchmarks, STOP reduces generated tokens by 19.4–42.4% while largely preserving accuracy."
summary: "Structured pruning of self-distilled reasoning traces reduces token use while largely preserving accuracy in low-data fine-tuning."
doi: ""
featured: false
tags:
  - Large Language Models
  - Efficient Reasoning
  - Chain-of-Thought
  - Self-Distillation
projects: []
slides: ""
url_pdf: "https://arxiv.org/abs/2605.13165"
url_code: "https://github.com/chenjux/ECN-STOP"
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
date: 2026-09-01T00:00:00Z
header:
  image: ""
  caption: ""
categories: []
---

STOP uses a model's own reasoning traces to create more efficient fine-tuning examples. It segments and annotates each trace, builds a reasoning tree, and retains the prefix ending at the earliest correct answering conclusion. This removes unnecessary reasoning after a solution while preserving a coherent path to the answer.
