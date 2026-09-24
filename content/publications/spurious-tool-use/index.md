---
title: "Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act"
authors:
  - Yiwei Yang
  - Haoxiang Zhang
  - admin
  - Yao Lu
  - Yuchen Wu
  - Lei Zhang
  - Julian McAuley
  - Pan Lu
  - Bill Howe
publication_types: ["3"]
publication: "arXiv preprint"
publication_short: "arXiv"
abstract: "We investigate how reinforcement learning can teach LLM agents to choose tools based on irrelevant prompt cues. Controlled experiments with factual question answering and mathematical reasoning reveal that shortcut tool use depends on tool competence and the semantic relationship between cues and tools. We introduce a reward that uses an LLM judge to assess whether each tool call is necessary, reducing cue-driven tool use while preserving task performance."
summary: "Understanding and mitigating shortcut tool selection in RL-trained agents through rewards for tool necessity."
doi: ""
featured: false
tags:
  - Agentic Systems
  - Tool Use
  - Reinforcement Learning
  - Spurious Correlations
projects: []
links:
  - type: pdf
    url: "https://arxiv.org/abs/2609.16268"
date: 2026-09-14T00:00:00Z
---

We study when reinforcement learning causes agents to invoke tools in response to superficial cues rather than task requirements. Experiments with synthetic question-answering and mathematical reasoning tasks identify conditions that encourage these shortcuts. A reward based on judging the necessity of each tool call helps agents avoid unnecessary tool use while maintaining task performance.
