---
title: Bloom.io
category: Case Studies
description: AI-native fashion design tool.
platform: web
image: 
tags: [projects]
layout: article.njk
---

# Building (a niche) AI-Native Design Tool

[bloom.io](https://bloom3d.io/) is a niche, yet very chic, AI-native design tool for pattern makers and fashion designers. It is an ambitious project, and I had (still have) big dreams for it to be as edgy as the users we target. But we ran into some issues that are unexpected in a **traditional UX design project**, and unique to **MVP-building under tight timeline and budget**. I thought I should comb through and reflect on what I've learned so far as a product designer.

<ol>
    <li> We started out with CUIs in mind, but…
    <li> How to design intent-driven shortcuts?
    <li> A lot of AI startups have a solution first, then they go about and find the right users and problems. What does that mean for a traditional UX research process? 
</ol>
<br>

<img src="/assets/images/ysl.webp" alt="Screenshot from Yves Saint Laurent (2014)">
<img src="/assets/images/dwp.webp" alt="Screenshot from Devil Wears Prada (2006)">

#### In Yves Saint Laurent (2014), you see the designer doing a lot of talking.
#### In Devil Wears Prada (2006), you see the editor doing a lot of talking.

<br>

Fashion design can be very conversational, especially between pattern makers and designers, which makes CUI-based AI incorporation very exciting.

## Conversational Interface vs Graphical Interface {#conversational-interface}

<div class="quote">
    "Software's vapory materialization and its ghostly interfaces embody— conceptually, metaphorically, virtually—a way to navigate our increasingly complex world." <br>
    –Wendy Chun, <i>Programmed Visions: Software and Memory</i>
</div>
<br>

~~Despite all, an interface is designed to govern and hide.~~ A friendly and well-designed interface empowers and creates productive individuals. We set out to make a chat-based interface for fashion designers to quickly make production-ready patterns out of texts or images.
<br>

![Logos of AI applications]()

#### Claude, CLO, and Spline.ai are applications that makes use of co-creative or real-time artifacts interface designs. 

<br>

The nature of pattern making—starting with broad foundations and gradually layering in precision—calls for a blend of CUIs and GUIs, each serving distinct roles in the workflow.

<div class="quote">
    For detailed technicals, I would rather hire a pattern maker, as these details are difficult to communicate through text to an AI, however, hiring a pattern maker is costly at roughly $200/hour, so any time-saving solutions are valuable.
</div>
<br>

![A high level wireframe for bloom's interface]()
<br>

Inspired by pattern cutters' workstations, we designed the layout to follow a left-to-right flow—starting with a conversational interface for ideation and transitioning to graphical UIs for precision editing. <br>

<img src="/assets/images/lofi.png" alt="Bloom's low-fi prototype">

#### Bloom | Low-fi prototype

<br>

<div class="quote">
    "Show me three variations of a 1950s michigan jacket."
</div>
<br>

### Design Iterations {#design-iterations}

<img src="assets/images/browswerlofi.png">

#### Remember to put your design in a browser window. We realized how tabs can be overwhelming, despite being a nod to the analogue world.
<br>
<img src="assets/images/collab.png">

#### Explorations, thinking of ways to insert"fashion collabs"

<br>

Some of the things that got vetoed immediately: floating sidebar, tab (profile and project tab) positions and levels. There are simply more "sliders" than we had originally imagined that needs to be fit neatly into the sidebar. 

![A before and after of the sidebar design](assets/images/sidebar.png)
![A before and after of the tab system](assets/images/tabsystem.png)

<br>

Additional functionalities were added, including fullscreen mode and, after consulting fashion designers, size setup and pattern library were added to the ideation toolkit.

However, we were also challenged by this question...

### Challenge: Intent Clarity {#challenge-intent}

**How does someone with no context understand what this product does just by looking at the interface?**
It's a valid concern. For apps like Booking, Uber, or WhatsApp, the value is immediately legible. But many newer tools—like ChatGPT, Figma, Spline.ai, are.na, or v0—operate differently. They're less linear, less task-specific, and more open-ended. That ambiguity can be powerful, but it also risks alienating first-time users.
