---
applyTo: "**/*.al"
---

# PartnerCore AL Development (v1.4.1)

PartnerCore provides 13 native tools for Business Central AL development. They are registered automatically by the VS Code extension — no MCP server needed.

## Tools

### Planning
- `partnercore_plan_objects({ objects: [...] })` — IDs, paths, namespaces, starter code. Call FIRST.
- `partnercore_next_id({ objectType: "table" })` — Allocate next available ID

### Validation (run after writing)
- `partnercore_diagnose_workspace({})` — Static analysis (20 rules: DataClassification, ApplicationArea, ToolTip, Labels)
- `partnercore_diagnostics_ws({})` — AL compiler diagnostics for all workspace files
- `partnercore_preflight({})` — Final "am I done?" check
- `partnercore_validate({ file: "src/MyTable.al" })` — 17-rule offline AppSource validation
- `partnercore_fix_using({ workspace: true })` — Auto-inject missing `using` directives

### Code Intelligence
- `partnercore_code_review({ file: "src/MyTable.al" })` — Deep AI review (180+ patterns)
- `partnercore_performance_scan({ file: "src/MyTable.al" })` — 12 performance anti-patterns
- `partnercore_knowledge_search({ query: "..." })` — Search 492 KB articles
- `partnercore_knowledge_get({ article: "standards/al-table-review-checklist.md" })` — Fetch specific article
- `partnercore_read_source({ name: "Customer", objectType: "Table" })` — Read BC base app source
- `partnercore_dependencies({ uri: "src/MyTable.al" })` — Dependency graph

### Microsoft AL Tools (always available)
- `al_build` — Build .app
- `al_publish` — Publish to BC
- `al_get_diagnostics` — Compiler diagnostics
- `al_downloadsymbols` — Download symbols
- `al_symbolsearch` — Search symbols

## Workflow

1. **Plan** — `partnercore_plan_objects` for IDs, paths, namespaces
2. **Learn** — `partnercore_knowledge_get` for object type checklist
3. **Write** — Built-in file tools (edit, create)
4. **Validate** — `partnercore_diagnose_workspace` + `partnercore_diagnostics_ws` + `partnercore_preflight`

## Critical AL Rules

- **No hardcoded IDs** — always use `partnercore_plan_objects` or `partnercore_next_id`
- **Labels for Error/Message/Confirm** — `var Err: Label 'text'; Error(Err);`. Caption/ToolTip auto-extracted.
- **DataClassification on TABLE** — fields inherit. Never on FlowField/FlowFilter.
- **ApplicationArea on PAGE controls** — never on TABLE fields (causes AL0124)
- **PascalCase** — all AL identifiers
- **One object per file** — `{Prefix}{Name}.{Type}.al`
- **Namespaces** — get from `partnercore_plan_objects`. Module = functional area, NOT object type.
- **No named parameters** — `:=` syntax is NEVER valid in AL. Use positional parameters only.

## KB Checklists

| Object type | Article |
|------------|---------|
| Tables | `standards/al-table-review-checklist.md` |
| Pages | `standards/al-page-review-checklist.md` |
| Codeunits | `standards/al-codeunit-review-checklist.md` |
| Enums | `standards/al-enum-review-checklist.md` |
| Reports | `standards/al-report-review-checklist.md` |
| Testing | `standards/al-testing.md` |
| Performance | `guides/performance/al-performance-optimization-guide.md` |
| AppSource | `standards/al-appsource-compliance.md` |
| Labels | `standards/al-labels-not-hardcoded-strings.md` |

## Tools Not Available?

1. Reload VS Code → start new chat session
2. Check: `Ctrl+Shift+P` → "PartnerCore: Set API Key"
3. **NEVER silently skip** — code without tools has 10-30 errors per file

<!-- partnercore-version: 1.4.1 -->
