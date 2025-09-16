---
title: Digital Temple
category: Case Studies
description: Design for education. An interactive archive for cultural heritage site.
platform: web, mobile
image: /assets/images/digitaltemple.webp
tags: [projects]
layout: projectDT.njk
---

# Digital Temple

An interactive classroom designed for immersive learning

<br>

<div class="fullwidth-image-container">
  <img src="/assets/images/DTCover.webp" alt="Digital Temple cover image">
</div>

## Overview

**Digital Temple makes a difficult subject easier to learn.** We turned Buddhist art and history from Kaihua Monastery into an interactive site with annotated images, a virtual gallery, 3D models, and simple games—showing how design can turn complex research into clear, enjoyable learning.

<br>

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Organization</h3>
        <p><a href="https://camlab.fas.harvard.edu/project/digital-temple/">Harvard FAS CAMLab</a></p>
    </div>
    <div class="column-right">
        <h3>My Role</h3>
        <p>Product Designer, Project Manager</p>
    </div>
</div>
<br>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Project Site</h3>
        <p>
            <a href="https://www.digitaltemple.art">digitaltemple.art</a>
            <a href="https://www.digitaltemple.art" 
               style="display: inline-block; margin-left: 0.7em; padding: 0.2em 0.8em; font-size: 0.9em; background: #fff; color: #000; border-radius: 4px; text-decoration: none; font-weight: 500; border: none; transition: background 0.2s;"
               onmouseover="this.style.background='#7e7e7e';"
               onmouseout="this.style.background='#fff';"
               target="_blank" rel="noopener">Visit Site</a>
        </p>
    </div>
    <div class="column-right">
        <h3>Year</h3>
        <p>Jun 2022-Feb 2024</p>
    </div>
</div>

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<div class="layout-threecolumn" style="display: flex; align-items: center;">
    <div class="column-left">
        <img src="/assets/images/context.png" alt="Vision illustration" style="max-width: 75%; border-radius: 6px;">
    </div>
    <div class="column-right">
        <p>Do you know <strong>85%</strong> of Buddhist temples worldwide are unprotected and not open to the public? 
        
        There is <strong>little to no digital data</strong> on Kaihua Monastery, and we can only learn about this remote heritage site from the research of few scholars.</p>
    </div>
</div>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

<!-- <div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Design Challenge</h2><br>
        <h3>How might we make medieval Buhddist art more accessible and engaging for a global audience through digital experiences?</h3>
    </div>
    <br><br>
</div>
<br> -->

## User Research 


<div class="layout-threecolumn-2">
    <div><h1>10+</div>
    <div><h1>25</div>
    <div><h1>140+</div>
</div>
<div class="layout-threecolumn-2">
    <div>Interviews</div>
    <div>Workshops</div>
    <div>Surveys</div>
</div>
<br><br>

We began with a simple goal: make knowledge more accessible. But soon we had to ask—**who are our users, and what do they want to know?** Through interviews, workshops with the Harvard Art History team, surveys, and journey mapping, we clarified user needs and learning goals.

<br><br>
<a href="/assets/images/UXresearch.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/UXresearch.png" alt="UX research diagram" style="width:100%; max-width:900px; display:block; margin:auto; border-radius: 0">
</a>
<br><br>

From this, two main user groups emerged: scholars and general audiences. **The challenge became: how might we preserve rigor for scholars without overwhelming broader audiences?**

<img src="/assets/images/convo.png" alt="A drawing of two users having dialog on their needs.">

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Problem & Opportunity

Narrowing our scope, we identified four key opportunity spaces. The subject matter itself is hard to access and understand. At the same time, academic design often struggles to engage the public and present research with visual clarity.
<br><br>
<a href="/assets/images/problems.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
  <img src="/assets/images/problems.png" alt="Problems and opportunities diagram" style="display: block; margin: 0 auto; max-width: 100%; cursor: zoom-in;">
</a>
<script>
function enlargeImage(link) {
  // If popup already exists, remove it
  const existing = document.getElementById('popup-image-modal');
  if (existing) {
    existing.remove();
    document.body.style.overflow = '';
    return;
  }
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'popup-image-modal';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.85)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;
  overlay.style.cursor = 'zoom-out';

  // Create enlarged image
  const img = document.createElement('img');
  img.src = link.href;
  img.alt = link.querySelector('img').alt;
  img.style.maxWidth = '90vw';
  img.style.maxHeight = '90vh';
  img.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
  img.style.borderRadius = '6px';

  overlay.appendChild(img);

  // Click overlay to close
  overlay.onclick = function() {
    overlay.remove();
    document.body.style.overflow = '';
  };

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}
</script>

<br><br>
<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Design Solutions

<br>

**I. Spatial and Informational All-in-One Interface**
<br>

Researchers no longer need to jump between platforms to access different data. We consolidated research, spatial information, and multimedia into one interface.

<br>
<video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block; border-radius: 10px; outline: 1px solid #818181;"><source src="/assets/images/landscape.mp4" type="video/mp4"></video>
<br><br>
<video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block; border-radius: 10px; outline: 1px solid #818181;"><source src="/assets/images/temporalstructure.mp4" type="video/mp4"></video>
<!-- 
<div class="layout-twocolumn">
    <div class="column-left">
        <video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block;"><source src="/assets/images/landscape.mp4" type="video/mp4"></video>
    </div>
    <div class="column-right">
        <video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block;"><source src="/assets/images/temporalstructure.mp4" type="video/mp4"></video>
    </div>
</div> -->
<br><br><br>

**II. The Best Way to Learn**
<br>

We broke down complex mural narratives into **smaller modules** and learning games. Testing showed students gained better understanding of the storyline and **performed better on image–text matching tests**.
<br><br>

<img src="/assets/images/Annotation.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px; border-radius: 10px; outline: 1px solid #818181;">
<br><br>
<img src="/assets/images/game.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px; border-radius: 10px; outline: 1px solid #818181;">

<!-- <div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/Annotation.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px;">
    </div>
    <div class="column-right">
        <img src="/assets/images/game.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px;">
    </div>
</div> -->

<br><br>

**III. Designed for Scholarship and Beyond**
<br>

We created a consolidated archive of high-resolution mural snippets, categorized and labeled so scholars and students can **easily cite specific scenes** and reference them in their research.

<br>

<img src="/assets/images/archive.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px; border-radius: 10px; outline: 1px solid #818181;">
<br><br><br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Informatioin Architecture 

<a href="/assets/images/InfoArchitecture.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/InfoArchitecture.png" alt="Information Architecture diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>

## Design System

<a href="/assets/images/design system.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/design system.png" alt="An infograph showing branding guidelines">
</a>

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<br>

## Usability Testing

To test the early models, we ran **5 rounds of interviews with 40 participants**. It led to some key design changes.
<br><br><br>

**I. Spatial & Narrative Clarity**
<br>
<a href="/assets/images/DTtest1.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/DTtest1.png" alt="Information Architecture diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>
<br>
<div class="layout-threecolumn">
    <div class="column-left">
        <p>We added UI guidance and guardrails to the annotation process—clarifying where flows begin, how they move, and how narrative threads connect.</p>
    </div>
    <div class="column-right">
     <a href="/assets/images/Annotation.gif" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/Annotation.gif" alt="Animated GIF showing annotation process" style="width: auto; display: block; margin: 0; border-radius: 10px; outline: 1px solid #818181;"></a>
    </div>
</div>
<br><br><br>

**II. Wayfinding in 3D**
<br>
<a href="/assets/images/DTtest4.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/DTtest4.png" alt="Information Architecture diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>
<br>
<div class="layout-threecolumn">
    <div class="column-left">
        <p>We improved accessibility by addressing slow-network issues (when 3D models fail to load), added wayfinding tools to help users orient themselves, and introduced more intuitive interactions.</p>
    </div>
    <div class="column-right">
     <a href="/assets/images/optical.gif" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/optical.gif" alt="Animated GIF showing annotation process" style="width: auto; display: block; margin: 0; border-radius: 10px; outline: 1px solid #818181;">
    </a>
    </div>
</div>
<br><br><br><br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<br>

<!-- ## Design Principles

<div class="layout-fourcolumn">
    <div><strong>Immersive Experience</strong></div>
    <div><strong>Data Visualization</strong></div>
    <div><strong>Sensory Engagement</strong></div>
    <div><strong>Gamified Learning</strong></div>
</div>
<div class="layout-fourcolumn">
    <div>Satisfaction</div>
    <div>Views</div>
    <div>Likes on Instagram</div>
    <div>New Collaborations</div>
</div>
<br><br><br>
<div style="overflow-x: auto; white-space: nowrap; padding-bottom: 1rem; margin-bottom: 2rem;">
    <img src="/assets/images/dt_thumb1.jpg" alt="Digital Temple Screenshot 1" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb2.jpg" alt="Digital Temple Screenshot 2" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb3.jpg" alt="Digital Temple Screenshot 3" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb4.jpg" alt="Digital Temple Screenshot 4" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb5.jpg" alt="Digital Temple Screenshot 5" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
</div>


<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<br> -->

## Museum Exhibitions & VR

Alongside the digital platform, we curated physical exhibitions at Harvard and museums across Asia, featuring art installations, immersive theater, and academic events. 
<br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/Installation2.webp" style="text-align: center" alt="Installation shot of Digital Temple at the exhibition space CAMLab Cave, Cambridge, 2023">
    </div>
    <div class="column-right">
        <img src="/assets/images/dt_installation.png" style="text-align: center" alt="Installation shot of Digital Temple at the exhibition space CAMLab Cave, Cambridge, 2023">
    </div>
</div>
<br><br>

We also created a complementary VR experience, allowing users to explore the temple in 360° on tablets or through VR headsets.

<div class="layout-gallery">
    <div style="position: relative; padding: 56.25% 0 0 0;">
        <iframe src="https://player.vimeo.com/video/967074183?autoplay=1&loop=1&muted=1&controls=1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<br>

## Impact

<div class="layout-threecolumn-2">
    <!-- <div><h1>+90%</h1></div> -->
    <div><h1>1.1 M</h1></div>
    <div><h1>1535</h1></div>
    <div><h1>+4</h1></div>
</div>
<div class="layout-threecolumn-2">
    <!-- <div>Satisfaction</div> -->
    <div>Views</div>
    <div>Likes on Instagram</div>
    <div>New Collaborations</div>
</div>
<br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/impact.png" alt="Vision illustration" style=" max-width: 90%; border-radius: 2px;">
    </div>
    <div class="column-right">
        <p>After launch, user interviews showed that <strong>90% of participants gained new knowledge</strong> about Buddhist art through Digital Temple.
        
        On Instagram, the project reached <strong>1M+ views</strong>, earned 1,500+ comments, and led to <strong>collaboration inquiries</strong> from 4+ research institutions and art organizations.
        
        Engagement continues to grow steadily.</p>
    </div>
</div>
<br>
<!-- <hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;"> -->

<!-- ## Reflections

Aside from much rumination over content, I was also interested in exploring those 4 topics through this project:

**Visual design with and through creative technology** <br>
As a small media lab, we try to connect creative tech with academic research as well as public interest. Visual design is the bridge that connects them.

**Making complexities simple**<br>
Academic researches are layered and labyrinthian, yet we realize graphics are usually very upfront. How does the latter convey the former?

**Multidisciplinary collaboration, done remotely** <br>
How do you talk to, make request from, and send assets to developers, architects, scholars, visual artists, writers, and those who come in to play test?

**Managing is a maker's skill** <br>
Alongside of designing, I also acted as the project manger. It felt very different to be in a managing role. -->