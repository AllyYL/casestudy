---
title: Digital Temple
category: Case Studies
description: Design for education. An interactive archive for cultural heritage site.
platform: web, mobile
image: /assets/images/digitaltemple.webp
tags: [projects]
layout: project.njk
---

# Digital Temple

An interactive web archive designed for immersive learning

<br>

<div class="fullwidth-image-container">
  <img src="/assets/images/DTCover.webp" alt="Digital Temple cover image">
</div>

## Context

From architectural space to speculative UX—**this project explores how cultural research can drive interface design**. I led the design for a 360° virtual experience of the Kaihua Monastery, transforming historical space into an interactive environment through an immersive web experience.
<br><br>

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Organization</h3>
        <p><a href="https://camlab.fas.harvard.edu/project/digital-temple/">Harvard FAS CAMLab</a></p>
    </div>
    <div class="column-right">
        <h3>My Role</h3>
        <p>Product Designer, Project Manager, Research</p>
    </div>
</div>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Project Site</h3>
        <p><a href="https://www.digitaltemple.art">digitaltemple.art</a></p>
    </div>
    <div class="column-right">
        <h3>Year</h3>
        <p>Jun 2022-Feb 2024</p>
    </div>
</div>

<br>

<div class="layout-gallery">
    <div style="position: relative; padding: 56.25% 0 0 0;">
        <iframe src="https://player.vimeo.com/video/908942230?h=3c6c0a1f63&autoplay=1&muted=1&controls=1" poster="/assets/images/DTbanner.webp" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>


## Outcome

<ul style="list-style-position: decimal inside; padding-left: 1em; margin-bottom: 1rem; font-size: 1.2rem; line-height: 1.6; font-size: 1rem;">
  <li style="padding-left: 0.5em; font-weight: 400;">7,400+ visitors explored the site within the first 6 months, with <strong>3.4k recurring users</strong> actively engaging with the experience.</li>
  <!-- <li style="padding-left: 0.5em; font-weight: 400;">60% of users interacted with 3+ sections per session, suggesting <strong>strong exploratory engagement</strong> and intuitive navigation.</li> -->
  <li style="padding-left: 0.5em; font-weight: 400;">Sparked <strong>collaboration with 4+ universities and cultural institutions</strong>, including Tsinghua University and Hong Kong Palace Museum.</li>
</ul>

<br>


<div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Problem Scope</h2><br>
        <p><strong>How do you design an interface for a space that wasn't built to be "navigated" digitally?</strong></p><br>
        <p>This project asked how we might turn a sacred, ambiguous architectural site into a speculative, interactive experience—without flattening its meaning or imposing a fixed narrative.</p>
    </div>
    <br><br>
</div>
<br>

## From Academic Research to Design

Working closely with scholars, our task was to translate dense academic research into visually intuitive, interactive experiences. However, it is not without losses: **academic researches are layered and labyrinthian, yet graphics are usually very upfront**. How might we preserve the depth of scholarship without overwhelming the user?

Here I've selected three design approaches that addresses the above concerns:
<br><br>

<div class="layout-gallery">
    <div style="text-align: center; margin: auto; width: 80%">
    <img src="/assets/images/academictimeline.webp" alt="A flowchart showing research to design process">
</div>
<br><br>

<br>

Murals medieval China often feature intersecting perspectives that obscure visual clarity. To make them navigable, we lifted the mural into 3D:<br><br>
<img src="/assets/images/Academic1.png" alt="A before and after image showcasing how murals are visualized in pointcloud model">

<br><br>

We maximized the affordances of web to layer information:<br><br>
<img src="/assets/images/Academic2.png" alt="A before and after image showing how architectures are visualized">

<br><br>

We recreated lighting from the murals to add to the theatricality:<br><br>
<img src="/assets/images/Academic3.png" alt="A before and after image showing how light beams drawn on the murals are brought to life by 3D">
<br><br><br>

<br>


## Domain Research

We conducted **domain research**, **affinity mapping**, and **user interviews** to explore the intersection of digital archives and web-based interaction. We found that most archives either lack interactivity or oversimplify content—revealing a gap between engagement and depth.

<!-- <img style="text-align: center; width: 50%;" src="/assets/images/domain.webp" alt="A domain research map"> -->

<div class="quote-container">
  <p>I wanted to see where the murals are located, but that means exiting the page and opening a new one with an architecture model that has nothing in it.</p>
  <cite>— Aaron, 21, Boston</cite>
</div>

<br>

We also conducted two rounds of interviews. In the first round of user research, we interviewed 21 researcher-educators and undergraduate students. These insights validated a key pain point: **fragmented information hinders learning**.

<br>

<div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Mission Statement</h2><br>
        <p>Design an interactive web experience where architectural space shapes the design—both spatially and academically—and vice versa.</p>
    </div>
    <br><br>
</div>

<br>

## Prototyping & User Testing

Moving through rapid animated prototyping under mission-critical guidelines, after establishing usability testing metrics, we interviewed 10 participants from diverse academic and demographic backgrounds. We identified 35 usability issues from the usability tests and devised 18 actionable items.
<br>

![Horizontal and vertical layout options for the webpage](/assets/images/Frame405.png)

<br>
<!-- <div class="fullwidth-image-container">
  <img src="/assets/images/Frame405.png" alt="Horizontal and vertical layout options for the webpage.">
</div> -->

Here I expand on 2 most examplary ones:

<br>

### ① Assistive "Reading"

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Problem</h3>
        <p>The annotated murals assumed scholarly familiarity—participants didn’t know where to start or how to follow the narrative flow.</p>
    </div>
    <div class="column-right">
        <h3>Solution</h3>
        <p>Introduced clear entry points, visual motifs, and sectional markers to guide reading direction and structure the experience.</p>
    </div>
</div>

<div class="fullwidth-image-container">
  <img src="/assets/images/Section2.png" alt="Before and after userflow for annotated mural">
</div>

<br>

### ② Overlooked Navigation Issue

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Problem</h3>
        <p>Users couldn’t find their way between modules—navigation was buried or missing, causing confusion and dead ends.</p>
    </div>
    <div class="column-right">
        <h3>Solution</h3>
        <p>Restructured the layout and added persistent navigational cues, improving wayfinding and continuity across learning units.</p>
    </div>
</div>

<div class="fullwidth-image-container">
  <img src="/assets/images/Section1.png" alt="Before and after userflow for navigation">
</div>

<br>


## A Unified Spatial Interface

A key design achievement was translating Kaihua Monastery's complex visual program into an interactive 3D web experience that **doesn't fragment the user journey**. Instead of separating research, images, and data across disconnected pages (as many heritage platforms do), we **embedded historical content** directly within the reconstructed space.

<br>

<video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block;">
    <source src="/assets/images/TheaterMenu.mp4" type="video/mp4">
</video>

<br>

<video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block;">
    <source src="/assets/images/temporalstructure.mp4" type="video/mp4">
</video>

<br>

<video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block;">
    <source src="/assets/images/landscape.mp4" type="video/mp4">
</video>

<br>

<div class="highlight-text">
    An all-in-one interface combining 2D, 3D, and contextual narrative.
</div>

<!-- <br>

By layering research, spatial data, and multimedia content into a **single immersive interface**, users intuitively explore the site—moving fluidly between 2D murals, 3D architecture, and contextual narratives, all within their native environments. -->

<br>

<!-- ## Visual Identity

<img src="/assets/images/DTVI.webp" alt="An infograph showing branding guidelines">

<img src="/assets/images/gridlayout.webp" alt="An infograph showing grid layout guidelines"> -->

<br>

---

<br>

## Deliverables
### Website
<a href="https://www.digitaltemple.art">www.digitaltemple.art</a>

<a href="https://www.digitaltemple.art">
  <img src="/assets/images/website.webp" style="text-align: center" alt="A mockup of a MacBook displaying a webpage">
</a>

<br>

### Installation
<!-- <div class="layout-gallery">
    <img src="/assets/images/Installation1.webp" style="text-align: center" alt="Installation shot of Digital Temple at the exhibition Kaimu Theater, Shanghai, China, 2023-2024">
    <br>Installation shot of Digital Temple at the exhibition Kaimu Theater, Shanghai, China, 2023-2024.
</div> -->

<div class="layout-gallery">
    <img src="/assets/images/Installation2.webp" style="text-align: center" alt="Installation shot of Digital Temple at the exhibition space CAMLab Cave, Cambridge, 2023">
    Installation shot of Digital Temple at the exhibition space CAMLab Cave, Cambridge, 2023
</div>

<br>

### Virtual Reality
<div class="layout-gallery">
    <div style="position: relative; padding: 56.25% 0 0 0;">
        <iframe src="https://player.vimeo.com/video/967074183?autoplay=1&loop=1&muted=1&controls=1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

<br>

---

<br>

## Reflections

Aside from much rumination over content, I was also interested in exploring those 4 topics through this project:

**Visual design with and through creative technology** <br>
As a small media lab, we try to connect creative tech with academic research as well as public interest. Visual design is the bridge that connects them.

**Making complexities simple**<br>
Academic researches are layered and labyrinthian, yet we realize graphics are usually very upfront. How does the latter convey the former?

**Multidisciplinary collaboration, done remotely** <br>
How do you talk to, make request from, and send assets to developers, architects, scholars, visual artists, writers, and those who come in to play test?

**Managing is a maker's skill** <br>
I became a project manger in the second iteration of design, and it felt very different to be in a managing role.