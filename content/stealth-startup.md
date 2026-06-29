# Stealth Startup: Software Engineer

July 2023 - Present

I joined a stealth startup as an early engineer. The product changed direction several times, so my work is best understood as a sequence of focused engineering bets rather than one stable product line.

Across those pivots, I worked on native desktop and mobile apps, capture workflows, AI agents, voice interaction, and local model runtimes. The common thread was turning rough AI capabilities into product surfaces that had state, permissions, latency budgets, and failure modes a user could live with.

## Core Areas

- **Product engineering:** Native and web-facing product surfaces across desktop, mobile, browser-adjacent workflows, and supporting tools.
- **Agent systems:** Session state, workspace access, context gathering, tool execution, browser context, and runtime reliability.
- **Spatial and interactive media:** Mobile room capture, floorplan workflows, 3D character rendering, animation, and audio-linked interaction.
- **Voice and multimodal interaction:** Speech input, turn detection, audio quality, speaker-aware flows, and realtime speech output.
- **Local model infrastructure:** Apple-silicon inference, model packaging, streaming runtimes, structured output, and local serving.

## Selected Work

The sections below are ordered chronologically by when the work started. I only include workstreams that lasted long enough to be meaningful; short spikes and one-off experiments are left out. Dates describe active project windows, not every later follow-up or maintenance change.

<a id="2023-10-01-roomplan-floorplan-spatial-capture"></a>

## October 2023 - Spatial Capture

I worked on whether an iPhone could turn a physical space into useful digital context. The work centered on Apple's RoomPlan and LiDAR APIs, mobile capture, scan review, persistence, and fallback behavior for devices with different hardware capabilities.

I worked on the product path around capture reliability: getting camera and room data into a usable flow, making scan output reviewable, improving floorplan presentation, handling device differences, and connecting captured spatial context back into the rest of the product.

The hard part was making spatial capture feel less like a demo. A scan needed to survive the full chain from device capture to preview, measurement, storage, retrieval, and reuse. The product also needed to degrade gracefully when the user's phone did not have the same sensor support.

The real-estate-style direction did not become the main product path. It did clarify a useful lesson: raw sensor data is not valuable by itself. The product has to decide what should be captured, how it will be reviewed, where it is stored, and how it becomes context later.

<a id="2023-11-01-ai-office-assistant"></a>

## November 2023 - December 2023 - AI Office Assistant

My first large phase was a mobile product for coordinating office-assistant work through an AI layer. The thesis was that routine requests like ordering food, coordinating errands, cleaning up office tasks, or handling small operational chores could be routed through an assistant that clarified intent, turned loose messages into task plans, and made the work trackable instead of leaving everything buried in text messages.

I worked across the iOS app and supporting product surfaces: chat threads, command input, task-plan display, streaming task-plan updates, generated API types, push notifications, unread state, route display, task completion, subtasks, assistant assignment, camera and upload flows, attachment handling, dictation input, and audio and video messages.

The hard product problem was visibility. In normal text-based coordination, it was difficult to tell whether the human assistant had accepted a task, was working on it, needed clarification, or had finished it. We tried to use AI to turn the conversation into explicit task state, but the product had to keep that structured state synchronized with chat, notifications, media, task plans, and completion status. Small mismatches showed up as broken previews, missing attachments, stale task plans, duplicate notification state, or chat views that did not match what the user expected.

The direction did not work because the AI intermediary often made the experience worse than directly messaging the human assistant. When a task was ambiguous, personal, or time-sensitive, users wanted low-friction communication rather than a layer that tried to infer and enforce structure. The work was still useful because it forced basic product discipline around capture, upload, task state, conversation state, and the limits of putting AI between people.

<a id="2024-01-03-electron-desktop-browser-workspace"></a>

## January 2024 - June 2024 - Teachable Browser

The next sustained phase moved the product toward a browser the assistant could observe and learn from. The early work was the desktop browser shell: sessions, tabs, bookmarks, history, screenshots, downloads, file and folder trees, local versus remote file modes, keyboard shortcuts, window behavior, webview focus, context menus, and test reliability.

The later work pushed that browser toward action capture and training data. I worked on browser sessions, assistant tabs, screenshot capture, DOM serialization, click-target annotation, dataset generation, fine-tuning jobs, and the reliability problems that appear when a product tries to turn user behavior inside a browser into reusable supervision.

The most valuable engineering work was building reliable boundaries between web content, browser state, desktop chrome, captured DOM structure, screenshots, and action traces. The assistant could only learn from browser use if the product could capture the right state, preserve context, and avoid training on broken or ambiguous examples.

This direction did not remain the final product shape, but it created many of the primitives that later agent work depended on: browser context, screenshots, DOM snapshots, action capture, local URL handling, and desktop interaction reliability.

<a id="2024-08-20-virtual-try-on"></a>

## August 2024 - October 2024 - Virtual Try-On

The following project moved into virtual try-on for fashion. The product thesis was that a user could upload or capture images, choose clothing, and see a realistic preview of how garments would look on their own body.

I worked across the model and data side: setting up try-on diffusion experiments, fixing trainer issues, preparing fashion and product-image data, wiring image preprocessing, adding person and body segmentation paths, experimenting with VAE and feature extraction, setting up cloud inference paths, improving training performance, handling checkpoints, adding image conditioning, and testing garment-conditioned model variants.

The engineering challenge was preserving the person while changing the clothing. Virtual try-on could look plausible in isolated examples, but small failures were highly visible: body shape could drift, pose could deform, clothing boundaries could look wrong, or the generated image could stop feeling like the same person. Those problems made data preparation, segmentation, garment conditioning, and evaluation much more important than just getting a model to produce an image.

The direction stayed research-heavy because the quality bar was unforgiving and large model labs were moving quickly in the same space. We could make pieces work, but not consistently enough to justify competing on model quality. It produced useful experience with training infrastructure, fashion datasets, body-aware preprocessing, image conditioning, and performance debugging.

<a id="2024-11-08-entertainment-companion-character-animation"></a>
<a id="2025-03-21-audio-driven-character-animation"></a>

## November 2024 - April 2025 - Educational Entertainment Companion

The next major exploratory direction was an AI entertainment companion, influenced by the rise of character-chat products. One product angle was child-friendly educational entertainment: instead of a static lesson or a passive video, a child could interact with an animated character that could talk, react, teach, and play.

I worked on the path from assistant behavior to visible character output: local conversation prototypes, character simulations, persistent chat, voice-triggered interaction, lip sync, face animation, audio-driven motion, native 3D rendering, browser-based 3D rendering, and small interactive scenes.

The technical challenge was embodied interaction. Lip sync was achievable, but believable full-body animation was much harder. Voice, text generation, audio playback, mouth movement, face animation, body motion, and 3D rendering all had different latency and quality constraints. A delay or awkward movement that would be acceptable in chat became obvious when a child was watching a character speak or react.

The direction stayed exploratory because making it good would likely require a proprietary animation pipeline: collecting motion data, building or licensing animation assets, training models, and investing in production quality beyond what the team could justify before proving the product. The useful pieces carried forward into later voice and realtime work: latency awareness, interruption behavior, audio-output timing, and the relationship between assistant state and visible presence.

<a id="2025-07-12-shift-macos-agent-claude-code"></a>
<a id="2025-07-14-workspace-folder-permissions-memory-compaction"></a>
<a id="2025-07-15-mcp-integration-layer"></a>
<a id="2025-07-16-app-browser-context-tracking"></a>
<a id="2025-08-19-browser-context-workspace-context"></a>

## May 2025 - October 2025 - Agent Workspace

After that, much of my work shifted toward a native workspace for coding agents. The product thesis was that developers would need a better way to manage multiple long-running agent sessions: foreground work, background agents, workspace permissions, context, tool execution, transcripts, and handoffs between related tasks.

I worked on session behavior, transcript reliability, workspace access, context capture, compaction behavior, provider fallback paths, permission boundaries, external tool integration, browser content capture, local development URL handling, file interaction reliability, task delegation, debug panels, process coordination, event history, tool result rendering, and interruption behavior.

The core systems problem was balancing autonomy with product reliability. The assistant needed enough workspace and context access to be useful, but the product still needed predictable permissions, recoverable tool behavior, stable session state, and clear user-facing boundaries.

The work moved the product toward explicit session ownership, clearer workspace permissions, narrower context capture, better process visibility, and better separation between structured tools, browser context, and visible user interaction. The direction became less compelling as first-party coding-agent apps matured: once official tools covered the core session and workspace experience, a separate management layer needed a much sharper advantage than we had.

<a id="2025-11-21-speaker-id-diarization-voiceprints"></a>
<a id="2025-12-22-tts-vibevoice-realtime-output"></a>

## November 2025 - December 2025 - Local Voice Stack

Voice became another sustained thread because a realtime assistant is only useful if the conversation mechanics work, and cloud speech APIs can become expensive at scale. The thesis was that more of the voice stack could run locally: speech detection, turn detection, transcription support, speaker awareness, and speech output.

I worked on voice activity detection, turn detection, trigger behavior, transcription finalization, audio quality investigation, device behavior, speaker-aware flows, local model experiments, realtime speech output, text chunking, pronunciation cleanup, echo-cancellation experiments, and audio-output performance.

The hard product problem was timing. The system needed to know when the user started speaking, when they stopped, whether they interrupted the assistant, whether the audio was good enough to act on, and how quickly the assistant could respond without hurting quality.

This work moved voice toward a clearer realtime pipeline with better buffering, device awareness, observability, identity signals, interruption handling, and speech-output performance. The product case was weak because large cloud providers could bundle higher-quality speech features into their platforms at prices users already accepted. Local voice reduced marginal cost and improved privacy, but that was not enough if the quality was worse and customers did not have a clear reason to adopt a separate platform.

<a id="2026-01-23-coreml-neural-engine-runtime"></a>
<a id="2026-04-28-mlx-local-llm-engine"></a>

## January 2026 - June 2026 - Local AI Runtime

The local AI work focused on making Apple hardware useful as an on-premise AI runtime. The product thesis was similar to a local model studio, but focused on macOS and the Apple ecosystem: a company could keep privacy-sensitive work on hardware it controlled, avoid some cloud costs, and expose local models to internal assistant workflows.

I worked on local inference experiments, Swift-facing model APIs, execution profiling, model packaging, graph-level optimization, model encryption, streaming behavior, structured output, batching behavior, local serving, LAN serving, OpenAI-compatible server behavior, and runtime integration with the agent stack.

The engineering question was not just whether a model could run locally. It was whether local inference could be fast, memory-aware, stream correctly, support tool-style outputs, survive concurrent workloads, and serve more than one user. I worked through cache behavior, continuous batching, speculative decoding, model loading, memory pressure, streaming cancellation, usage metrics, and the boundary between a desktop app and a local serving process.

The direction exposed two product problems. First, consumer Apple hardware could run useful models, but it could not serve a whole company the way a cloud endpoint could; concurrency quickly became the bottleneck. Second, if a company already trusted a major cloud provider with its data, the privacy argument became narrower, and low-cost hosted models weakened the pricing argument. The useful result was a clearer understanding of where local execution made sense: personal or small-team workloads, private edge processing, and latency-sensitive assistant features, rather than replacing cloud inference for an entire organization.
