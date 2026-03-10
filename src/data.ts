export const PARAGRAPHS = [
  "I am driven by the tangible impact of my work. As an AI graduate from UPC with an exchange at EPFL, I have a solid technical foundation backed by a first-author IROS 2025 paper and other research experiences, but my focus is now on business-oriented application. I thrive on implementing state-of-the-art research to drive efficiency and innovation, ensuring that cutting-edge technology translates directly into a competitive business advantage and high-impact results. I am now looking for my next challenge at the intersection of AI and business strategy."
];

export const SOFT_SKILLS = [
  {
    image: "/soft-skills/photo1.jpg",
    title: "Cybathlon 2024 — ETH Zurich",
    description: "Leading our team to 9th place globally as the #1 Spanish and student team, demonstrating leadership and teamwork under pressure."
  },
  {
    image: "/soft-skills/photo2.jpg",
    title: "IROS 2025 — Hangzhou, China",
    description: "Presenting my first-author research paper at one of the world's premier robotics conferences, honing public speaking and communication skills."
  },
  {
    image: "/soft-skills/photo3.jpg",
    title: "ARM2u Prosthetics Team",
    description: "Collaborating with a multidisciplinary team of engineers and designers to build a functional AI-powered prosthetic arm."
  },
  {
    image: "/soft-skills/photo4.jpg",
    title: "EPFL Research Lab",
    description: "Adapting to a new research environment in Switzerland, working alongside international colleagues on cutting-edge biomedical engineering."
  }
];

export const EXPERIENCE = [
  {
    title: "Machine Learning Intern",
    company: "Starlab",
    date: "Mar 2025 - Jul 2025 (5 months)",
    bullets: [
      "Engineered high-performance diagnostic classifiers (XGBoost, SVM, Random Forest) for early Alzheimer's and Parkinson's detection, optimizing model sensitivity for clinical environments.",
      "Architected a multi-objective feature selection pipeline using NSGA-II (Evolutionary Algorithms) and statistical ranking (Mann-Whitney U) to isolate high-impact biomarkers from 170+ EEG-derived features.",
      "Built robust data processing workflows to handle high-dimensional time-series data(EEG), automating feature extraction and reducing noise for cleaner signal analysis.",
      "Spearheaded algorithmic fairness initiatives, implementing bias mitigation strategies to neutralize gender disparities and ensure equitable diagnostic performance across demographic groups."
    ]
  },
  {
    title: "Computer Vision Intern",
    company: "IRI",
    date: "Sep 2024 - Mar 2025 (6 months)",
    bullets: [
      "First-authored a paper accepted at IROS 2025 (Hangzhou), one of the world's premier robotics conferences, presenting a novel Deep Learning architecture for Human-Robot Collaboration.",
      "Engineered a highly efficient motion prediction model using PyTorch and CUDA, achieving a 200× inference speedup and 97% parameter reduction compared to prior state-of-the-art baselines.",
      "Boosted predictive performance by over 50% while optimizing the neural network for real-time, low-latency deployment in collaborative robotics settings.",
      "Led the end-to-end research lifecycle, from algorithmic design and experimental benchmarking to the final technical publication and presentation in China."
    ]
  },
  {
    title: "Head of Software & AI",
    company: "ARM2u",
    date: "Feb 2024 - Aug 2025 (1 year 6 months)",
    bullets: [
      "Lead Software Engineer for student association ARM2u, driving the development of an AI-powered prosthetic arm that ranked Top 10 globally at Cybathlon 2024.",
      "Architected and developed real-time firmware from scratch for a myoelectric prosthesis using C++ on ESP32-S3",
      "Implemented ML based gesture classification by processing raw EMG signals to drive complex state-machine logic and enabling precise user control",
      "Achieved global recognition by securing 9th place at Cybathlon 2024 (ETH Zurich), ranking as the #1 Spanish and student team."
    ]
  },
  {
    title: "Computer Vision / ROS2 Developer",
    company: "Sener's Bot Talent",
    date: "Feb 2024 - Jul 2024 (6 months)",
    bullets: [
      "Developed real-time Computer Vision ROS2 nodes for semantic understanding, enabling the rover to autonomously detect objects, classify colours, and decode numeric markers for task execution.",
      "Validated navigation logic via Sim-to-Real workflows in Gazebo, ensuring seamless software deployment from simulation to physical hardware.",
      "Won 'Best Technology' and 'Best Performance' awards (SENER)."
    ]
  }
];

export const PROJECTS = [
  {
    title: "Enhancing Context-Aware Human Motion Prediction",
    subtitle: "IROS 2025 Publication (First Author)",
    description: "Developed IntentMotion, a lightweight AI framework designed to predict and generate 3D human motion for real-time human-robot handovers. By enhancing the siMLPe architecture with an intention-aware conditioning mechanism and a novel intention classifier, the model dynamically adapts predicted trajectories based on collaborative or non-collaborative human intent. This approach achieved a 200x speedup in inference time (18.5ms) and a 97% reduction in parameters compared to state-of-the-art baselines on the handover task, while simultaneously reducing mean body L₂ prediction error by over 50% (0.355m to 0.165m). Furthermore, the introduction of task-specific loss functions (L_c, L_rer, L_vr) successfully eliminated static joint predictions, ensuring natural and precise right-hand motion critical for safe robotic object exchange.",
    tags: ["PyTorch", "CUDA", "Robotics", "Deep Learning", "Human Motion Generation"],
    video: "https://www.youtube.com/embed/BHQKijZAPQ4",
    links: [{ text: "Paper", url: "https://arxiv.org/pdf/2503.00576" }, { text: "GitHub", url: "https://github.com/geri06/IROS2025-IntentMotion" }]
  },
  {
    title: "TinyML CNN for sEMG Decoding",
    subtitle: "EPFL Research (Submitted to IROS 2026)",
    description: "I developed an ultra-lightweight CNN-based regression architecture designed for the simultaneous and proportional control (SPC) of robotic prosthetic wrists. By implementing temporal-spatial input stacking, I embedded 200 ms of context directly into the first-layer kernels, successfully replacing computationally heavy recurrent units like LSTMs without losing predictive power. The model achieves a 99.3% parameter reduction (to 23k) through aggressive spatial downsampling and a 32-dimensional latent bottleneck to meet the strict power and memory constraints of wearable microcontrollers. This INT8-quantized framework delivers a decoding fidelity of R^2= 0.92 for isolated movements and R^2 = 0.84 for complex, coupled movements on a MCU. With an ultra-low 20 ms inference latency, the system comfortably exceeds the real-time requirements for seamless bionic control and matches the performance of GPU-reliant, state-of-the-art architectures. Conducted the full reserach cicle, from dataset recording from human subjects until model deployment.",
    tags: ["TinyML", "CNN", "Deep Learning", "Quantization", "Research", "Pytorch"],
    video: "https://www.youtube.com/embed/34WlDt_GbZ4",
    links: [{ text: "Paper", url: "https://drive.google.com/file/d/1dGluYnPjG9SMGHs7DjsKM7OEqU8nbwOl/view?usp=sharing" }]
  },
  {
    title: "VLM for Object Identification",
    subtitle: "Vision-Language Model Project",
    description: "Designed and implemented a Vision-Language Model (VLM) pipeline for robust real-time object identification. By leveraging multimodal architectures that fuse visual features with natural language understanding, the system can identify and describe objects in complex scenes with high accuracy. The project focused on optimizing the inference pipeline for practical deployment, exploring prompt-engineering strategies and fine-tuning techniques to maximize zero-shot and few-shot identification performance across diverse object categories and environmental conditions.",
    tags: ["VLM", "Computer Vision", "Deep Learning", "PyTorch", "Transformers"],
    video: "",
    links: [{ text: "GitHub", url: "#" }]
  },
];

export const SKILLS = [
  { category: "Programming", items: ["Python", "C++"] },
  { category: "Machine/Deep Learning & Data Science", items: ["PyTorch", "Tensorflow", "Scikit-learn", "OpenCV", "CNN", "RNN", "MLP", "Attention", "Pandas", "Numpy", "Scipy"] },
  { category: "Generative AI", items: ["Transformers", "LLMs", "VLMs", "VAEs", "Diffusion Models", "GANs"] },
  { category: "Other Tools", items: ["ROS", "Git", "Cuda", "Signal Processing", "SLAM", "IMU", "RGB-D cameras", "2D LiDAR", "Gazebo", "EMG signals", "Microcontrollers"] }
];

export const EDUCATION = [
  {
    degree: "Exchange Student | EPFL",
    institution: "Prof. Silvestro Micera (5 months)",
    date: "Sep 2025 – Feb 2026 (6 months)",
    grade: "6/6",
    highlights: [
      "Research submitted to IROS 2026.",
      "Architected a TinyML CNN framework for the Simultaneous and Proportional Control (SPC) of multi-DoF wrist kinematics using 32-channel High-Density sEMG.",
      "Resolved the 'Embedded Gap' by reducing model parameters by 99.3% (from 3.3M to 23,000) through spectral-spatial input stacking and aggressive max-pooling optimization.",
      "Deployed and profiled on an ARM Cortex-M7, utilizing 8-bit Post-Training Quantization (INT8) to achieve a 20ms inference latency and 29.2 KB memory footprint.",
      "Achieved SOTA-level decoding fidelity matching the performance of heavy, GPU-reliant architectures."
    ]
  },
  {
    degree: "Bachelor's Degree in Artificial Intelligence",
    institution: "UPC-FIB",
    date: "Sep 2021 – Feb 2026 (4.5 years)",
    grade: "9/10",
    highlights: [
      "Honors in 6 subjects: Computer Vision, Advanced Robotics, Advanced Databases, Reinforcement Learning and Unsupervised Learning, Introduction to Machine Learning and Calculus."
    ]
  }
];
