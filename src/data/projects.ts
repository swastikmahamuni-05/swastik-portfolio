import { ProjectData } from "./types";
export type { ProjectData, FactualStatus, FactualStatus as ProjectStatus } from "./types";

export const projectsData: ProjectData[] = [
  {
    id: "orca",
    slug: "orca",
    index: "01",
    title: "ORCA",
    subtitle: "Marine AI Decision Support Platform",
    domain: "Marine Systems & Multi-Agent AI",
    category: "AI",
    summary:
      "A designed decision-support platform integrating maritime information streams—satellite weather, oceanographic conditions, navigational hazard zones, and local market prices—into a clear decision interface for maritime operators.",
    status: "Designed",
    accolade: "Smart India Hackathon (SIH) Finalist Formulation",
    image: "/images/projects/orca_card.png",
    technologies: [
      {
        category: "Intelligence & Backend",
        items: ["Python", "FastAPI", "Multi-Agent Coordination", "AsyncIO"],
      },
      {
        category: "Geospatial & Marine",
        items: ["GeoPandas", "Shapely", "Leaflet / GIS", "GeoJSON"],
      },
      {
        category: "Interface & State",
        items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        category: "Data Ingestion",
        items: ["Oceanographic APIs", "Weather Feeds", "Automated Pipelines"],
      },
    ],
    keyTechList: ["Python", "Multi-Agent Architecture", "GIS", "React", "FastAPI"],
    problem: {
      title: "Maritime Information Fragmentation & Critical Uncertainty",
      description:
        "Marine operators navigate high-consequence environments where critical data—surface currents, cyclonic wind vectors, bathymetric depths, and fluctuating catch market values—resides in isolated, incompatible dashboards.",
      points: [
        "Siloed telemetry forcing manual cross-referencing across separate government and meteorology portals.",
        "High cognitive burden during rapid offshore weather degradation.",
        "Lack of unified decision support reconciling voyage safety margins with fuel expenditure and landing values.",
      ],
    },
    architecture: {
      overview:
        "ORCA structures incoming environmental and operational feeds into dedicated functional agents that evaluate risk, navigation routes, and economic outcomes before presenting synthesized recommendations.",
      modules: [
        {
          name: "Environmental Ingestion Agent",
          description:
            "Aggregates and normalizes satellite oceanography, wind vectors, and wave height data feeds into unified coordinate matrices.",
          status: "Designed",
        },
        {
          name: "Geospatial Risk Agent",
          description:
            "Cross-references vessel coordinates against bathymetric contours, territorial boundaries, and known maritime hazard polygons.",
          status: "Designed",
        },
        {
          name: "Economic Synthesis Agent",
          description:
            "Correlates potential catch zones with fuel expenditure curves and prevailing regional harbor landing prices.",
          status: "Designed",
        },
        {
          name: "Unified Operator Interface",
          description:
            "Presents situational maps, advisory confidence intervals, and alert states in a high-contrast marine-grade dashboard.",
          status: "Designed",
        },
      ],
    },
    contribution: [
      "Decomposed the complex multi-source maritime problem space into modular, decoupled functional agents.",
      "Designed the data contract schemas linking disparate geospatial coordinate grids with operational alerts.",
      "Engineered high-fidelity interactive map prototypes visualizing dynamic sea condition gradients.",
      "Formulated the SIH problem submission and technical architecture pitch deck.",
    ],
    outcome:
      "Selected as an SIH Finalist formulation; established a comprehensive architectural blueprint for AI-assisted maritime decision systems.",
    verificationNotes:
      "ORCA is an architectural design and prototype concept developed for the Smart India Hackathon. It is not currently deployed at sea.",
    links: {
      github: "https://github.com/swastikmahamuni-05",
    },
    nextProject: {
      slug: "aumbyte",
      title: "AUMByte",
      subtitle: "Edge AI Crop Disease Detection System",
    },
  },
  {
    id: "aumbyte",
    slug: "aumbyte",
    index: "02",
    title: "AUMByte",
    subtitle: "Edge AI Crop Disease Detection System",
    domain: "Edge AI & Computer Vision",
    category: "AI",
    summary:
      "An offline-first edge AI system engineered for agricultural micro-plots where persistent internet connectivity cannot be assumed. Combines on-device camera inference with automated cellular SMS advisories.",
    status: "Prototyped",
    accolade: "1st Place Winner — Indian Electronics & Innovation League (IEIL)",
    image: "/images/projects/aumbyte_card.png",
    technologies: [
      {
        category: "Edge Compute & Acceleration",
        items: ["Embedded Linux", "Quantized Neural Models", "OpenCV", "Python"],
      },
      {
        category: "Hardware & Telemetry",
        items: ["Camera Sensor Interface", "Cellular GSM / GPRS Module", "Power Management"],
      },
      {
        category: "Software & Inference",
        items: ["Edge Inference Runtime", "Automated SMS Dispatcher", "Local SQLite Queue"],
      },
      {
        category: "Field Prototyping",
        items: ["Field Enclosure", "Solar / Battery Integration", "Physical Testing"],
      },
    ],
    keyTechList: ["Edge AI", "Computer Vision", "Embedded Linux", "GSM / SMS", "OpenCV"],
    problem: {
      title: "The Agricultural Cloud Connectivity Barrier",
      description:
        "Modern computer vision models detect plant pathology with high accuracy, but smallholder farms in rural areas frequently lack the reliable broadband necessary for cloud-based image uploads.",
      points: [
        "Cloud-dependent diagnostics fail completely in remote telecom dead zones.",
        "Delayed pathology diagnosis leads to irreversible crop damage and excessive pesticide expenditure.",
        "Farmers need immediate, localized diagnosis delivered through basic SMS without requiring smartphones or apps.",
      ],
    },
    architecture: {
      overview:
        "AUMByte operates entirely at the physical edge. Optical sensors capture leaf samples, an optimized local model classifies pathology on-device, and a cellular module transmits concise diagnosis text messages directly to the farmer.",
      modules: [
        {
          name: "Optical Capture Pipeline",
          description:
            "Automated image normalization, exposure compensation, and region-of-interest cropping for leaf specimens.",
          status: "Prototyped",
        },
        {
          name: "Edge Inference Runtime",
          description:
            "Runs quantized neural networks directly on edge silicon, outputting disease classification within fractions of a second.",
          status: "Implemented",
        },
        {
          name: "Cellular SMS Advisory Engine",
          description:
            "Formats diagnostic results and recommended countermeasures into plain-text SMS dispatched via GSM modem.",
          status: "Implemented",
        },
        {
          name: "Offline Storage & Sync",
          description:
            "Maintains an on-device operational log, queuing historical detections for optional batch upload when connectivity resumes.",
          status: "Prototyped",
        },
      ],
    },
    contribution: [
      "Designed and assembled the physical edge compute enclosure and sensor wiring harness.",
      "Optimized and benchmarked computer vision classification pipelines for constrained edge silicon.",
      "Developed the serial AT-command driver interfacing the microcontroller with the cellular GSM module.",
      "Validated the prototype under field conditions, earning 1st place nationally at the IEIL competition.",
    ],
    outcome:
      "Awarded 1st Place at the Indian Electronics & Innovation League; proved feasibility of reliable sub-second leaf pathology diagnosis without internet access.",
    verificationNotes:
      "AUMByte is a physically prototyped and jury-validated edge system. Ongoing work focuses on low-power sleep cycles and extended weatherproofing.",
    links: {
      github: "https://github.com/swastikmahamuni-05",
    },
    nextProject: {
      slug: "vyom",
      title: "VYOM",
      subtitle: "Autonomous Industrial Mobile Robot",
    },
  },
  {
    id: "vyom",
    slug: "vyom",
    index: "03",
    title: "VYOM",
    subtitle: "Autonomous Industrial Mobile Robot",
    domain: "Robotics & Embedded Systems",
    category: "Systems",
    summary:
      "An autonomous mobile robot platform concept engineered for indoor factory and warehouse material transfer. Integrates 2D LiDAR SLAM, obstacle avoidance, and split compute between high-level navigation and real-time motor control.",
    status: "In Incubation",
    accolade: "Selected for CRiEYA L3 Incubation Funding Stage",
    image: "/images/projects/vyom_card.png",
    technologies: [
      {
        category: "Robotics & Navigation",
        items: ["ROS 2", "2D LiDAR SLAM", "Nav2 Navigation Stack", "Costmap 2D"],
      },
      {
        category: "Embedded & Control",
        items: ["Real-Time Microcontrollers", "PID Motor Control", "CAN / UART Buses"],
      },
      {
        category: "High-Level Compute",
        items: ["Embedded Linux Compute", "Python", "C++", "Obstacle Detection"],
      },
      {
        category: "Safety & Hardware",
        items: ["Hardware E-Stop", "Differential Drive Chassis", "Power Distribution PCB"],
      },
    ],
    keyTechList: ["ROS 2", "2D LiDAR", "Embedded Linux", "C++", "PID Control"],
    targetBenchmarks: [
      {
        label: "Target Payload Capacity",
        value: "45 kg",
        isTargetBenchmark: true,
      },
      {
        label: "Target Stopping Distance",
        value: "< 30 cm",
        isTargetBenchmark: true,
      },
      {
        label: "Positioning Repeatability",
        value: "±5 cm",
        isTargetBenchmark: true,
      },
    ],
    problem: {
      title: "Material Transfer Friction in Medium-Scale Manufacturing",
      description:
        "Warehouses and factory floors require repetitive transportation of parts between fabrication cells and staging zones. Full-scale AGVs are cost-prohibitive for medium enterprises, while manual carts create human fatigue and logistical delays.",
      points: [
        "Commercial automated guided vehicles require expensive magnetic floor strips or infrastructure overhaul.",
        "High collision risks in narrow, dynamic factory aisles with pedestrian traffic.",
        "Need for a self-contained, infrastructure-free autonomous mobile base capable of dynamic re-routing.",
      ],
    },
    architecture: {
      overview:
        "VYOM employs a two-tier compute split: a high-level embedded Linux processor handles simultaneous localization and mapping (SLAM) and trajectory generation, while a dedicated microcontroller governs microsecond-level closed-loop motor execution.",
      modules: [
        {
          name: "Perception & SLAM Stack",
          description:
            "360° 2D LiDAR scanner paired with wheel odometry to generate dynamic obstacle costmaps and real-time pose estimates.",
          status: "Prototyped",
        },
        {
          name: "Nav2 Path Planner",
          description:
            "Global path planning and dynamic local trajectory generation with proactive deceleration near dynamic obstacles.",
          status: "Designed",
        },
        {
          name: "Low-Level Motor Controller",
          description:
            "Microcontroller running dual closed-loop PID velocity control loops to drive brushless planetary gear motors.",
          status: "Implemented",
        },
        {
          name: "Safety Interlock Subsystem",
          description:
            "Independent hardware e-stop circuit, proximity warning sounders, and failsafe watchdog timers.",
          status: "Implemented",
        },
      ],
    },
    contribution: [
      "Formulated the system architecture and compute-split partition between high-level ROS 2 nodes and low-level motor drivers.",
      "Configured 2D LiDAR point-cloud filtering and costmap inflation radii for industrial indoor corridors.",
      "Developed motor control firmware with encoder feedback loops on microcontrollers.",
      "Secured competitive CRiEYA L3 incubation funding to advance chassis fabrication and sensor validation.",
    ],
    outcome:
      "Backed by CRiEYA L3 incubation funding; advancing toward physical chassis validation and benchmark testing in controlled industrial environments.",
    verificationNotes:
      "VYOM is currently in active hardware incubation under CRiEYA L3. Metrics shown represent engineering design targets currently undergoing physical testing.",
    links: {
      github: "https://github.com/swastikmahamuni-05",
    },
    nextProject: {
      slug: "orca",
      title: "ORCA",
      subtitle: "Marine AI Decision Support Platform",
    },
  },
];
