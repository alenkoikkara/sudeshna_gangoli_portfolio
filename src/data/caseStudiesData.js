import asap1 from '../assets/asap/Container-1.png'
import asap2 from '../assets/asap/Container-2.png'
import asap3 from '../assets/asap/Container-3.png'
import asap4 from '../assets/asap/Container-4.png'
import asap5 from '../assets/asap/Container-5.png'
import asap6 from '../assets/asap/Container-6.png'
import asap7 from '../assets/asap/Container-7.png'
import asap8 from '../assets/asap/Container-8.png'

export const caseStudiesData = {
  OCAD: {
    title: 'OCAD',
    subtitle: 'Executive Functioning App for Students',
    client: 'OCAD University x Google Scholar Labs',
    role: 'Lead Product Designer',
    timeline: '3 Months (Fall 2025)',
    services: 'UX Research, AI Prototyping, Interface Design',
    aboutTitle: 'About Project',
    aboutText: 'ASAP is an AI-powered mobile app designed to help college students build independent planning skills by breaking assignments into manageable steps scaffolding executive function until the student no longer needs the tool.',
    
    problemHeading: 'For many students planning was never taught. It was just expected.',
    problemText: 'When students move from high school to college, three external supports vanish at once: fixed schedules, adult intervention, and peer accountability. The system that managed their behavior was never designed to transfer ownership to them.',
    problemQuote: '“In high school, 70% of the structure was externally provided. In college I have to do the exact opposite, and I don\'t know where to begin.”',
    problemQuoteAuthor: 'Undergraduate interview participant',
    
    metrics: [
      { value: '~25', label: 'Age when the prefrontal cortex fully matures' },
      { value: '#1', label: 'EF deficits predict first-year failure better than motivation or grades' },
      { value: '3', label: 'External supports lost simultaneously at transition' },
      { value: '84', label: 'Prototype versions iterated before the design stabilized' }
    ],

    aiHeading: 'AI Accelerated Every Phase. We Directed Every Decision.',
    aiPhases: [
      {
        phase: 'RESEARCH',
        tools: ['Anara', 'Google Scholar Labs'],
        desc: 'Synthesized root causes of executive functioning deficits across scholarly literature pulling findings from neuroscience, educational psychology, and HCI that would have taken weeks manually.',
        insight: 'What AI gave us: a map of the problem space. What we added: the judgment to identify which 5 of 15 insights actually mattered for design.'
      },
      {
        phase: 'PROTOTYPE',
        tools: ['Figma Make', 'Claude Opus 4.6'],
        desc: 'A fully interactive 4-screen prototype in one evening. We iterated 84 versions — testing layout, flow, and interaction at a frequency impossible in traditional Figma.',
        insight: 'What AI gave us: ideas rendered before we\'d fully articulated them. What we added: the discipline to reject 83 versions and know why 84 was right.'
      },
      {
        phase: 'TESTING',
        tools: ['Claude', 'Notebook LM'],
        desc: 'Generated 3 synthetic personas and ran an AI heuristic review using Nielsen\'s principles to identify structural gaps before real human testing.',
        insight: 'What AI missed entirely: emotional variability, mood-based decision-making, the psychological weight of being first-generation. That required a real human.'
      }
    ],

    solutionsHeading: 'The Solutions',
    solutionsList: [
      'One assignment at a time — no overwhelming lists',
      'AI suggests subtasks with reasons and time estimates; student edits freely',
      'Focus mode locks everything except the current task',
      'Timer runs in standard or Pomodoro mode',
      'Independence bar tracks self-sufficiency — as it grows, AI steps back'
    ],
    solutionsQuote: 'The success of this app is measured by the student needing it less over time.',

    insightHeading: 'Synthetic vs. Human Testing',
    insightText: 'Synthetic users were logical and consistent. Real users aren\'t. Kshitij\'s insight — that mood determines what\'s actually doable — completely changed how we think about priority.',
    insightGrid: [
      { name: 'Maya, 18', tag: 'First-year • no disability', desc: 'Maya missed the explainability link.' },
      { name: 'Jordan, 20', tag: 'ADHD • skeptical', desc: 'Jordan needed a mid-task "I\'m stuck" option.' },
      { name: 'Priya, 19', tag: 'First-gen student', desc: 'Felt the "Low confidence" label reflected on her, not the AI.' },
      { name: 'Kshitij Tapre, 26', tag: 'ADHD • grad student • think-aloud', desc: 'Agreed the single-task timer reduced distraction and the breakdown was a useful starting point — but added something no synthetic persona caught: even high-priority tasks get postponed when they feel emotionally overwhelming. Mood governs motivation. AI follows logic. Real users don\'t.' }
    ],

    pivotHeading: 'The Pivot: Clinical Transparency vs. Empathetic Language',
    pivotSubheading: 'The feature we built to help was the one that caused harm.',
    pivotBefore: {
      label: 'Before',
      title: 'Low confidence',
      desc: 'Clinical label to signal AI uncertainty. AI testing: no issues flagged.'
    },
    pivotAfter: {
      label: 'After',
      title: 'This is my best guess',
      desc: 'Natural language that owns AI limitation without reflecting on the user.'
    },
    pivotCaption: 'Priya read "Low confidence" as a judgment of herself, not the AI. For a first-generation student already battling imposter syndrome, that one label did more harm than good. Transparency without empathy is just data.',

    lessons: [
      { title: 'Speed is real — but so is fragility', desc: 'Figma Make built a prototype in one evening, then broke under too many prompts. Fast, but brittle.' },
      { title: 'Ethics surface late — unless you look early', desc: 'The confidence label harm only surfaced in Phase 4. One checkpoint at the start isn\'t enough.' },
      { title: 'Over-reliance is the core paradox — and it\'s unresolved', desc: 'We built an AI tool to fix AI dependency. The students who need it most have to open it at the exact moment they\'re avoiding work.' },
      { title: 'Test with real users earlier', desc: 'A human in Phase 2 would have caught the confidence label and mood-priority gaps weeks sooner.' }
    ],

    reflections: [
      { title: 'Where AI helped', desc: 'Research synthesis in hours. A prototype in one evening. Synthetic personas that caught structural issues before any real user saw them.' },
      { title: 'Where it fell short', desc: 'Synthetic users were emotionally flat. Figma Make broke under complexity. AI rewards shallow iteration if you let it.' },
      { title: 'What we\'d do next', desc: 'Design for the worst day. Mood & energy need to be first-class inputs not edge cases. Next version needs a low-friction "I can\'t right now" mode.' }
    ],
    conclusion: 'The goal is not helping students finish work faster. It is helping them eventually not need the system at all.',
    images: [asap1, asap2, asap3, asap4]
  },
  ReturnLoop: {
    title: 'ReturnLoop',
    subtitle: 'Digital Exhibition',
    client: 'ReturnLoop Co.',
    role: 'Interactive Developer',
    timeline: '2 Months (Winter 2025)',
    services: 'Creative Coding, WebGL, Motion Design',
    description1: 'ReturnLoop is an experimental digital exhibition exploring the circularity of digital memory. The project showcase investigates how digital files decompose, replicate, and transform as they are shared across networks.',
    description2: 'We built a high-performance interactive gallery utilising custom WebGL shaders and physics-based interactions. Visitors can manipulate digital artifacts, causing them to break apart and re-form in real time, creating an immersive, kinetic experience.',
    images: [asap5, asap6],
    challenge: 'Rendering hundreds of interactive 3D physics-based artifacts on mobile browsers without dropping frames or depleting battery life.',
    solution: 'Optimized GPGPU physics simulations combined with instance rendering in Three.js, moving all calculations to custom shaders and reducing CPU-GPU draw calls to a single unified pass.',
  },
  PetClear: {
    title: 'PetClear',
    subtitle: 'Interactive Guide',
    client: 'PetClear Health',
    role: 'Product Strategist',
    timeline: '4 Months (Spring 2026)',
    services: 'UX Research, Information Architecture, Web App Design',
    description1: 'PetClear is an interactive diagnostic guide and platform for pet health. The project aims to simplify veterinary jargon and provide pet owners with clear, actionable steps during health emergencies.',
    description2: 'We created a decision-tree based interactive flow that guides users through symptoms, cross-references with local clinical data, and provides clear triage advice. The visual language is calm, reassuring, and highly legible under stressful conditions.',
    images: [asap7, asap8],
    challenge: 'Designing a medical triage flow that is quick enough for active emergencies but cautious enough to prevent misdiagnoses and liability.',
    solution: 'A warm, conversational UX flow that gates complex decisions with simple visual choices (icons + clear micro-copy) and integrates direct emergency calling at every stage of the journey.',
  }
}
