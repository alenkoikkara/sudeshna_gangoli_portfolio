import asap1 from '../assets/asap/Container-1.png'
import asap2 from '../assets/asap/Container-2.png'
import asap3 from '../assets/asap/Container-3.png'
import asap4 from '../assets/asap/Container-4.png'
import asap5 from '../assets/asap/Container-5.png'
import asap6 from '../assets/asap/Container-6.png'
import asap7 from '../assets/asap/Container-7.png'
import asap8 from '../assets/asap/Container-8.png'

export const caseStudiesData = {
  ASAP: {
    title: 'ASAP',
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
    subtitle: 'Frictionless Package Returns',
    client: 'ReturnLoop Co.',
    role: 'Lead UX Designer',
    timeline: '2 Months (Winter 2025)',
    services: 'UX Research, Interaction Design, Service Design',
    images: [asap5, asap6],
    
    aboutTitle: 'About Project',
    aboutText: "Returning something online takes twelve minutes. It usually takes five days to active find time for it. ReturnLoop connects people who have a package ready to go with drivers already passing through their neighborhoods, so the return happens instantly.",
    
    problemHeading: 'The Return I Never Made',
    problemText: "I bought something online, decided quickly I didn't want it, and never got around to returning it. The package sat in my closet until the window closed. Friends had the same story: not 'I don't want to return things,' but 'I meant to, and then I forgot.' The gap is between intent and execution.",
    
    researchHeading: 'Research: Is the problem that people don\'t know where to go, or that getting out the door is the real barrier?',
    researchSubheading: 'Conducted a CAR-L (Cognitive Appraisals Reflective Logic) study including 8 semi-structured interviews with users aged 21-63 to gather qualitative text and understand friction.',
    
    researchFindings: [
      {
        title: 'Printer Barrier',
        desc: "Print label was the primary friction point. Users don't have printer setup at home."
      },
      {
        title: 'Scheduling Fear',
        desc: "A full day passed in anticipation — user felt 'locked' in. User was reluctant to leave the house, feared missed package."
      },
      {
        title: 'Price vs. Effort',
        desc: "Price barrier is real but relative — almost nobody objected to $4-$5. Recurring question was why the returner has to bear the effort of dropping it off."
      }
    ],

    researchSpotlight: {
      quote: "I tried to return it three times. The first time the printer was out of ink, the second time the line was too long, and the third time they closed early.",
      author: "Margaret, 55 — Retired Teacher"
    },

    competitiveHeading: 'Where ReturnLoop Fits',
    competitiveSubheading: 'Three core columns appeared across every conversation. Each was directly linked to a service design decision.',
    competitiveTable: [
      {
        feature: 'Scope',
        uber: 'Eats only',
        doordash: 'Any retailer',
        returnloop: 'Any retailer',
        highlight: true
      },
      {
        feature: 'Context',
        uber: 'In-app feature',
        doordash: 'In-app tab',
        returnloop: 'Standalone',
        highlight: true
      },
      {
        feature: 'Origin',
        uber: 'Single trip',
        doordash: 'Single trip',
        returnloop: 'Batched',
        highlight: true
      },
      {
        feature: 'Proof',
        uber: 'Photo',
        doordash: 'Photo',
        returnloop: 'Multi-entity',
        highlight: true
      }
    ],
    competitiveSummary: 'Driver aggregates: multiple returns in one trip. Keeps cost low.',

    insightsHeading: 'What the research revealed, and what it changed.',
    insightsTable: [
      {
        research: 'Print label was the main friction point — Alex',
        design: 'A free label-printing service, no printer required.'
      },
      {
        research: '"If I want to return it, I have to print..."',
        design: 'Monitor driver in real-time, transparency first.'
      },
      {
        research: '"Who is this, and is it verified?" — anxiety tracker',
        design: 'Driver verification, background checked.'
      }
    ],

    pivotHeading: 'The Moment the Design Had to Change',
    pivotText: 'The first version failed when we completed the human testing. In the interviews, we discovered that user anxiety and trust issues existed: users felt that since they didn\'t know who the driver was, they were letting a stranger take their packages. We realized we had to make driver verification and tracking prominent, shifting from purely functional tracking to human-centric safety.',

    personas: [
      {
        name: 'Alex, 28',
        type: 'The Avoidant Planner',
        quote: '"No printer. No tape. The box sits in the hallway for weeks."'
      },
      {
        name: 'Margaret, 55',
        type: 'The Hesitant Outsourcer',
        quote: '"I don\'t want a stranger taking my package. How do I know it gets there?"'
      }
    ],

    journeyMap: [
      {
        stage: 'Decide',
        today: 'I need to return this',
        returnloop: 'One-tap request'
      },
      {
        stage: 'Prepare',
        today: 'Print label, pack box',
        returnloop: 'No label, no tape needed'
      },
      {
        stage: 'Drop-off',
        today: 'Drive to store',
        returnloop: 'Driver picks up at door'
      },
      {
        stage: 'Delay',
        today: 'Wait in line',
        returnloop: 'Real-time tracking'
      },
      {
        stage: 'Outcome',
        today: 'Refund received after 5 days',
        returnloop: 'Instant drop-off verification'
      }
    ],

    flowHeading: 'User Flow Map',
    flowSteps: ['Login', 'Home', 'Scan Label', 'Pick-up Window', 'Live Tracking', 'Carrier Confirmed', 'Chat with Driver'],
    flowSummary: 'Each step is mapped to solve specific pain points: printing (gone), travel (gone), waiting (gone). Simple design is key. Mobile UI simplifies returns into 3 steps.',

    methodologyHeading: 'Methodology & Reflection',
    methodologyText: 'We built a return pick-up service. In testing, the prototype was run through 15 simulated returns, and we found that users didn\'t want a cheaper return, they wanted a frictionless return. Uber and DoorDash focused on food delivery. What they didn\'t build is the trust. People don\'t want a cheaper return, they want a verified return where they don\'t have to print anything.'
  },
  PetClear: {
    title: 'PetClear',
    subtitle: 'Interactive Guide',
    client: 'PetClear Health',
    role: 'Product Strategist',
    timeline: '4 Months (Spring 2026)',
    services: 'UX Research, Information Architecture, Web App Design',
    images: [asap7, asap8],
    aboutTitle: 'About Project',
    aboutText: "Traveling with a pet shouldn't be a guessing game. Every country, airline, and encounter comes with different rules, deadlines, and requirements. PetClear gives you a personalized checklist based on your pet and travel route, showing exactly what you need, where to get it, and when it's due. Everything organized. Everything tracked. No surprises at the airport.",
    
    problemHeading: 'Not a failure of effort, but information at exact moments matter the most. PetClear fixes that.',
    problemText: 'Pet owners have no single place that tells them exactly what their pet needs to travel. Airlines take the payment and say nothing about what comes next. Owners show up at the gate missing a document they never knew existed.',
    
    gaps: [
      {
        title: 'Information Gap',
        desc: 'Information is scattered across airline websites, blogs, and government sites.'
      },
      {
        title: 'Trust Gap',
        desc: 'Official sources conflict, and online forums contain outdated advice.'
      },
      {
        title: 'Memory Gap',
        desc: 'Deadlines vary widely by country, vaccine, and travel date.'
      }
    ],

    researchHeading: 'Research: Pet Policy Pages (110 Pages), 4 Airline Audits, and User Model.',
    researchSubheading: 'Revealed Drift. We called it "The Policy Gap" — no route-specific animal policies, conflicting requirements.',
    
    researchTableTitle: 'Airline Website Audit — 10 Airlines Reviewed',
    researchTableSubtitle: 'Audits showed standard size and weight, but 0/10 showed route-specific rules, timing rules, or entry/exit formalities.',
    
    researchTable: [
      {
        rule: 'Air India: No NYC entry mention anywhere on the page',
        impact: 'Baggage staff have to search for the rule, adding wait'
      },
      {
        rule: 'JetBlue: 10 min transit safety window not stated',
        impact: 'Some airways have country-specific import rules closed'
      },
      {
        rule: 'Emirates: Class details appear after booking screen',
        impact: 'British Airways: USD 350 standard fee, window not shown'
      },
      {
        rule: 'United Airlines: Must call station manager directly, no info on detail',
        impact: 'Authorities not accepting the animal, rules bypass'
      },
      {
        rule: 'Lufthansa: Warning windows on USDA endorsements missing days',
        impact: 'Abuse: Airline Health certificate expired'
      }
    ],
    
    researchSummary: [
      'Policies vary, airlines fail to provide standard checklist.',
      '7 out of 7 airlines failed to provide complete documentation list for international travel, with most explicitly stating "check with government" for correct requirements.'
    ],

    persona: {
      name: 'Amy, 31',
      tag: 'Cat owner • Domestic & International travel • First-time traveler • Needs guidance & control',
      wants: [
        'Simple, outlined step-by-step guidelines',
        'Safe journey, fully checked',
        'Continuous check-ins before the flight'
      ],
      barriers: [
        'Airline website details are too vague',
        'Confusing international forms',
        'High anxiety, feels like something is missing'
      ],
      quote: 'I did everything I was supposed to do. Nobody told me there was more.',
      scenario: 'USDA endorsement, international travel',
      mistakes: 'Incorrect signature format, missing USDA stamp — flight can\'t be boarded'
    },

    solutionHeading: 'PetClear — a standalone tool, not a feature inside an airline app.',
    solutionText: 'Enter your pet and route. See what documentation you need, where to get them, and how long they take. Everything is clear.',
    solutionCallout: 'Designed specifically, PetClear converts complex regulations into a visual, organized, and timely format — at the right moment.',
    solutionTabs: ['Airport scan', 'Project checklist', 'Vaccine tracker', 'Document vault', 'Community'],
    solutionFeatures: [
      {
        title: 'Identify',
        desc: 'Identify travel, rules, profile'
      },
      {
        title: 'Checklist',
        desc: 'Route-specific checklist with deadlines'
      },
      {
        title: 'Alerts',
        desc: 'Timely alerts for country requirements'
      },
      {
        title: 'Vault',
        desc: 'One place: all docs. Always current'
      },
      {
        title: 'Community',
        desc: 'Post-travel tips, reminders'
      }
    ],

    beforeAfterTable: [
      {
        before: 'Search across 5 sources — all say something different',
        after: 'Single personalized, route checklist generated'
      },
      {
        before: 'Pay fee — no document requirements shown',
        after: 'Missing docs flagged with exact location/link'
      },
      {
        before: 'Arrive at airport — find out missing document',
        after: '4-day check — notifications warning of expirations'
      },
      {
        before: 'Denied boarding. Pet left behind.',
        after: 'Animal verified. Pet boards.'
      }
    ],

    impactPoints: [
      {
        title: 'Zero anxiety',
        desc: 'Clear picture of what is required'
      },
      {
        title: 'Support team',
        desc: 'Help custom emergency check'
      },
      {
        title: 'Safer travel',
        desc: 'Fewer denied boardings, fewer pets left behind'
      },
      {
        title: 'Confidence',
        desc: 'Peace of mind when traveling with a beloved pet'
      }
    ],

    conclusion: 'The problem was never the rules. It was that nobody made them visible. PetClear makes what already exists visible, organized, and timely for the person who needs it most.'
  }
}
