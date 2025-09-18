---
title: Weave
category: Case Studies
description: Web3 ecommerce platform for phygital fashion.
platform: iOS
image: /assets/images/WeaveCover.png
tags: [projects]
layout: project.njk
---


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


# Weave

A web3 e-commerce app, shop phygital fashion in one click
<br><br>
<div class="fullwidth-image-container">
  <img src="/assets/images/WeaveCover.png" alt="Weave app interface showing NFT fashion marketplace">
</div>

<br>

## Overview

WEAVE is a Web3 e-commerce app where users can purchase physical garments and their NFT counterparts together. As product designer, I built a **unified UI system**, designed the **social sharing** flow, and integrated **blockchain-based sustainability tracking** into the user journey and created data visualizations to surface environmental impact.

<br>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Client</h3>
        <p>WEAVE</p>
    </div>
    <div class="column-right">
        <h3>My Role</h3>
        <p>Product Designer</p>
    </div>
</div>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Platform</h3>
        <p>iOS</p>
    </div>
    <div class="column-right">
        <h3>Year</h3>
        <p>2022-2023</p>
    </div>
</div>

<br>

<!-- <div class="fullwidth-image-container">
  <img src="/assets/images/weave2.webp" alt="Weave app from physical scanning to storytelling process illustration">
</div> -->

<hr style="border: none; border-top: 0.7px solid #000; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

<div class="layout-threecolumn" style="display: flex; align-items: center;">
    <div class="column-left">
        <img src="/assets/images/weave11.png" alt="Vision illustration" style=" max-width: 75%; border-radius: 6px;">
    </div>
    <div class="column-right">
        <p>Although 65% of consumers say they want to buy from sustainable brands, <strong>only 26% follow through, leaving a vast intention–action gap</strong>.
        <br><br>In fashion, this gap hides a staggering 92 million tons of annual textile waste, damage most shoppers never see.</p>
    </div>
</div>
<br><br>

<div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Design Challenge</h2><br>
        <p>Design a way to weave sustainability data seamlessly into the shopping flow without slowing users down.
    </div>
    <br><br>
</div>
<br>

## Competitive Analysis

Blockchain & E-commerce
<br>

<img src="/assets/images/Competitivescreens.png" alt="screenshots from competing companies in the crypto and e-commerce industries">
<br><br>
An audit of supply chain tracking, web3, and e-commerce apps revealed an opportunity to transform raw supply chain data into a social-driven shopping experience, WEAVE's core differentiator.
<br><br>


<hr style="border: none; border-top: 0.7px solid #000; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## UX Research

<div class="layout-threecolumn-2">
    <div><h1>14</div>
    <div><h1>12</div>
    <div><h1>100+</div>
</div>
<div class="layout-threecolumn-2">
    <div>User Interviews</div>
    <div>Brand Engagements</div>
    <div>Survey Forms</div>
</div>
<br>

What would convince users to switch platforms? **What builds credibility, curiosity, and conversion in a crowded, trend-sensitive market?** To answer these questions, we conducted in-person interviews, hosted brand engagement sessions, ran surveys, and mapped user journeys.

<div class="quote-container">
  <p>Numbers won't win me over. Zara has done that too many times with their carbon-offset. Give me something I should care about.</p>
  <cite>— Anonymous shopper</cite>
</div>

<div class="quote-container">
  <p>I've yet to find a place where I can shop both physical AND digital fashion at the same time.</p>
  <cite>— Hannah, Fashion designer</cite>
</div>

<br>

Our research surfaced a few consistent themes. Users are skeptical of vague sustainability claims, and social media and brand signaling played a big role in conversion. We then zeroed in on our **User Persona**.

<br>

<a href="/assets/images/WeavePersona3.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/WeavePersona3.png" alt="UX research diagram" style="width:100%; max-width:900px; display:block; margin:auto; border-radius: 0">
</a>

<br><br>

<div class="dark-blue-section">
    <br><br>
    <div class="layout-twocolumn">
        <h2>Design Objectives</h2>
    </div>
    <br>
    <div class="layout-twocolumn">
        <div class="column-left">
            <h3>Integration</h3>
            <img src="/assets/images/integration.webp">
        </div>
        <div class="column-right">
            <br>
            <p><strong>Connect physical products and NFTs in one flow</strong>—no tab-switching, just tap-and-shop.</p>
        </div>
    </div>
    <br>
    <div class="layout-twocolumn">
        <div class="column-left">
            <h3>Simplification</h3>
            <img src="/assets/images/simplification.webp">
        </div>
        <div class="column-right">
        <br>
            <p>Synthesize and layer information—hide jargons, <strong>easier check-out.</strong>.</p>
        </div>
    </div>
    <br>
    <div class="layout-twocolumn">
        <div class="column-left">
            <h3>Participation</h3>
            <img src="/assets/images/participation.webp">
        </div>
        <div class="column-right">
        <br>
            <p>Let users explore the supply chain as a <strong>instagram-worthy story</strong>—flippable, stackable, shareable.</p>
        </div>
    </div>
    <br><br>
</div>

<br>


## Wireframe: Tackling Phygital Integration

The core flow guides new users to register, browse, and buy physical garment AND digital NFTs in one seamless experience.

![WEAVE's primary user flow](/assets/images/WeavePrimaryFlow.webp)

<br>

A secondary flow exists when a user already owns a physical garment and wants to access its NFT twin through the app.

<br>

![WEAVE's physical garment led user flow](/assets/images/weavephysicalflow.jpeg)

<br>
<hr style="border: none; border-top: 0.7px solid #000; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## User Testing

Testing and discussions of early models led to some key design changes.

<br>

**I. Information for Depth, Not Overload**

The full supply chain breakdown appeared upfront, overwhelming users who primarily came to shop. I created a dynamic card-stacking UI that shows a clear, high-level summary before checkout.
<br>

<a href="/assets/images/usertest1.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/usertest1.png" alt="UX research diagram" style="width:100%; max-width:900px; display:block; margin:auto; border-radius: 0">
</a>

<br><br><br>

**II. Integrated Checkout**

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Problem</h3>
        <p>Wallet setup was mandatory before checkout, leading to drop-offs.</p>
    </div>
    <div class="column-right">
        <h3>Solution</h3>
        <p>Introduced <strong>guest checkout</strong> with auto-wallet creation by email. <strong>Wallet setup is deferred to post-purchase</strong>.</p>
    </div>
</div>

<a href="/assets/images/usertest3.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/usertest3.png" alt="UX research diagram" style="width:100%; max-width:900px; display:block; margin:auto; border-radius: 0">
</a>

<br><br>

<hr style="border: none; border-top: 0.7px solid #000; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Kicking it up to high fidelity

I started shaping WEAVE's visual design by gathering references, research, and inspiration to define its brand identity.

<div class="fullwidth-image-container">
  <img src="/assets/images/hifidelity.png" alt="Weave app interface showing NFT fashion marketplace">
</div>

Each step in the garment history and each stakeholder in the supplychain is brokendown into digestable, sharable pieces. Meeting the needs of social-native users.

<br>

<div class="fullwidth-image-container">
  <img src="/assets/images/CardSocial.png" alt="Prototype of WEAVE highlighting the ease of sharing garment history on socials">
</div>

<div class="highlight-text">
    An one-stop integrated <br>checkout flow
</div>

<div style="text-align: center; width: 60%; margin-left: auto; margin-right: auto;">
  <img src="/assets/images/OneStopShop.png" alt="3D View + integrated checkout system (more on this later)." style="max-width: 100%; height: auto;">
</div>

<div class="highlight-text">
   Dynamic UI<br>Stack, Scroll, Expand
   
   <p><br>Key details upfront, deeper data on flip. Users explore at their own pace.</p>
</div>

<video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; clip-path: inset(0 0 5px 0);">
  <source src="/assets/images/cardflip.mov" type="video/mp4">
</video>

<div class="highlight-text">
   <p><br>Dynamic card stack to decluster and store information.</p>
</div>

<div style="text-align: center; width: 60%; margin-left: auto; margin-right: auto;">

  ![Card stacking motion).](/assets/images/stack.gif)
</div>

<div class="highlight-text">
   <p><br>A concept demo to showcase the physical to digital "stacking" behind the choice of card deck UI.</p>
</div>

<div style="text-align: center;">

![NFC tag scan to access product.](/assets/images/conceptnft.gif)

</div>
<br>

<!-- ## Style Guide
Logo, color, typography
![Style guide for WEAVE](/assets/images/weavebrand.webp)

<br> -->

<hr style="border: none; border-top: 0.7px solid #000; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Launch & Outcomes

<br>

<div class="layout-threecolumn-2">
    <div><h1>5.8%</div>
    <div><h1>20%+</div>
    <div><h1>27%</div>
</div>
<div class="layout-threecolumn-2">
    <div>Conversion Rate</div>
    <div>User-Generated Content</div>
    <div>DAU/MAU</div>
</div>

<br><br>

WEAVE launched a private TestFlight beta with ~150 targeted users. The mix of interactive product storytelling and **simplified checkout** drove faster purchase decisions; **22% of users shared a product story**, **comment, or review within 30 days**, showing strong early engagement.

While the closed beta achieved above-average engagement and conversion, the public launch was paused due to funding constraints. The design insights continue to inform related projects and future opportunities.

<br><br>