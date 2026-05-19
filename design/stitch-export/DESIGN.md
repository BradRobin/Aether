---
name: Sovereign Authority
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcac6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#859490'
  outline-variant: '#3c4947'
  surface-tint: '#4fdbc8'
  primary: '#4fdbc8'
  on-primary: '#003731'
  primary-container: '#14b8a6'
  on-primary-container: '#00423b'
  inverse-primary: '#006b5f'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#ffb59e'
  on-tertiary: '#5e1800'
  tertiary-container: '#f38764'
  on-tertiary-container: '#6c2106'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#71f8e4'
  primary-fixed-dim: '#4fdbc8'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005048'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#7c2d11'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  density-compact: 8px
  density-comfortable: 16px
---

## Brand & Style

The design system is engineered for high-stakes environments where precision, authority, and density are paramount. It targets professional users in sectors such as cybersecurity, infrastructure management, and high-frequency data analysis. The aesthetic is rooted in **Corporate Minimalism** with a technical edge, evoking the feeling of a high-end command center.

The UI avoids decorative flourishes in favor of structural integrity. It communicates reliability through rigid alignment, a deep monochromatic base, and sharp, intentional accents. The emotional response is one of absolute control, calm under pressure, and institutional intelligence.

## Colors

The palette is anchored by a deep navy primary surface, providing a sophisticated, low-fatigue backdrop for prolonged professional use. 

- **Primary Surface (#0F172A):** Used for all major backgrounds and structural containers.
- **Accent/Success (#14B8A6):** A vibrant teal used for verified states, successful operations, and primary action highlights.
- **Warning (#F59E0B):** An amber hue reserved for human-in-the-loop gates, high-priority alerts, and cautionary states.
- **Borders:** Utilize a subtle variance of the navy (#1E293B) to maintain a flat, sharp architecture without excessive contrast.
- **Offline Indicator:** A persistent, desaturated state of the accent color or a dedicated neutral-gray toggle to signify connectivity status.

## Typography

This design system utilizes a high-density typographic scale. **Inter** is the workhorse for the interface, set with tight tracking and high contrast weights to ensure immediate readability in complex layouts. 

**JetBrains Mono** is utilized for all technical data, audit logs, and status labels. This provides a clear visual distinction between "instructional" text and "system-generated" data. Headlines should always favor bold weights and negative letter-spacing to reinforce the authoritative tone.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Sidebars and control panels use fixed widths (e.g., 280px) to ensure consistent information density, while the primary data stage is fluid.

- **Grid:** 12-column system for the main stage.
- **Density:** High-density by default. Elements are packed closely using a 4px base unit to maximize information visibility without scrolling.
- **Top-Left Anchor:** The brand identity and primary navigation entry point must be strictly locked to the top-left corner, serving as the visual "origin" for all user flows.
- **Offline Bar:** A dedicated 32px height status bar persists at the footer or integrated into the global header, shifting the layout slightly to ensure connectivity status never obscures content.

## Elevation & Depth

The design system rejects traditional shadows and soft gradients in favor of **Flat Tonal Layering**. 

Depth is communicated through color-stepping. Base surfaces use the primary navy; active or elevated containers use a slightly lighter shade or a 1px solid border (#1E293B). There is no "floating" in this system—every element is anchored to the grid. 

Interactive states (hover/active) should be represented by color shifts or border-color changes rather than Z-axis elevation. This reinforces a rugged, "industrial software" feel.

## Shapes

The shape language is severe and precise. A global radius of **4px (Soft)** is applied to all components (buttons, inputs, cards). This small radius prevents the UI from feeling aggressive while maintaining a sharp, professional silhouette. 

In data-heavy tables or log views, corners may be reduced to 0px to emphasize the grid-like structure of the information.

## Components

- **Buttons:** Primary buttons use the Teal accent with white or dark-navy text. They are rectangular with a 4px radius. No gradients.
- **Inputs:** Darker than the primary surface with a 1px solid border. Focus states use a Teal border glow (not a shadow).
- **Offline Indicator:** A persistent "Status: Offline" label in the global utility bar, turning Amber (#F59E0B) when disconnected and Teal (#14B8A6) when synced.
- **Audit Logs:** Monospaced text blocks with alternating row highlights (Zebra striping) for readability in high-density data.
- **Cards:** Flat containers with a subtle 1px border. No shadows. Header areas of cards should have a distinct, slightly darker background to separate metadata from content.
- **Human Gates:** Components requiring critical user confirmation use the Amber palette for borders and primary text to trigger psychological caution.