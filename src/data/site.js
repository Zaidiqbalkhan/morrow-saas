export const navigation = [
  { label: 'Product', to: '/#product' },
  { label: 'Features', to: '/#features' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Resources', to: '/#resources' },
];

export const quotes = [
  {
    quote: 'We finally stopped asking where everything was. It just felt like the team had space to think again.',
    name: 'Alex Rivera', title: 'Creative director', company: 'Soft Form Studio', initials: 'AR', color: 'peach'
  },
  {
    quote: 'The first workspace that feels like it understands how a small, ambitious team actually works.',
    name: 'Sam Okafor', title: 'Studio founder', company: 'Northline Objects', initials: 'SO', color: 'lavender'
  },
  {
    quote: 'Less status theater. More work that moves. That is the kind of Monday I can get behind.',
    name: 'Jamie Chen', title: 'Head of production', company: 'Common Ground', initials: 'JC', color: 'lime'
  },
];

export const plans = [
  { name: 'Starter', description: 'For people turning ideas into projects.', monthly: 0, annual: 0, button: 'Explore Starter', features: ['Up to 3 active projects', 'Personal task board', 'Simple timeline', 'Weekly overview'], note: 'No payment collected in this demo' },
  { name: 'Pro', description: 'For small teams making big things.', monthly: 18, annual: 14, button: 'Explore Pro', highlight: true, features: ['Unlimited projects', 'Team workload view', 'Milestones & dependencies', 'Insights & reporting', 'Shared project notes'], note: 'Illustrative price per seat' },
  { name: 'Business', description: 'For studios growing without the chaos.', monthly: 39, annual: 31, button: 'Explore Business', features: ['Everything in Pro', 'Multiple team spaces', 'Custom workflow templates', 'Advanced permissions preview', 'Priority onboarding preview'], note: 'Illustrative price per seat' },
];

export const faqs = [
  { q: 'What exactly is Morrow?', a: 'Morrow is a fictional SaaS concept for creative project planning, team coordination, and workload visibility. This website and its dashboard are a fully interactive frontend demonstration.' },
  { q: 'Can I actually create an account?', a: 'Not in this demo. You can explore the interface, create temporary demo projects, and try the forms, but there is no account server, authentication, database, or data sync.' },
  { q: 'Does the dashboard show real company information?', a: 'No. All projects, activity, charts, customer names, and performance figures are fictional sample data so you can explore the product experience safely.' },
  { q: 'What happens when I choose a paid plan?', a: 'You will see a demo-only plan selection screen. The listed prices are illustrative. This frontend never collects card details, charges money, or creates a subscription.' },
  { q: 'Will my changes be saved?', a: 'New projects and interface changes live in React state during your current visit. Reloading the page resets the demo. Nothing is sent to a server or stored in a database.' },
];

export const initialProjects = [
  { id: 1, name: 'Solstice rebrand', client: 'Solstice Co.', status: 'On track', statusKey: 'good', progress: 76, due: 'Oct 28', owner: 'AR', tone: 'coral', type: 'Brand identity', tasks: 24 },
  { id: 2, name: 'Field Notes website', client: 'Field Notes', status: 'In review', statusKey: 'review', progress: 48, due: 'Nov 06', owner: 'MC', tone: 'violet', type: 'Web design', tasks: 18 },
  { id: 3, name: 'Everyday launch', client: 'Everyday Goods', status: 'Needs attention', statusKey: 'warn', progress: 32, due: 'Nov 12', owner: 'JT', tone: 'mint', type: 'Campaign', tasks: 31 },
  { id: 4, name: 'Archive editorial', client: 'Archive Press', status: 'On track', statusKey: 'good', progress: 89, due: 'Oct 21', owner: 'SO', tone: 'yellow', type: 'Editorial', tasks: 12 },
];

export const initialActivities = [
  { id: 1, initials: 'MC', person: 'Maya', action: 'shared final homepage concepts', project: 'Field Notes website', time: '12 min ago', tone: 'violet' },
  { id: 2, initials: 'AR', person: 'Alex', action: 'completed the typography review', project: 'Solstice rebrand', time: '46 min ago', tone: 'coral' },
  { id: 3, initials: 'JT', person: 'Jordan', action: 'flagged a review dependency', project: 'Everyday launch', time: '2 hrs ago', tone: 'mint' },
];
