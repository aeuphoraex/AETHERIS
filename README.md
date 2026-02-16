# DEV-X2000 :: AETHERIS DANCOS v3.4 - HIVE EDITION

> Autonomous Development & Artifact Generation Platform — a fully self-contained, browser-based AI development environment with P2P networking, blockchain-backed token economy, and real-time collaborative workspaces.

![Version](https://img.shields.io/badge/version-3.4-cyan)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Browser-blue)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Core Features](#core-features)
  - [AI Agent System](#ai-agent-system)
  - [Dual Mode Interface](#dual-mode-interface)
  - [HTML Artifact Generation](#html-artifact-generation)
  - [Auto-Cycle Development Pipeline](#auto-cycle-development-pipeline)
  - [Team Management (Employees)](#team-management-employees)
  - [Backend Emulation & Integration](#backend-emulation--integration)
  - [Version Control](#version-control)
- [Networking & P2P](#networking--p2p)
  - [Mesh Network (PeerJS)](#mesh-network-peerjs)
  - [Peer Discovery & Connection](#peer-discovery--connection)
  - [P2P2P Distributed Sharing](#p2p2p-distributed-sharing)
  - [Network Topology & Visualization](#network-topology--visualization)
  - [Remote Inference Sharing](#remote-inference-sharing)
  - [GPU Pool Management](#gpu-pool-management)
  - [Model Sharding](#model-sharding)
- [Collaboration](#collaboration)
  - [Shared Workspaces](#shared-workspaces)
  - [Task Queue](#task-queue)
  - [Consensus Voting](#consensus-voting)
  - [Real-Time Chat Sync](#real-time-chat-sync)
- [Economy & Governance](#economy--governance)
  - [Token Economy (AETH)](#token-economy-aeth)
  - [Blockchain Ledger](#blockchain-ledger)
  - [Staking & Mining](#staking--mining)
  - [Marketplace](#marketplace)
  - [DAO Governance](#dao-governance)
  - [Reputation System](#reputation-system)
  - [Achievement System](#achievement-system)
- [Social Features](#social-features)
  - [Community Discovery](#community-discovery)
  - [Events & Challenges](#events--challenges)
  - [Social Marketplace Listings](#social-marketplace-listings)
  - [Leaderboard & Badges](#leaderboard--badges)
- [AI & Inference](#ai--inference)
  - [WebLLM Integration (Local GPU)](#webllm-integration-local-gpu)
  - [GGUF Model Loader](#gguf-model-loader)
  - [Simulated LLM with Context Memory](#simulated-llm-with-context-memory)
  - [Configurable LLM Parameters](#configurable-llm-parameters)
- [Security & Enterprise](#security--enterprise)
  - [E2E Encryption (RSA-OAEP)](#e2e-encryption-rsa-oaep)
  - [Enterprise Team & RBAC](#enterprise-team--rbac)
  - [Audit Logging](#audit-logging)
  - [Compliance Dashboard](#compliance-dashboard)
- [Developer Tools](#developer-tools)
  - [Workflow Engine](#workflow-engine)
  - [Knowledge Graph](#knowledge-graph)
  - [Analytics Engine](#analytics-engine)
  - [Task Prioritizer](#task-prioritizer)
  - [Business Model Generator](#business-model-generator)
  - [Memory Optimizer](#memory-optimizer)
- [Plugin System](#plugin-system)
- [Theming & UI](#theming--ui)
- [Tech Stack](#tech-stack)

---

## Overview

DEV-X2000 (AETHERIS DANCOS v3.4) is a **single-file HTML application** that provides a complete AI-powered development environment directly in the browser. It combines autonomous AI agents, real-time P2P collaboration, a blockchain-backed token economy, and a full development lifecycle pipeline — all without any server or installation required.

## Getting Started

1. Open `DEVX2000.html` in a modern browser (Chrome/Edge recommended for WebGPU support)
2. Enter a **Mission Briefing** describing your project vision
3. Click **INITIALIZE AETHERIS** to boot the system
4. Optionally select and load a local LLM model via WebLLM, or skip to use the built-in simulated LLM
5. Start chatting or switch to **DEV mode** to generate artifacts

---

## Core Features

### AI Agent System

Three autonomous cognitive agents that process requests with full conversation memory:

| Agent | Role | Specialty |
|-------|------|-----------|
| **ARCHITECT** | System Designer | Requirements analysis, architecture, planning |
| **DEVELOPER** | Code Generator | HTML/CSS/JS generation, full-stack coding |
| **ANALYST** | Data Analyst | Reports, dashboards, visualizations |

- Agents maintain state tracking (`idle`, `thinking`, `processing`, `completing`, `error`)
- Per-agent performance metrics (tasks completed, success rate, avg response time)
- Real-time status indicators with progress bars

### Dual Mode Interface

- **CHAT Mode** — Conversational AI interface with context-aware responses and full chat history memory
- **DEV Mode** — Activates the live preview panel, development cycle pipeline, team management, backend services, and artifact generation

### HTML Artifact Generation

The LLM generates complete, self-contained HTML applications wrapped in `~~~HTML_ARTIFACT_START~~~` / `~~~HTML_ARTIFACT_END~~~` markers. Built-in artifact templates include:

- **Analytics Dashboards** — Stat cards, bar charts, live activity feeds
- **Authentication Forms** — Login/signup with tab toggle, form validation
- **Landing Pages** — Hero sections, feature grids, navigation, CTAs
- **Task Managers** — Kanban boards with drag-to-advance, add/delete
- **Generic Applications** — Smart fallback with customizable card UI

All artifacts render in a **live iframe preview** with download, deploy, and fork capabilities.

### Auto-Cycle Development Pipeline

A 4-phase automated development loop that continuously improves artifacts:

| Phase | Description |
|-------|-------------|
| **Planning** | Requirement analysis, artifact scaffolding, team assignment |
| **Development** | Progressive code enhancement (responsive breakpoints, animations, dark/light toggle, loading skeletons, toast notifications) |
| **Testing** | Automated test suites (unit, integration, E2E, lint) with pass/fail reporting |
| **Deployment** | Production deploy with version snapshots |

- Visual pipeline indicator with stage progression
- Detailed dev log with timestamps, diffs, and action buttons
- Agents and employees animate through phase-specific tasks
- Auto-creates version snapshots at each cycle

### Team Management (Employees)

Hire, manage, and fire AI team members with distinct roles and personalities:

- **Roles**: CEO, CTO, Lead Developer, Frontend Engineer, Backend Engineer, Designer, Product Manager, QA Engineer
- **Personalities**: Visionary, detail-oriented, creative, analytical, collaborative, etc.
- Per-employee skill sets, performance tracking, and task assignment
- Animated status indicators (`idle`, `thinking`, `developing`, `testing`, `deploying`)
- Multi-select for batch operations (fire selected)

### Backend Emulation & Integration

Auto-detects patterns in your artifact code and generates matching backend services:

- **Service Types**: REST API, Auth Service, Database, File Storage, Search Engine, WebSocket, Notifications
- **Smart Detection**: Scans artifact code for `login`, `fetch(`, `upload`, `websocket`, `search`, etc.
- **Endpoint Emulation**: Generates full CRUD endpoints with realistic JSON responses
- **Live Integration**: Injects a `fetch()` and `XMLHttpRequest` interceptor directly into the artifact's iframe, making all API calls return emulated responses instantly
- Per-service status tracking (`stopped`, `emulating`, `integrated`)

### Version Control

- Automatic version snapshots on every code change
- Branch creation and management
- Commit history with messages and parent tracking
- Artifact rollback to any previous version
- Fork artifacts to create independent copies

---

## Networking & P2P

### Mesh Network (PeerJS)

Real-time peer-to-peer networking powered by [PeerJS](https://peerjs.com/):

- Automatic peer ID generation and persistence via `localStorage`
- Incoming connection handling with auto-reconnect on failure
- Broadcast messaging to all connected peers
- Connection status indicators in the header (PEERS count, NET status)

### Peer Discovery & Connection

- **Direct Connect** — Enter a peer ID to establish a direct connection
- **Wildcard Scan** — Broadcast discovery requests to find available peers
- **Connect Modal** — Copy your peer ID, paste a remote peer ID, or scan the network
- Capabilities exchange on discovery (GPU, inference, workspace count)

### P2P2P Distributed Sharing

Multi-hop message propagation through the network:

- Configurable TTL (Time-To-Live) for propagation depth
- Seen-peer tracking to prevent infinite loops
- Resource sharing (workspaces, artifacts) across the network
- Resource query/response protocol with filter matching

### Network Topology & Visualization

- **3D Network Visualization** — Three.js-powered interactive graph showing self node (center) and connected peers orbiting with connection lines
- **Topology Classification**: Mesh (P2P), Star, Hybrid, Federated Learning
- **Network Features Toggle**: E2E Encryption, Data Compression, Response Caching, Load Balancing
- **Export Topology** — Download network state as JSON
- Real-time network stats (messages, bytes, latency, uptime)

### Remote Inference Sharing

- Share your GPU/CPU for remote inference processing
- Discover inference peers in the network
- **Routing Strategies**: Latency-Optimized, Cost-Optimized, Capability-Based, Geographic, Load-Balanced
- Inference request queue with status tracking
- Benchmark inference peers

### GPU Pool Management

- Scan local and network GPUs (WebGPU / WebGL2 detection)
- GPU allocation and release for compute tasks
- Pool-wide GPU inventory shared across peers

### Model Sharding

- Split large models across multiple peers
- Shard assignment to available peers
- Distributed inference combining results from all shards

---

## Collaboration

### Shared Workspaces

- Create named workspaces synced across peers
- Invite peers by ID
- Shared memory store for collaborative context
- Full workspace sync (memory, tasks, artifacts, chat, dev state)

### Task Queue

- Priority-based task queue (`critical`, `high`, `medium`, `low`)
- Dependency tracking between tasks
- Automatic task processing with estimated compute costs
- Task status lifecycle: `queued` → `processing` → `completed`
- Broadcasts task updates to all connected peers

### Consensus Voting

- Create votes with custom topics and options
- Deadline-based voting with active/closed states
- Real-time vote tallying across peers
- Results displayed with vote counts per option

### Real-Time Chat Sync

- Chat messages broadcast to all workspace members
- Peer messages displayed with author attribution
- Artifact updates synced across collaborators
- Dev phase changes propagated in real-time

---

## Economy & Governance

### Token Economy (AETH)

A full token economy backed by a local blockchain:

- **Earn tokens** for: creating artifacts, completing tasks, mining, sharing models, creating plugins, winning challenges, earning badges
- **Spend tokens** on: marketplace purchases, governance proposal stakes
- **Transfer tokens** to other peers by wallet address
- Persistent balance via `localStorage` with blockchain state

### Blockchain Ledger

- Genesis block creation with initial supply
- Block mining with hash calculation and nonce
- Transaction types: `transfer`, `reward`, `spend`, `stake`, `unstake`, `mining`
- Chain validation and peer sync
- Wallet management with address-based balance tracking
- Transaction history per wallet
- Consensus protocol for chain agreement across peers

### Staking & Mining

- **Manual Mining** — Click to mine random AETH rewards
- **Token Staking** — Lock tokens for passive staking rewards (1% rate)
- **Unstaking** — Withdraw staked tokens back to balance
- Real-time UI updates for balance, staked amount, and mining rate

### Marketplace

- **Categories**: Compute, Models, Data, Services
- Create listings with name, description, price, and category
- Purchase listings using AETH tokens
- Listings broadcast to network peers
- Rating system for sellers

### DAO Governance

- Create proposals with title, description, and category
- Required token stake to submit proposals
- Vote For / Against with stake-weighted voting
- Automatic deadline-based resolution (passed/rejected)
- Successful proposals refund double the stake
- All proposals synced across peers

### Reputation System

- Score range: 0–100
- Earn reputation through: mining, completing tasks, earning badges, receiving vouches
- Lose reputation through: penalties from peers
- Vouch for trusted peers (broadcasts to network)
- Reputation history tracking

### Achievement System

14 earnable badges with automatic condition checking:

| Badge | Condition |
|-------|-----------|
| First Contact | Send your first message |
| Creator | Create your first artifact |
| Team Builder | Hire 5 employees |
| Collaborator | Create a shared workspace |
| Miner | Earn 100 tokens |
| Task Master | Complete 10 tasks |
| Social Butterfly | Discover 5 peers |
| Plugin Developer | Create a plugin |
| Governor | Create a governance proposal |
| Encrypted | Enable E2E encryption |
| Model Loader | Load a GGUF model |
| Trusted | Reach 80 reputation |
| Automator | Complete a workflow |
| Backend Master | Create 3 backend services |

Each badge earns 15 AETH tokens and +3 reputation.

---

## Social Features

### Community Discovery

- Broadcast profile to network for peer discovery
- Peer profiles include: name, expertise, trust score, compute capability
- Real peers distinguished from generated data

### Events & Challenges

- **Events** — Create meetups with title, description, type, and scheduled time; peers can join
- **Challenges** — Start hackathons with deadlines, prize pools (AETH tokens), and submission tracking
- Edit challenges (creator only), submit entries, track participants

### Social Marketplace Listings

- Create categorized listings (Compute, Models, Services, Collaboration)
- Price in AETH tokens
- Listings broadcast to all peers
- Filter by category

### Leaderboard & Badges

- Global leaderboard ranked by reputation score
- Badge showcase for earned achievements
- Peer comparison with badge counts

---

## AI & Inference

### WebLLM Integration (Local GPU)

- Load and run LLMs locally via [@mlc-ai/web-llm](https://github.com/nicovallation/web-llm)
- Model selection from prebuilt model list
- WebGPU acceleration (with CPU fallback)
- Real-time model loading progress callback

### GGUF Model Loader

- Drag-and-drop `.gguf` file loading
- GGUF header parsing (magic number, version, tensor count, metadata KV count)
- Automatic quantization detection (Q2_K through F16)
- Parameter estimation from tensor count
- Simulated quantization and benchmarking
- Share model metadata with network peers

### Simulated LLM with Context Memory

When no local model is loaded, the built-in simulated LLM provides:

- Full conversation history tracking from DOM (configurable turn limit)
- Alternating user/assistant message pattern enforcement
- Context-aware responses referencing prior conversation
- Intent detection for artifact generation (dashboard, form, landing page, task manager)
- Dev mode vs Chat mode response routing
- Employee hiring simulation
- Backend service auto-detection and spawning

### Configurable LLM Parameters

Live-adjustable settings in the Agents panel:

- **Temperature**: 0.0 – 2.0 (default 0.7)
- **Max Tokens**: 64 – 4096 (default 1024)
- **Memory (Chat Turns)**: 0 – 50 (default 20)

---

## Security & Enterprise

### E2E Encryption (RSA-OAEP)

- RSA-OAEP 2048-bit key pair generation via Web Crypto API
- Public key exchange with peers on toggle
- Encrypt/decrypt messages between peers
- Key rotation with automatic redistribution
- Encryption status indicator

### Enterprise Team & RBAC

- Create teams with member management
- **Roles**: Admin (all), Moderator (manage users/content), Member (read/write), Viewer (read)
- Role-based permission checking
- Role management modal

### Audit Logging

- Comprehensive audit trail for all system actions
- Entries include: timestamp, user, role, action, details
- Export audit log as `.log` file
- Rolling buffer (max 5000 entries)

### Compliance Dashboard

- Real-time compliance status: encryption, audit logging, RBAC
- Total audit entries count
- Last audit timestamp

---

## Developer Tools

### Workflow Engine

- Create sequential workflows with named steps
- **Built-in Templates**: Research Pipeline, Dev Cycle, Content Creation, Bug Fix
- Execute workflows with step-by-step progression
- Schedule recurring workflow execution
- Step status tracking: `pending` → `running` → `completed`

### Knowledge Graph

- Add nodes with labels, types, and metadata
- Create edges with relationship labels
- Semantic auto-connect (shared words between node labels)
- BFS traversal to find connected nodes at configurable depth
- Search nodes by label or tags
- Graph summary statistics

### Analytics Engine

- Event tracking with rolling buffer (max 10,000 events)
- Agent response time recording and averaging
- Resource usage monitoring (memory, peers, agents)
- Productivity score calculation
- Predictive analytics (estimated tasks/hour, bottleneck detection)
- Dashboard summary

### Task Prioritizer

- Urgency keyword detection (`urgent`, `critical`, `asap`, `emergency`, etc.)
- Automatic priority classification: `low` → `medium` → `high` → `critical`
- Resource estimation (CPU units, memory, time, recommended peers)

### Business Model Generator

- **Templates**: Subscription SaaS, Marketplace, Freemium
- Generate models with revenue streams, pricing strategy, target market
- Revenue projections (monthly, yearly, growth rate)
- Database persistence

### Memory Optimizer

- Data compression simulation with ratio reporting
- Deduplication of entries
- Tiered storage (hot/warm/cold based on age)
- Prefetch related entries via search

---

## Plugin System

Extensible plugin architecture with built-in plugins:

| Plugin | Category | Description |
|--------|----------|-------------|
| **Syntax Highlighter** | UI | Real-time code syntax highlighting in chat (keywords, strings, comments, functions) |
| **Auto Summarizer** | Agent | Automatically summarize long conversations (50+ messages) |
| **Code Formatter** | Data | Double-click code blocks to auto-format |
| **Performance Monitor** | UI | Fixed overlay showing FPS, load time, memory usage |

- Create custom plugins with JavaScript code
- Enable/disable plugins with live injection/removal
- Plugin marketplace browsing
- Plugin reload capability
- Token rewards for creating plugins

---

## Theming & UI

### Themes

| Theme | Description |
|-------|-------------|
| **Holographic** (default) | Dark cyan/magenta cyberpunk aesthetic |
| **Glassmorphic** | Frosted glass with purple/pink gradient background |
| **Vaporwave** | Retro pink/blue/yellow neon palette |

### Light Mode

Toggle light mode overlay on any theme for a bright, high-contrast variant.

### UI Features

- Animated boot screen with ASCII logo and mission briefing input
- Glassmorphic panels with backdrop blur
- CSS custom properties for full theme customization
- Smooth animations (float, pulse, glow, gradient, slideIn, hologram)
- Custom scrollbar styling
- Notification toast system (info, success, warning, error)
- Modal dialog system
- Dropdown menus
- Responsive grid layout
- Status bar footer with peer ID, session uptime, and dev phase

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML/CSS/JS** | Single-file application, no build step |
| **PeerJS** | WebRTC-based P2P mesh networking |
| **Three.js** | 3D network topology visualization |
| **Web Crypto API** | RSA-OAEP encryption key generation |
| **IndexedDB** | Persistent storage (15 object stores) |
| **WebGPU / WebGL2** | GPU acceleration detection and compute |
| **@mlc-ai/web-llm** | Local browser-based LLM inference |
| **localStorage** | Peer ID, wallet address, and token state persistence |
| **CSS Variables** | Dynamic theming with 3 themes + light mode |
| **ES Modules** | Modern JavaScript module imports |

### Browser Compatibility

| Feature | Chrome/Edge | Firefox | Safari |
|---------|------------|---------|--------|
| WebGPU | Yes | No (WebGL2 fallback) | No |
| WebRTC (PeerJS) | Yes | Yes | Yes |
| Web Crypto | Yes | Yes | Yes |
| IndexedDB | Yes | Yes | Yes |
| Three.js | Yes | Yes | Yes |

---

## IndexedDB Object Stores

The application persists data across 15 IndexedDB stores:

`agents` | `employees` | `artifacts` | `versions` | `business` | `backend` | `progress` | `chat` | `plugins` | `tokens` | `governance` | `collab` | `social` | `enterprise` | `achievements`

---

## Architecture

```
DEVX2000.html (Single File)
├── CSS Themes & Animations
├── HTML Layout (Grid-based)
│   ├── Boot Screen (Mission Briefing)
│   ├── Header (Mode Toggle, Status, Theme Controls)
│   ├── Menu Bar (18 panel tabs)
│   ├── Preview Container (DEV mode iframe)
│   ├── Terminal / Chat Interface
│   ├── Sidebar Panels (18 panels)
│   └── Footer (Peer ID, Status)
└── JavaScript Modules
    ├── Core: DatabaseV2, TensorEngine, SelectiveMemory, MeshNetwork
    ├── AI: NeuralLLM, CognitiveAgent, AgentOrchestrator
    ├── Dev: ArtifactManager, VersionControl, EmployeeManager, GenerativeBackend, AutoCycleManager
    ├── Collab: CollaborativeWorkspace, TaskQueue, ConsensusManager
    ├── Economy: Blockchain, TokenEconomy, MarketplaceManager, GovernanceManager
    ├── Social: CommunityManager, SocialManager, ReputationSystem, AchievementSystem
    ├── Network: NetworkManager, NetworkOptimizer, GPUPoolManager, ModelShardingManager, RemoteInferenceManager
    ├── Security: EncryptionManager, EnterpriseManager
    ├── Tools: WorkflowEngine, KnowledgeGraph, AnalyticsEngine, TaskPrioritizer, BusinessModelGenerator, MemoryOptimizer
    ├── Plugins: PluginManager
    ├── AI Models: GGUFLoader
    ├── Compat: CompatibilityManager
    ├── UI: UIManager, NetworkVisualizer, NotificationManager
    └── Main: DANCOSTerminal (initialization & orchestration)
```

---

## License

MIT License

---

*Built with AETHERIS DANCOS v3.4 :: HIVE EDITION*
