---
title: Bloom.io
category: Case Studies
description: AI-native fashion design tool.
platform: web
image: 
tags: [projects]
layout: article.njk
---

# Designing an AI-Native Design Tool

Early reflections from building Bloom3d.io's MVP
<br><br>

<div class="quote">
    "Software's vapory materialization and its ghostly interfaces embody—conceptually, metaphorically, virtually—a way to navigate our increasingly complex world." <br><br>
    – Wendy Chun, Programmed Visions: Software and Memory
</div>

<br><br>

[bloom](https://bloom3d.io/) is a browser-based, AI-native design tool that enables fashion designers and pattern makers to generate garment patterns from text or image prompts–while retaining full editing control. Over the past two months, I've partnered up with another designer to build the MVP—navigating challenges unique to AI-first tools, rapid iteration cycles, and constrained resources.

Unlike traditional UX projects, AI-native tools raise unexpected design questions:
<ol>
    <li> How do we balance conversational interfaces with the clarity of graphical UI?
    <li> Can we design intent-driven shortcuts that guide users without limiting exploration?
    <li> What happens to UX when the product leads with a solution, not a problem?
</ol>
<br>

This case study is a reflection on designing through ambiguity, prototyping at speed, and shaping tools for workflows that are still emerging.
<br><br>

## Balancing CUI and GUI

Designing two modes of interaction that work in tandem

**Situation**
<br>
We knew from the start that Bloom needed both a conversational interface (for fast ideation) and a graphical interface (for precise control). But we weren't sure how to structure them in a way that felt intuitive and production-ready for fashion professionals.

<br>

**Task**
<br>
To find out, I conducted interviews across the fashion pipeline:
<ul>
    <li>A Burberry designer emphasized the need for visual trust when working with AI
    <li>A factory technician walked me through 8 rounds of revisions using text and annotated video
    <li>An independent designer told me, "These details are hard to describe in text… but hiring a pattern maker costs $200/hr. I need something faster."
</ul>

These conversations surfaced hidden setup rituals—like configuring avatar sizes, body measurements, and pulling from personal pattern libraries—that weren't obvious at first glance.

**Action**
<br>
We tested multiple layout configurations, including:
A single combined panel (which became visually dense)
Modal input flows (which broke interaction flow)
A final split-screen model: CUI on the left for intent-setting, GUI on the right for live previews, sliders, and asset libraries.

We also embedded common setup actions (e.g. avatar presets, measurement tools) upfront in the flow—accessible from both sides.

**Result**
<br>
The final layout mirrored how professionals actually work: expressing ideas in natural language, then refining with precision tools. 
<br><br>

## Intent-driven Scaffold
Designing An Input Flow that Compensates for AI Limitations

####  Designers who desperately try to understand how big the AI is by swallowing it.

**Situation**
<br>
At Bloom.io, users can start a design with either an image or a text prompt. But our AI model couldn't yet detect key garment attributes from an image (e.g., upper body vs lower body, sleeve style, neckline). That meant users needed to specify these features manually before entering the main design interface.

**Task**
<br>
This "pre-generation" flow risked becoming tedious. Too much friction would turn people away; too little guidance would confuse the AI. The challenge was to design a lightweight, intuitive selection flow that felt like a creative assistant, not a form.

**Action**
<br>
I led several iterations of the entry flow, testing how to scaffold the process without overwhelming users. Some key shifts included:
<ul>
    <li>From blank uploads → to image + checklist pairing: Users uploaded a reference image and selected key categories like garment type (e.g., "upper body," "dress") and fabric intention
    <li>From dropdowns → to visual selectors: We swapped text inputs for illustrated options (e.g., sleeve types, pant shapes) to speed up decision-making
    <li>From single-step → to progressive disclosure: We broke the flow into short, guided steps, each building context for the AI model
</ul>
<br>
We also added "smart defaults" based on upload type and previous selections, helping users move faster without feeling lost.


**Result**
<br>
The final input flow reduced user drop-off, gave the AI better structured context, and created a sense of creative momentum early on. Instead of feeling like a form, it felt like the start of a co-creation process.

Takeaway: Designing with AI often means designing around AI. Guardrails aren't limits—they're opportunities to scaffold creativity and build trust in the system.
<br><br>

## UX Research at an AI Startup

What happens when the product leads–and you have to find the problem?

**Situation**
<br>
Bloom.io began with a clear technical capability: generate garment patterns from prompts. But we didn't yet know who this tool was really for—or what problem it solved best.

**Task**
<br>
Initial interviews asked users what they wanted. The answers were vague, and often contradicted their actual workflows. We realized that in AI-first products, users often can't articulate what they're missing, because the capability itself is new.

**Action**
<br>
I shifted to a Jobs-to-be-Done framework, focusing on:
<ul>
    <li>What users were trying to accomplish
    <li>What was slowing them down
    <li>What workarounds they used to fill the gaps
</ul>
Instead of asking "Would you use this?" I asked "Tell me about the last time you had to create a pattern quickly. What did you do?"

I also led a segmentation process to identify our Ideal Customer Profile (ICP):
<ul>
    <li>Pattern makers in small-to-mid-sized studios
    <li>Designers managing their own sampling without access to full tech packs
    <li>Solo practitioners and early-stage brands needing fast iteration without $200/hr technical specialists
</ul>
<br>

**Result**
<br>
This shift helped us avoid building for the wrong audience and clarified our product direction. We started framing Bloom.io not just as an AI generator, but as a time-saving assistant that supports real-world constraints in early-stage production.

Takeaway: In AI-native UX, research isn't about validating features—it's about reverse-engineering the problem the product might already be solving.
<br><br>

## Future Considerations