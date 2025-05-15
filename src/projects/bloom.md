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

### Early reflections from building Bloom's MVP

<br>

<div class="quote">
    "Software's vapory materialization and its ghostly interfaces embody—conceptually, metaphorically, virtually—a way to navigate our increasingly complex world." <br>
    – Wendy Chun, Programmed Visions: Software and Memory
</div>

<br>

[Bloom](https://bloom3d.io/) is a browser-based, AI-native design tool that enables fashion designers and pattern makers to generate garment patterns from text or image prompts–while retaining full editing control. Over the past two months, **I partnered up with another designer in a founding team of 6 to build the MVP**—navigating challenges unique to AI-first tools, rapid iteration cycles, and constrained resources.

<br>

## Three Problems

Unlike traditional UX projects, AI-native tools raise unexpected design questions:
<ol>
    <li> How do we balance conversational interfaces with the clarity of graphical UIs?
    <li> How to design AROUND AI by building flows that compensate the current limitations of AI?
    <li> What happens when the product leads with a solution, not a problem?
</ol>
<br>

This case study is a reflection on designing through ambiguity, prototyping at speed, and **shaping tools for workflows that are still emerging**.
<br><br><br>

## ☞ Balancing CUI and GUI
### Let Real-world Workflows Shape the Interface

We knew from the start that Bloom needed both a **conversational interface** (for fast ideation) and a **graphical interface** (for precise control). But we weren't sure how to integrate them in a way that felt intuitive and production-ready.
<br>

<img src="/assets/images/JacketProcess.png" alt="A series of photos capturing how a jacket is made and digitized">

####  We started out by observing how a jacket is made and digitized.
<br>

<span class="title">Discovery</span><br>
To find out, I conducted interviews across the fashion pipeline:
<ul>
    <li>An <strong> in-house designer at Burberry</strong> shared that their workflow is highly conversational and image-first. 
    <li>A <strong>factory technician</strong> walked me through 8 rounds of revisions, often communicated through a mix of annotated videos and text. Iteration is high-volume and deeply contextual.
    <li>An <strong>independent designer</strong> emphasized the need to get the big picture down first before bringing in a $200/hr pattern maker. Speed and rough outlines are more valuable early on than perfection.
</ul>
<br>

<div style="display: flex; gap: 10px; margin: 0;">
    <video width="48%" controls>
        <source src="/assets/images/PatternAdjustment1.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <video width="48%" controls>
        <source src="/assets/images/PatternAdjustment2.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

####  A factory technician walking me through how she communicates revisions.
<br>

These conversations revealed a common thread: **users start with intent, then shift into precision**. This insight directly shaped our decision to build a **conversational-to-control flow**—starting with prompts, then refining with sliders and editing tools.

We also uncovered hidden setup flows that professionals rarely mention explicitly, such as: selecting or customizing avatar size and body measurements, as well as using pattern libraries.

<span class="title">Action</span><br>
We tested multiple layout configurations, including:
<ul>
    <li>A single combined panel (which became visually dense)
    <li>Modal input flows (which broke interaction flow)
    <li>A final split-screen model: CUI for intent-setting, GUI for live previews, sliders, and material libraries.
</ul><br>
We also embedded common setup actions (e.g. avatar presets, measurement tools) upfront in the flow.<br><br>

<img alt="Wireframes of 3 layout congigurations." src="/assets/images/wireframe.png">

#### We brainstormed several layout configurations.

<br>
As interviews progressed, We continued to iterate through different interaction loops to better align with how a designer think.
<br><br>

<img alt="An interaction loop where CUI is seperated from GUI and an interaction loop where the two are interfacing." src="/assets/images/InteractionLoop.png">

<br>

<span class="title">Result</span><br>
The final layout mirrored how designers think: **ideation and refinement happen in parallel, but engage different modes**—natural language for intent, precision tools for control.
<br>

![Before and after image showing UI evolution.](/assets/images/refinedui.png)
<br>

<br><br><br>

## ☞ Intent-driven Scaffold

### Designing An Input Flow that Compensates for AI Limitations

![Illustration from Little Prince, a snake swallowing an elephant, forming the shape of a hat.](/assets/images/LittlePrince.jpg)
####  Designers who desperately try to understand how big the AI is by swallowing it.
<br>

At Bloom, users can start a design with either an image or a text prompt. But our AI model couldn't yet detect key garment attributes from an image (e.g., upper body vs lower body, menswear vs womenswear, cut types). That meant users needed to specify these features manually before entering the main design interface.

<span class="title">Task</span><br>
The pre-generation flow needed just the right amount of structure. Too much friction, and users drop off; too little, and the AI outputs fall apart. Our goal was to **design a lightweight, flexible input scaffold without overwhelming users—adaptable as the model matured**.

<span class="title">Action</span><br>
We began with a traditional static layout: a single page crammed with all input fields at once. It overwhelmed users and looked like a form.

<img alt="Screenshot of the initial pre-generation UI." src="/assets/images/InitialFlow.png">

#### The initial pre-generation screen.

<br>
Through testing and iteration, we landed on two more dynamic models:
<ul>
    <li>A pop-up multi-step flow for guided image or text-based generation
	<li>A <strong>chat-based entry flow</strong> that scaffolded AI inputs through natural dialogue
</ul>
<br>

<img alt="Screenshot of the pop-up modal input flow." src="/assets/images/popup.png">

#### A pop-up modal input flow that incentivizes compeletion.

<br>

![]()
#### A dynamic chat pre-generation flow that echoes the conversational nature of fashion design while naturally setting up parameters for the generation. 
<br>

These approaches scaffolded AI input without overloading the screen, and gave us flexibility to update or expand input options as the model evolved.
<br><br>

<span class="title">Result</span><br>
The final input flow **reduced user drop-off**, gave the AI better structured context, and created a sense of **creative momentum** early on. Instead of feeling like a form, it felt like the start of a co-creation process.

<span class="title">Takeaway</span><br>
Designing with AI often means designing around AI. Guardrails aren't limits—they're opportunities to scaffold creativity and build trust in the system.
<br><br><br>

## ☞ UX Research at an AI Startup

### What happens when the product leads–and you have to find the problem?

Bloom began with a clear technical capability: generate garment patterns from prompts. **But we didn't yet know who this tool was really for—or what problem it solved best**.

<img alt="Screenshot of the index we collected of the generated results" src="/assets/images/indexing.png">

#### Part of our research targets the LLM itself. Indexing the generated results helped us getting to know "the elephant" better.

<br>

<span class="title">Task</span><br>
Initial interviews asked users what they wanted. The answers were vague, and often contradicted their actual workflows. We realized that in AI-first products, **users often can't articulate what they're missing, because the capability itself is new**. I needed to shift from feature testing to **problem discovery**.

<span class="title">Action</span><br>
I shifted to a **Jobs-to-be-Done framework**, focusing on:
<ul>
    <li>What users were trying to accomplish
    <li>What was slowing them down
    <li>What workarounds they used to fill the gaps
    <li>What costs them most money
</ul><br>
Instead of asking "How would you like to use this?" I asked "Walk me through the last time you had to create a pattern fast."
<br><br>

<img alt="Screenshot of transcripts from interviews we conducted." src="/assets/images/interviewtranscripts.png">

####  Partial screenshot of transcripts from interviews we conducted.
<br>

I also led a segmentation process to identify our **Ideal Customer Profile (ICP)**:
<ul>
    <li>Freelance pattern makers in small-to-mid-sized studios
    <li>Designers managing their own sampling without access to full tech packs
    <li>Solo practitioners and early-stage brands needing fast iteration with limited budget for technical specialists
</ul>
<br>

<span class="title">Result</span><br>
This reframed Bloom as a time-saving assistant for early-stage production—not just an AI generator. It **clarified our users, sharpened our priorities**, and aligned features with real pain points.

<span class="title">Takeaway</span><br>
For many AI startups, research isn't about validating features—it's about reverse-engineering the problem the product might already be solving.
<br><br><br>

## Future Considerations

Looking ahead, there's potential to extend the tool's utility with features that better support iterative and collaborative workflows, including:

<ul>
    <li><strong>Version control</strong> for tracking design iterations and reverting changes
	<li>A smart style system that applies <strong>consistent design and pattern logic across garments</strong> within the same collection
	<li><strong>Real-time collaboration</strong> to support teams working across roles (e.g., designers + pattern makers)
</ul>
<br>
These additions would move Bloom closer to being a full creative workspace—not just a generation tool.