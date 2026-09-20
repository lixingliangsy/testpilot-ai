export interface InputField {
  key: string
  label: string
  type: 'input' | 'text' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "TestPilot",
  slug: "testpilot-ai",
  productId: "PROD_70TVYlLjKkJS7BHPCYbXHS",
  priceMonthly: 29,
  yearlyProductId: "PROD_2Km05aVjAl5ximbAAB3pPM",
  priceYearly: 290,

  checkoutUrl: "https://pancake.waffo.ai/store/lixingliang-ai-tools-6cilbw8v/checkout/cs_d2c79942-6846-ed46-2107-831c7d67c1d5",
  tagline: "Regression-test your LLM app before every ship.",
  description: "Paste a prompt and expected behavior; get an eval checklist and version regression guard. For dev and QA teams shipping LLM-powered product features.",
  toolTitle: "Evaluate prompt",
  resultLabel: "Eval report",
  ctaLabel: "Evaluate",
  features: [
  "Regression suites",
  "Safety checks",
  "CI integration",
  "Version compare"
],
  inputs: [
  {
    "key": "prompt",
    "label": "Prompt / behavior under test",
    "type": "textarea",
    "placeholder": "Summarize this support ticket as JSON with fields id, summary, priority."
  },
  {
    "key": "expected",
    "label": "Expected behavior",
    "type": "textarea",
    "placeholder": "Valid JSON, priority in Low/Med/High, no PII leaked."
  },
  {
    "key": "version",
    "label": "Model/app version",
    "type": "input",
    "placeholder": "e.g. v2"
  }
] as InputField[],
  definitionLead: "TestPilot — Regression-test your LLM app before every ship. Use it as decision-support: demo mode works without a live key; live runs require configuration. No fabricated metrics, and no claims for SSO/CSV/Slack unless that surface is actually shipped.",
  geoFaq: [
    { q: "What is TestPilot?", a: "Regression-test your LLM app before every ship." },
    { q: "Who should use TestPilot?", a: "Operators and builders who need a fast first draft or checklist from TestPilot." },
    { q: "Does it work without an API key?", a: "Yes in explicit Demo mode. Live AI requires a configured key." },
    { q: "Does it guarantee outcomes?", a: "No. Outputs are decision-support; you still review before publishing or acting." },
    { q: "Does it include SSO, Slack, or bulk CSV?", a: "Only if those features are implemented in this product build — do not assume them from marketing copy." },
    { q: "Where does data go?", a: "Runs may be stored locally under the product's .data/ boundary; treat demos as ephemeral." },
  ],
  systemPrompt: "You are an LLM eval engineer. Given a prompt, expected behavior, and a version tag, run a regression checklist (correctness, safety, format, stability) and report pass/fail with a ship/no-ship verdict.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "50 eval runs/mo"
  },
  {
    "tier": "Pro",
    "price": "$49/mo",
    "desc": "5k runs, regression suites"
  },
  {
    "tier": "Team",
    "price": "$99/mo",
    "desc": "Unlimited, CI, seats"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const prompt = (inputs['prompt'] || '').trim()
  const expected = (inputs['expected'] || '').trim()
  const ver = inputs['version'] || 'v1'
  if (!prompt) return 'Paste a prompt to evaluate.'
  let out = 'LLM EVAL - ' + ver + '\n\n'
  const checks = [
    ['Output matches expected behavior', expected ? /./.test(expected) : false],
    ['No unsafe content', !/(hack|bomb|illegal|self-harm)/i.test(prompt)],
    ['Format valid', /json|list|table|text/i.test(prompt) || true],
    ['Stable enough to ship', true]
  ]
  let score = 0
  checks.forEach(c => { out += (c[1] ? '[PASS] ' : '[FAIL] ') + c[0] + '\n'; if (c[1]) score++ })
  out += '\nEval score: ' + score + '/' + checks.length + '\n'
  out += score < checks.length ? 'Regression risk: review failing checks before ship.' : 'Ready to ship.'
  out += '\n\n--- (Mock. Pro runs regression suites across versions + CI integration.)'
  return out
}
}
