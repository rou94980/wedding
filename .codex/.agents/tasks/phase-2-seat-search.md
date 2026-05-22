# Phase 2 Task: Seat Search

## Goal

Turn the current `/seat-search` placeholder page into a real guest seat lookup experience while preserving the existing site style and deployment model.

## Recommended Scope

- Keep it frontend-only for now
- Store guest/table data in JSON
- Provide a simple name search input
- Display table number, guest name, and optional同行/備註欄位
- Keep the page visually aligned with the existing design system

## Suggested Data File

Create something like:

- `src/data/seatSearch.json`

Suggested shape:

```json
[
  {
    "name": "王小明",
    "table": "A1",
    "side": "男方",
    "note": "靠近舞台"
  }
]
```

## Acceptance Criteria

- Search works client-side without a backend
- No result state is designed cleanly
- Search result is readable on mobile
- Existing router and GitHub Pages support remain intact
- `npm run build` still passes

## Nice-To-Have

- Debounced search
- Partial match by Chinese name
- Querystring sync like `/seat-search?q=王小明`

